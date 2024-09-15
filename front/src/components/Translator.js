import React, { useState } from 'react';
import styles from './Translator.module.css'; 

const Translator = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [language, setLanguage] = useState('en'); 

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'it', name: 'Italian' },
    { code: 'tr', name: 'Turkish' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'pl', name: 'Polish' },
    { code: 'nl', name: 'Dutch' },
    { code: 'sv', name: 'Swedish' },
    { code: 'no', name: 'Norwegian' },
    { code: 'da', name: 'Danish' },
    { code: 'fi', name: 'Finnish' },
    // Add more languages as needed
  ];

  // Demo translations
  const demoTranslations = {
    en: { es: "Hola", fr: "Bonjour", de: "Hallo" },
    es: { en: "Hello", fr: "Bonjour", de: "Hallo" },
    fr: { en: "Hello", es: "Hola", de: "Hallo" },
  };

  const handleTranslate = () => {
    const translatedText = demoTranslations[text] ? demoTranslations[text][language] || "Translation not available" : "Text not found";
    setTranslated(translatedText);
  };

  return (
    <div className={styles.container}>
      <div className={styles.translator}>
        <h2 className={styles.title}>Translator</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate"
          className={styles.input}
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={styles.select}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
        <button onClick={handleTranslate} className={styles.button}>
          Translate
        </button>
        {translated && <p className={styles.translatedText}>{translated}</p>}
      </div>
    </div>
  );
};

export default Translator;
