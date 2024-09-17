const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer'); // For sending emails

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

mongoose.connect('mongodb://127.0.0.1:27017/Appreciate', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered. Please use a different email.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'User not found. Please register first.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
    }
    const token = jwt.sign({ userId: user._id }, 'your-jwt-secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

const faqSchema = new mongoose.Schema({
  imageSrc: String,
  fruitName: String,
  question: String,
  answer: String,
});

const FAQ = mongoose.model('FAQ', faqSchema);

app.get("/faqs", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching FAQs" });
  }
});

app.post("/faqs", async (req, res) => {
  const { imageSrc, fruitName, question, answer } = req.body;
  try {
    const newFaq = new FAQ({ imageSrc, fruitName, question, answer });
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding FAQ" });
  }
});

app.put("/faqs/:id", async (req, res) => {
  const { id } = req.params;
  const { imageSrc, fruitName, question, answer } = req.body;
  try {
    const updatedFaq = await FAQ.findByIdAndUpdate(id, { imageSrc, fruitName, question, answer }, { new: true });
    res.json(updatedFaq);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating FAQ" });
  }
});

app.delete("/faqs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await FAQ.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting FAQ" });
  }
});

const demoFaq = {
  imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6afb3f25e325c3d90657fc0cef2d667d89f634f3c1969b4bea46655370c95e0f',
  fruitName: 'Tangerine',
  question: 'How is Tangerine healthy?',
  answer: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
};

app.get('/initialize', async (req, res) => {
  try {
    const existingFaq = await FAQ.findOne({ question: demoFaq.question });
    if (!existingFaq) {
      await new FAQ(demoFaq).save();
      res.status(201).json({ message: 'Demo FAQ added' });
    } else {
      res.status(200).json({ message: 'Demo FAQ already exists' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error initializing demo FAQ' });
  }
});

// Email checking route
app.post('/api/check-email', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error checking email' });
  }
});
let otpStore = {}; // Temporary store for OTP

app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'Email not registered' });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in memory (or consider saving it in a database)
    otpStore[email] = otp;

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      secure: true,
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "Your-email@gmail.com",
        pass: "Your-Password",
      },
    });

    // Define email options
    const mailOptions = {
      from: 'Your-email@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };

    // Send OTP via email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'OTP sent to your email address' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Error sending OTP' });
  }
});

app.post('/api/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  const storedOtp = otpStore[email];

  if (!storedOtp) {
    return res.status(400).json({ message: 'OTP expired or not found' });
  }

  if (storedOtp === otp) {
    res.status(200).json({ message: 'OTP verified' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

app.post('/api/update-password', async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findOneAndUpdate({ email }, { password: hashedPassword });
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating password' });
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
