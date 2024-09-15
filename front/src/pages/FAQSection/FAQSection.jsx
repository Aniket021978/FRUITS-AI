import { useState, useEffect } from "react";
import styles from "./FAQSection.module.css";
import FAQItem from "./FAQItem";
import axios from "axios";

const initialFaqData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6afb3f25e325c3d90657fc0cef2d667d89f634f3c1969b4bea46655370c95e0f?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab",
    fruitName: "Tangerine",
    question: "How is Tangerine healthy?",
    answer:
      "Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
  },
];

const FAQSection = () => {
  const [faqData, setFaqData] = useState(initialFaqData);
  const [newFaq, setNewFaq] = useState({
    imageSrc: "",
    fruitName: "",
    question: "",
    answer: "Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/faqs")
      .then((response) => setFaqData(response.data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  const handleAddFaq = () => {
    if (newFaq.question.trim() === "") {
      setError("Question is required.");
      return;
    }
    setError("");

    if (editingIndex === null) {
      axios.post("http://127.0.0.1:5000/faqs", newFaq)
        .then((response) => {
          setFaqData([...faqData, response.data]);
          setNewFaq({ imageSrc: "", fruitName: "", question: "", answer: "" });
        })
        .catch((error) => console.error("Error adding FAQ:", error));
    } else {
      const id = faqData[editingIndex]._id;
      axios.put(`http://127.0.0.1:5000/faqs/${id}`, newFaq)
        .then((response) => {
          const updatedFaqs = faqData.map((item, index) =>
            index === editingIndex ? response.data : item
          );
          setFaqData(updatedFaqs);
          setEditingIndex(null);
          setNewFaq({ imageSrc: "", fruitName: "", question: "", answer: "" });
        })
        .catch((error) => console.error("Error updating FAQ:", error));
    }
  };

  const handleEditFaq = (index) => {
    setEditingIndex(index);
    setNewFaq(faqData[index]);
  };

  const handleDeleteFaq = (index) => {
    const id = faqData[index]._id;
    axios.delete(`http://127.0.0.1:5000/faqs/${id}`)
      .then(() => {
        const updatedFaqs = faqData.filter((_, i) => i !== index);
        setFaqData(updatedFaqs);
      })
      .catch((error) => console.error("Error deleting FAQ:", error));
  };

  return (
    <section className={styles.frame}>
      <h2 className={styles.title}>FAQ Section</h2>
      {faqData.map((item, index) => (
        <div key={item._id} className={styles.faqItem}>
          <FAQItem {...item} />
          <button onClick={() => handleEditFaq(index)} className={styles.editButton}>
            Edit
          </button>
          <button onClick={() => handleDeleteFaq(index)} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      ))}

      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>{editingIndex !== null ? "Edit FAQ" : "Add a New FAQ"}</h3>
        <input
          type="text"
          name="imageSrc"
          value={newFaq.imageSrc}
          onChange={handleChange}
          placeholder="Image URL"
          className={styles.input}
        />
        <input
          type="text"
          name="fruitName"
          value={newFaq.fruitName}
          onChange={handleChange}
          placeholder="Fruit Name"
          className={styles.input}
        />
        <input
          type="text"
          name="question"
          value={newFaq.question}
          onChange={handleChange}
          placeholder="FAQ Question"
          className={styles.input}
        />
        {editingIndex !== null && (
          <input
            type="text"
            name="answer"
            value={newFaq.answer}
            onChange={handleChange}
            placeholder="FAQ Answer"
            className={styles.input}
          />
        )}
        <button onClick={handleAddFaq} className={styles.addButton}>
          {editingIndex !== null ? "Update FAQ" : "Add FAQ"}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </section>
  );
};

export default FAQSection;
