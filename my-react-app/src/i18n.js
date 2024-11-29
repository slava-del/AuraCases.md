// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ro: {
    translation: {
      "Home": "Acasă",
      "Product": "Produs",
      "Features": "Caracteristici",
      "Testimonials": "Recenzii", // Changed from "Testimoniale" to "Recenzii"
      "FAQ": "Întrebări frecvente",
      "Order": "Comandă",
      "Welcome to AuraCases": "Bine ați venit la AuraCases",
      "Why Choose AuraCases?": "De ce să alegeți AuraCases?",
      "Unique Design": "Design Unic",
      "Durability": "Durabilitate",
      "Easy to Use": "Ușor de Folosit",
      "Personalize your iPhone experience": "Personalizează-ți experiența iPhone",
      "Discover ultimate protection with AuraCases, our cases with customizable e-ink display. Match your case to your style effortlessly.": "Descoperă protecția supremă cu AuraCases, carcasele noastre cu afișaj e-ink personalizabil. Potrivește-ți carcasa la stilul tău fără efort.",
      "Price": "Preț",
      "Order Now": "Comandă acum",
      "Moldova Flag": "Steagul Moldovei",
      "Made in Moldova": "Fabricat în Moldova",
      "Our Product": "Produsul nostru",
      "Select your iPhone Model": "Selectează modelul tău de iPhone",
      "Customize Your Case": "Personalizează-ți carcasa",
      "Customize your AuraCase to perfectly match your style and personality.": "Personalizează-ți AuraCase pentru a se potrivi perfect stilului și personalității tale.",
      "Choose your preferred iPhone model and explore our range of features and specifications.": "Alege modelul tău preferat de iPhone și explorează gama noastră de caracteristici și specificații.",
      "After purchase, you can customize the e-ink display with your favorite designs, messages, or images.": "După achiziție, poți personaliza afișajul e-ink cu desene, mesaje sau imagini preferate.",
      "Purchase initiated!": "Achiziția a fost inițiată!",
      "Stay Updated": "Rămâi la curent",
      "Subscribe to our newsletter for the latest news and exclusive offers.": "Abonează-te la newsletter-ul nostru pentru cele mai recente știri și oferte exclusive.",
      "Enter your email address": "Introdu adresa ta de email",
      "Subscribe": "Abonează-te",
      "All rights reserved": "Toate drepturile rezervate",
      "Explore Our Designs": "Explorează Designurile Noastre",
      "How to Use AuraCases & Product Demonstration": "Cum să utilizezi AuraCases și demonstrarea produsului",
      "Buy AuraCase from Us": "Cumpără AuraCase de la noi",
      "Order your AuraCase directly from our website and enjoy fast delivery.": "Comandă AuraCase direct de pe site-ul nostru și bucură-te de livrare rapidă.",
      "Download Special App": "Descarcă aplicația specială",
      "Install the AuraCase app to customize your e-ink display effortlessly.": "Instalează aplicația AuraCase pentru a personaliza afișajul e-ink fără efort.",
      "Take a Photo or Download": "Fă o fotografie sau descarcă",
      "Choose or take a photo, or download your favorite design to upload.": "Alege sau fă o fotografie, sau descarcă designul tău preferat pentru a-l încărca.",
      "Enjoy Your Unique Design": "Bucură-te de designul tău unic",
      "Display your custom design on the e-ink screen and stand out!": "Afișează designul tău personalizat pe ecranul e-ink și evidențiază-te!",
      "Back to Top": "Înapoi sus",
      "Showcase Enlarged": "Showcase Mărit",
      "testimonials": [
        {
          "name": "Alex M.",
          "content": "AuraCases mi-a transformat telefonul! Ecranul e-ink este revoluționar.",
          "rating": 5
        },
        {
          "name": "Sarah L.",
          "content": "Elegant, durabil și unic. Exact ceea ce căutam!",
          "rating": 5
        },
        {
          "name": "Mike T.",
          "content": "Calitate excelentă și opțiuni nelimitate de personalizare. Recomand cu căldură!",
          "rating": 4
        },
        {
          "name": "Ion B.",
          "content": "Produsele locale sunt de top! Foarte mulțumit de AuraCases.",
          "rating": 5
        },
        {
          "name": "Elena C.",
          "content": "Servicii excelente și produs de calitate superioară!",
          "rating": 5
        },
        {
          "name": "Mihai D.",
          "content": "Design modern și funcționalitate impecabilă.",
          "rating": 5
        }
      ]
    }
  },
  ru: {
    translation: {
      "Home": "Главная",
      "Product": "Продукт",
      "Features": "Характеристики",
      "Testimonials": "Отзывы", // "Отзывы" is appropriate and commonly used
      "FAQ": "Часто задаваемые вопросы", // Changed from "Вопросы и ответы" to "Часто задаваемые вопросы" for better clarity
      "Order": "Заказ",
      "Welcome to AuraCases": "Добро пожаловать в AuraCases",
      "Why Choose AuraCases?": "Почему выбирают AuraCases?",
      "Unique Design": "Уникальный дизайн",
      "Durability": "Долговечность",
      "Easy to Use": "Простота использования", // Changed to "Простота использования" for better clarity
      "Personalize your iPhone experience": "Персонализируйте свой опыт использования iPhone",
      "Discover ultimate protection with AuraCases, our cases with customizable e-ink display. Match your case to your style effortlessly.": "Откройте для себя идеальную защиту с AuraCases, нашими чехлами с настраиваемым дисплеем e-ink. Без труда подберите чехол под свой стиль.",
      "Price": "Цена",
      "Order Now": "Заказать сейчас",
      "Moldova Flag": "Флаг Молдовы",
      "Made in Moldova": "Произведено в Молдове",
      "Our Product": "Наш продукт",
      "Select your iPhone Model": "Выберите модель вашего iPhone",
      "Customize Your Case": "Настройте свой чехол",
      "Customize your AuraCase to perfectly match your style and personality.": "Настройте свой AuraCase, чтобы идеально соответствовать вашему стилю и личности.",
      "Choose your preferred iPhone model and explore our range of features and specifications.": "Выберите предпочитаемую модель iPhone и изучите наш ассортимент характеристик и спецификаций.",
      "After purchase, you can customize the e-ink display with your favorite designs, messages, or images.": "После покупки вы можете настроить дисплей e-ink с вашими любимыми дизайнами, сообщениями или изображениями.",
      "Purchase initiated!": "Покупка начата!",
      "Stay Updated": "Будьте в курсе",
      "Subscribe to our newsletter for the latest news and exclusive offers.": "Подпишитесь на нашу рассылку, чтобы получать последние новости и эксклюзивные предложения.",
      "Enter your email address": "Введите свой адрес электронной почты",
      "Subscribe": "Подписаться",
      "All rights reserved": "Все права защищены",
      "Explore Our Designs": "Изучите наши дизайны",
      "How to Use AuraCases & Product Demonstration": "Как использовать AuraCases и демонстрация продукта",
      "Buy AuraCase from Us": "Купите AuraCase у нас",
      "Order your AuraCase directly from our website and enjoy fast delivery.": "Закажите AuraCase прямо на нашем сайте и наслаждайтесь быстрой доставкой.",
      "Download Special App": "Скачать специальное приложение",
      "Install the AuraCase app to customize your e-ink display effortlessly.": "Установите приложение AuraCase, чтобы без труда настроить дисплей e-ink.",
      "Take a Photo or Download": "Сделайте фото или скачайте",
      "Choose or take a photo, or download your favorite design to upload.": "Выберите или сделайте фото, или скачайте любимый дизайн для загрузки.",
      "Enjoy Your Unique Design": "Наслаждайтесь своим уникальным дизайном",
      "Display your custom design on the e-ink screen and stand out!": "Отображайте свой кастомный дизайн на экране e-ink и выделяйтесь!",
      "Back to Top": "Наверх",
      "Showcase Enlarged": "Увеличенный Showcase",
      "testimonials": [
        {
          "name": "Алекс М.",
          "content": "AuraCases преобразил мой телефон! Экран e-ink – это революция.",
          "rating": 5
        },
        {
          "name": "Сара Л.",
          "content": "Элегантный, прочный и уникальный. Именно то, что я искала!",
          "rating": 5
        },
        {
          "name": "Майк Т.",
          "content": "Отличное качество и неограниченные возможности настройки. Настоятельно рекомендую!",
          "rating": 4
        },
        {
          "name": "Ион Б.",
          "content": "Местные продукты – на высшем уровне! Очень доволен AuraCases.",
          "rating": 5
        },
        {
          "name": "Елена С.",
          "content": "Отличный сервис и высококачественный продукт!",
          "rating": 5
        },
        {
          "name": "Михаил Д.",
          "content": "Современный дизайн и безупречная функциональность.",
          "rating": 5
        }
      ]
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ro',
  fallbackLng: 'ro',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
