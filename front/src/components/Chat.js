import React, { useState } from 'react';
import styles from './Chat.module.css'; 

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { text: input, sender: 'user' }]);

      // Simulate a chatbot response
      const response = getChatbotResponse(input);
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
      setInput('');
    }
  };

  const getChatbotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes('vitamin c')) {
      return "Kiwis and oranges are great sources of vitamin C!";
    } else if (input.includes('hello')) {
      return "Hello, write a fruit name to know about it.";
    } else if (input.includes('recipe')) {
      return "How about a kiwi smoothie? Just blend kiwis with yogurt and a bit of honey!";
    } else if (input.includes('banana')) {
      return "Bananas are a great source of potassium and make an excellent snack!";
    } else if (input.includes('apple')) {
      return "Apples are high in fiber and vitamin C. They make a great addition to any meal!";
    } else if (input.includes('strawberry')) {
      return "Strawberries are rich in antioxidants and can be used in desserts or salads!";
    } else if (input.includes('grape')) {
      return "Grapes are hydrating and can be eaten fresh or dried as raisins!";
    } else if (input.includes('orange')) {
      return "Oranges are not only juicy but also packed with vitamin C!";
    } else if (input.includes('kiwi')) {
      return "Kiwis are a great source of vitamin C, vitamin K, and fiber!";
    } else if (input.includes('mango')) {
      return "Mangoes are rich in vitamins A and C, perfect for smoothies!";
    } else if (input.includes('pineapple')) {
      return "Pineapple contains bromelain, which may help with digestion!";
    } else if (input.includes('blueberry')) {
      return "Blueberries are low in calories but high in nutrients and antioxidants!";
    } else if (input.includes('raspberry')) {
      return "Raspberries are high in fiber and can be added to cereals or desserts!";
    } else if (input.includes('peach')) {
      return "Peaches are a good source of vitamins A and C, great for snacking!";
    } else if (input.includes('watermelon')) {
      return "Watermelon is hydrating and low in calories, perfect for summer!";
    } else if (input.includes('cantaloupe')) {
      return "Cantaloupe is rich in vitamins A and C, great for hydration!";
    } else if (input.includes('papaya')) {
      return "Papaya contains enzymes that aid digestion and is high in vitamin C!";
    } else if (input.includes('cherry')) {
      return "Cherries are packed with antioxidants and can help reduce inflammation!";
    } else if (input.includes('apricot')) {
      return "Apricots are a good source of vitamins A and C, perfect for snacking!";
    } else if (input.includes('blackberry')) {
      return "Blackberries are rich in vitamins and antioxidants, great for smoothies!";
    } else if (input.includes('clementine')) {
      return "Clementines are sweet, easy to peel, and packed with vitamin C!";
    } else if (input.includes('dragon fruit')) {
      return "Dragon fruit is low in calories and high in antioxidants, perfect for a unique treat!";
    } else if (input.includes('fig')) {
      return "Figs are high in fiber and can help with digestion!";
    } else if (input.includes('gooseberry')) {
      return "Gooseberries are tart and rich in vitamin C, great for jams!";
    } else if (input.includes('jackfruit')) {
      return "Jackfruit is versatile and can be used in both sweet and savory dishes!";
    } else if (input.includes('kiwano')) {
      return "Kiwano, or horned melon, is refreshing and rich in vitamins!";
    } else if (input.includes('lychee')) {
      return "Lychee is a tropical fruit with a sweet, floral flavor!";
    } else if (input.includes('nectarine')) {
      return "Nectarines are similar to peaches but have smooth skin!";
    } else if (input.includes('olive')) {
      return "Olives are packed with healthy fats and are great for snacking!";
    } else if (input.includes('passion fruit')) {
      return "Passion fruit is aromatic and adds a tropical twist to dishes!";
    } else if (input.includes('persimmon')) {
      return "Persimmons are sweet and can be eaten fresh or dried!";
    } else if (input.includes('plum')) {
      return "Plums are juicy and can be enjoyed fresh or in desserts!";
    } else if (input.includes('quince')) {
      return "Quince is often used in jams and jellies due to its tart flavor!";
    } else if (input.includes('rhubarb')) {
      return "Rhubarb is often used in pies and is high in fiber!";
    } else if (input.includes('starfruit')) {
      return "Starfruit is unique in shape and has a sweet-tart flavor!";
    } else if (input.includes('tangerine')) {
      return "Tangerines are sweet and easy to peel, perfect for snacks!";
    } else if (input.includes('ugli fruit')) {
      return "Ugli fruit is a hybrid citrus fruit, sweet and juicy!";
    } else {
      return "I'm sorry, I didn't understand that. Can you ask about fruits, recipes, or their health benefits?";
    }
  };

  return (
    <div className={styles['chatbot-wrapper']}>
      <div className={styles['chatbot-container']}>
        <div className={styles['chatbot-messages']}>
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === 'user' ? styles['message-user'] : styles['message-bot']}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className={styles['chatbot-input']}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about fruits..."
            className={styles['input-box']}
          />
          <button onClick={handleSend} className={styles['send-button']}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
