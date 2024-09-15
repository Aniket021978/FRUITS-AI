import React, { useState } from 'react';
import styles from './Chat.module.css'; // Import the CSS module

const fruits = [
  { id: 1, name: 'Apple', details: 'A sweet red fruit.' },
  { id: 2, name: 'Banana', details: 'A long yellow fruit.' },
  { id: 3, name: 'Cherry', details: 'A small red fruit.' },
  { id: 4, name: 'Date', details: 'A sweet brown fruit.' },
  { id: 5, name: 'Fig', details: 'A soft fruit with edible seeds.' },
  { id: 6, name: 'Grape', details: 'A small round fruit that comes in bunches.' },
  { id: 7, name: 'Kiwi', details: 'A brown fuzzy fruit with green flesh.' },
  { id: 8, name: 'Lemon', details: 'A sour yellow fruit.' },
  { id: 9, name: 'Mango', details: 'A juicy tropical fruit.' },
  { id: 10, name: 'Nectarine', details: 'A smooth-skinned fruit similar to a peach.' },
  { id: 11, name: 'Orange', details: 'A citrus fruit with a tangy taste.' },
  { id: 12, name: 'Papaya', details: 'A tropical fruit with orange flesh.' },
  { id: 13, name: 'Peach', details: 'A soft fruit with a fuzzy skin.' },
  { id: 14, name: 'Pear', details: 'A sweet fruit with a rounded base.' },
  { id: 15, name: 'Pineapple', details: 'A tropical fruit with spiky skin.' },
  { id: 16, name: 'Plum', details: 'A juicy fruit with a pit.' },
  { id: 17, name: 'Pomegranate', details: 'A fruit with red seeds inside.' },
  { id: 18, name: 'Raspberry', details: 'A small red fruit with a tart flavor.' },
  { id: 19, name: 'Strawberry', details: 'A sweet red fruit with seeds on the outside.' },
  { id: 20, name: 'Watermelon', details: 'A large fruit with a green rind and red flesh.' },
  // Add more fruits here
];

const Chat = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className={styles.gradientBackground}>
      <div className={styles.chatService}>
        <h2 className={styles.title}>Fruits List</h2>
        <div className={styles.fruitsList}>
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className={styles.fruitItem}
              onClick={() => handleClick(fruit)}
            >
              {fruit.name}
            </div>
          ))}
        </div>
        {selectedFruit && (
          <div className={styles.fruitDetails}>
            <h3>{selectedFruit.name}</h3>
            <p>{selectedFruit.details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
