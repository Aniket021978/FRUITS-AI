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
    { code: 'bn', name: 'Bengali' },
    { code: 'te', name: 'Telugu' },
    { code: 'mr', name: 'Marathi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'kn', name: 'Kannada' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'ur', name: 'Urdu' },
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
  ];

  // Fruit translations in different languages
  const demoTranslations = {
    apple: { en: 'Apple', es: 'Manzana', fr: 'Pomme', de: 'Apfel', zh: '苹果', ar: 'تفاح', hi: 'सेब', bn: 'আপেল', te: 'ఆపిల్', mr: 'सफरचंद', ta: 'ஆப்பிள்', gu: 'એપલ', kn: 'ಆಪಲ್', ml: 'ആപ്പിൾ', pa: 'ਸੇਬ', ur: 'سیب', ja: 'リンゴ', ko: '사과', pt: 'Maçã', it: 'Mela', tr: 'Elma', vi: 'Táo', pl: 'Jabłko', nl: 'Appel', sv: 'Äpple', no: 'Eple', da: 'Æble', fi: 'Omena' },
    banana: { en: 'Banana', es: 'Plátano', fr: 'Banane', de: 'Banane', zh: '香蕉', ar: 'موز', hi: 'केला', bn: 'কলা', te: 'అరటిపండు', mr: 'केला', ta: 'வாழைப்பழம்', gu: 'કેળા', kn: 'ಬಾಳೆಹಣ್ಣು', ml: 'വഴുതന', pa: 'ਕੇਲਾ', ur: 'کیلا', ja: 'バナナ', ko: '바나나', pt: 'Banana', it: 'Banana', tr: 'Muz', vi: 'Chuối', pl: 'Banan', nl: 'Banaan', sv: 'Banan', no: 'Banan', da: 'Banan' },
    orange: { en: 'Orange', es: 'Naranja', fr: 'Orange', de: 'Orange', zh: '橙子', ar: 'برتقال', hi: 'संतरा', bn: 'কমলা', te: 'ఆరెంజ్', mr: 'संत्रा', ta: 'ஆரஞ்சு', gu: 'ઓરેન્જ', kn: 'ಆರಂಜ್', ml: 'ഓറഞ്ച്', pa: 'ਸੰਤਰਾ', ur: 'سنترہ', ja: 'オレンジ', ko: '오렌지', pt: 'Laranja', it: 'Arancia', tr: 'Portakal', vi: 'Cam cam', pl: 'Pomarańcza', nl: 'Sinaasappel', sv: 'Apelsin', no: 'Appelsin', da: 'Appelsin', fi: 'Appelsiini' },
    mango: { en: 'Mango', es: 'Mango', fr: 'Mangue', de: 'Mango', zh: '芒果', ar: 'مانجو', hi: 'आम', bn: 'আম', te: 'మామిడి', mr: 'आंबा', ta: 'மாங்காய்', gu: 'માંગરો', kn: 'ಮಾವು', ml: 'മാമ്പഴം', pa: 'ਆਮ', ur: 'آم', ja: 'マンゴー', ko: '망고', pt: 'Manga', it: 'Mango', tr: 'Mango', vi: 'Xoài', pl: 'Mango', nl: 'Mango', sv: 'Mango', no: 'Mango', da: 'Mango', fi: 'Mango' },
    grape: { en: 'Grape', es: 'Uva', fr: 'Raisin', de: 'Traube', zh: '葡萄', ar: 'عنب', hi: 'अंगूर', bn: 'আঙ্গুর', te: 'ద్రాక్ష', mr: 'द्राक्ष', ta: 'துருத்து', gu: 'દ્રાક્ષ', kn: 'ಅಂಗೂರ', ml: 'ദ്രാക്ഷ', pa: 'ਅੰਗੂਰ', ur: 'انگور', ja: 'ぶどう', ko: '포도', pt: 'Uva', it: 'Uva', tr: 'Üzüm', vi: 'Nho', pl: 'Winogrono', nl: 'Druif', sv: 'Druva', no: 'Druer', da: 'Drue', fi: 'Rypäle' },
    pineapple: { en: 'Pineapple', es: 'Piña', fr: 'Ananas', de: 'Ananas', zh: '菠萝', ar: 'أناناس', hi: 'अनानास', bn: 'পাইনঅ্যাপল', te: 'పైనాపిల్', mr: 'अनानास', ta: 'அன்னாசி', gu: 'અનાનસ', kn: 'ನೀಲಿ', ml: 'അനാനസ്', pa: 'ਅਨਾਨਾਸ', ur: 'پائن ایپل', ja: 'パイナップル', ko: '파인애플', pt: 'Abacaxi', it: 'Ananas', tr: 'Ananas', vi: 'Dứa', pl: 'Ananas', nl: 'Ananas', sv: 'Ananas', no: 'Ananas', da: 'Ananas', fi: 'Ananas' },
    strawberry: { en: 'Strawberry', es: 'Fresa', fr: 'Fraise', de: 'Erdbeere', zh: '草莓', ar: 'فراولة', hi: 'स्ट्रॉबेरी', bn: 'স্ট্রবেরি', te: 'స్ట్రాబెర్రీ', mr: 'स्ट्रॉबेरी', ta: 'ஸ்ட்ராபெர்ரி', gu: 'સ્ટ્રોબેરી', kn: 'ಸ್ಟ್ರಾಬೆರಿ', ml: 'സ്ട്രോബെറി', pa: 'ਸਟ੍ਰਾਬੇਰੀ', ur: 'اسٹرابیری', ja: 'いちご', ko: '딸기', pt: 'Morango', it: 'Fragola', tr: 'Çilek', vi: 'Dâu', pl: 'Truskawka', nl: 'Aardbei', sv: 'Jordgubbe', no: 'Jordbær', da: 'Jordbær', fi: 'Mansikka' },
    watermelon: { en: 'Watermelon', es: 'Sandía', fr: 'Pastèque', de: 'Wassermelone', zh: '西瓜', ar: 'بطيخ', hi: 'तरबूज', bn: 'তরমুজ', te: 'తలపపండు', mr: 'तारबूज', ta: 'தர்பூசணி', gu: 'તરબૂચ', kn: 'ತೊಮಟೋ', ml: 'തരബൂജം', pa: 'ਤਰਬੂਜ', ur: 'تربوز', ja: 'スイカ', ko: '수박', pt: 'Melancia', it: 'Anguria', tr: 'Karpuz', vi: 'Dưa hấu', pl: 'Arbuz', nl: 'Watermeloen', sv: 'Vattenmelon', no: 'Vannmelon', da: 'Vandmelon', fi: 'Meloni' },
    peach: { en: 'Peach', es: 'Durazno', fr: 'Pêche', de: 'Pfirsich', zh: '桃子', ar: 'خوخ', hi: 'आड़ू', bn: 'আড়াই', te: 'పీచ్', mr: 'आडू', ta: 'ஆப்பிள்', gu: 'પીચ', kn: 'ಪೀಚ್', ml: 'പീച്ച്', pa: 'ਪੀਚ', ur: 'آڑو', ja: '桃', ko: '복숭아', pt: 'Pêssego', it: 'Pesca', tr: 'Şeftali', vi: 'Đào', pl: 'Brzoskwinia', nl: 'Perzik', sv: 'Persika', no: 'Fersken', da: 'Fersken', fi: 'Persikka' },
    pear: { en: 'Pear', es: 'Pera', fr: 'Poire', de: 'Birne', zh: '梨', ar: 'كمثرى', hi: 'नाशपाती', bn: 'নাশপাতি', te: 'పేర', mr: 'नाशपाती', ta: 'நாசிக்காய்', gu: 'નાશપાટી', kn: 'ನಾಶ್ಪಾತಿ', ml: 'പേര്', pa: 'ਨਾਸਪਾਤੀ', ur: 'ناشپاتی', ja: '梨', ko: '배', pt: 'Pera', it: 'Pera', tr: 'Armut', vi: 'Lê', pl: 'Gruszka', nl: 'Peer', sv: 'Päron', no: 'Pære', da: 'Pære', fi: 'Päärynä' },
    plum: { en: 'Plum', es: 'Ciruela', fr: 'Prune', de: 'Pflaume', zh: '梅子', ar: 'برقوق', hi: 'आलूबुखारा', bn: 'আলুবোখারা', te: 'ఉసిరి', mr: 'आलूबुखारा', ta: 'அலுவார்ட்', gu: 'જાંભળ', kn: 'ಪ್ಲಮ್', ml: 'പ്ലം', pa: 'ਪਲਮ', ur: '/plum', ja: 'プラム', ko: '자두', pt: 'Ameixa', it: 'Susina', tr: 'Erik', vi: 'Mận', pl: 'Śliwka', nl: 'Pruim', sv: 'Plommon', no: 'Plomme', da: 'Blomme', fi: 'Luumu' },
    cherry: { en: 'Cherry', es: 'Cereza', fr: 'Cerise', de: 'Kirsche', zh: '樱桃', ar: 'كرز', hi: 'चेरी', bn: 'চেরি', te: 'చెర్రీ', mr: 'चेर्री', ta: 'செர்ரி', gu: 'ચેરી', kn: 'ಚೆರಿ', ml: 'ചെറി', pa: 'ਚੈਰੀ', ur: 'چیری', ja: 'さくらんぼ', ko: '체리', pt: 'Cereja', it: 'Ciliegia', tr: 'Kiraz', vi: 'Anh đào', pl: 'Wiśnia', nl: 'Kers', sv: 'Körsbär', no: 'Kirsebær', da: 'Kirsebær', fi: 'Kirsikka' },
    apricot: { en: 'Apricot', es: 'Albaricoque', fr: 'Abricot', de: 'Aprikose', zh: '杏子', ar: 'مشمش', hi: 'खुबानी', bn: 'আলুবোখারা', te: 'ఉసిరి', mr: 'खुबानी', ta: 'பருத்தி', gu: 'ખुबાની', kn: 'ಅಪ್ರಿಕಾಟ್', ml: 'അപ്രിക്കോട്ട്', pa: 'ਅਪਰਿਕੌਟ', ur: 'خوبانی', ja: 'アプリコット', ko: '살구', pt: 'Damasco', it: 'Albicocca', tr: 'Kayısı', vi: 'Mơ', pl: 'Morela', nl: 'Abrikoos', sv: 'Aprikos', no: 'Aprikos', da: 'Abrikos', fi: 'Aprikoosi' },
    avocado: { en: 'Avocado', es: 'Aguacate', fr: 'Avocat', de: 'Avocado', zh: '鳄梨', ar: 'أفوكادو', hi: 'एवोकाडो', bn: 'অ্যাভোকাডো', te: 'అవకాడో', mr: 'अवोकाडो', ta: 'அவகாடோ', gu: 'અવોકાડો', kn: 'ಅವಕಾಡೋ', ml: 'അവക്കാഡോ', pa: 'ਅਵੋਕੇਡੋ', ur: 'ایووکاڈو', ja: 'アボカド', ko: '아보카도', pt: 'Abacate', it: 'Avocado', tr: 'Avokado', vi: 'Bơ', pl: 'Awokado', nl: 'Avocado', sv: 'Avokado', no: 'Avokado', da: 'Avocado', fi: 'Avokado' },
    kiwi: { en: 'Kiwi', es: 'Kiwi', fr: 'Kiwi', de: 'Kiwi', zh: '猕猴桃', ar: 'كيوي', hi: 'कीवी', bn: 'কিউই', te: 'కీవీ', mr: 'कीवी', ta: 'கிவி', gu: 'કિવી', kn: 'ಕಿವಿ', ml: 'കിവി', pa: 'ਕਿਵੀ', ur: 'کیوی', ja: 'キウイ', ko: '키위', pt: 'Kiwi', it: 'Kiwi', tr: 'Kivi', vi: 'Kiwi', pl: 'Kiwi', nl: 'Kiwi', sv: 'Kiwi', no: 'Kiwi', da: 'Kiwi', fi: 'Kiwi' },
    pomegranate: { en: 'Pomegranate', es: 'Granada', fr: 'Grenade', de: 'Granatapfel', zh: '石榴', ar: 'رمان', hi: 'अनार', bn: 'ডালিম', te: 'పొమ్మగాండ', mr: 'अनार', ta: 'மாதுளை', gu: 'અનાર', kn: 'ದಾಳಿಂಬು', ml: 'ആനർക്കോടി', pa: 'ਡਾਲਿਮ', ur: 'انار', ja: 'ザクロ', ko: '석류', pt: 'Romã', it: 'Melograno', tr: 'Nar', vi: 'Lựu', pl: 'Granat', nl: 'Granaatappel', sv: 'Granatäpple', no: 'Granateple', da: 'Granatæble', fi: 'Granaattiomena' },
    cantaloupe: { en: 'Cantaloupe', es: 'Cantalupo', fr: 'Cantaloup', de: 'Cantaloupe', zh: '哈密瓜', ar: 'كانتلوب', hi: 'कैंटालूप', bn: 'ক্যান্টালুপ', te: 'కాంటలూప్', mr: 'कॅंटालूप', ta: 'காண்டலூப்', gu: 'કેન્ટલુપ', kn: 'ಕ್ಯಾಂಟಲೂಪ್', ml: 'കാൻടലൂപ്പ്', pa: 'ਕੈਂਟਲੂਪ', ur: 'کینٹلوپ', ja: 'カンタロープ', ko: '멜론', pt: 'Cantalupo', it: 'Cantalupo', tr: 'Kantalup', vi: 'Dưa vàng', pl: 'Kantalupa', nl: 'Cantaloupe', sv: 'Cantaloupe', no: 'Cantaloupe', da: 'Cantaloupe', fi: 'Kantaloupe' },
    honeydew: { en: 'Honeydew', es: 'Melón', fr: 'Melon', de: 'Honigmelone', zh: '哈密瓜', ar: 'شمام', hi: 'हनीड्यू', bn: 'হানিডু', te: 'హనిడ్యూ', mr: 'हनीड्यू', ta: 'ஹனி டூ', gu: 'હનીડ્યુ', kn: 'ಹನಿಡ್ಯೂ', ml: 'ഹണി ഡ്യൂ', pa: 'ਹਨੀਡਿਊ', ur: 'ہنی ڈیو', ja: 'ハニーデュー', ko: '허니듀', pt: 'Melão', it: 'Melone', tr: 'Kavun', vi: 'Dưa mật', pl: 'Miodowa melon', nl: 'Honingmeloen', sv: 'Honungsmelon', no: 'Honningmelon', da: 'Honningmelon', fi: 'Hunajameloni' },
    lime: { en: 'Lime', es: 'Lima', fr: 'Citron vert', de: 'Limette', zh: '青柠', ar: 'ليمون أخضر', hi: 'नींबू', bn: 'চুন', te: 'నిమ్మకాయ', mr: 'लिंबू', ta: 'எலுமிச்சை', gu: 'લીમડો', kn: 'ನಿಂಬೆ', ml: 'ലൈം', pa: 'ਲੀਮੂ', ur: 'لیموں', ja: 'ライム', ko: '라임', pt: 'Lima', it: 'Lime', tr: 'Limon', vi: 'Chanh', pl: 'Limonka', nl: 'Limoen', sv: 'Lime', no: 'Lime', da: 'Lime', fi: 'Lime' }
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
