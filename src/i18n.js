// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translation resources
const resources = {
  ro: {
    translation: {
      // **Navigation**
      "Home": "Acasă",
      "Product": "Produs",
      "Features": "Caracteristici",
      "Specifications": "Specificații",
      "Testimonials": "Recenzii", 
      "FAQ": "Întrebări frecvente",
      "Order": "Comandă",
      "Contact": "Contact",
      
      // **Welcome Section**
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
      "Made in Moldova": "Livrare în Moldova",
      "Our Product": "AuraCase",
      "Select your iPhone Model": "Selectează modelul tău de iPhone",
      "Customize Your Case": "Personalizează-ți carcasa",
      "Customize your AuraCase to perfectly match your style and personality.": "Personalizează husa AuraCase cu orice design dorit.",
      "Choose your preferred iPhone model and explore our range of features and specifications.": "Alege-ți iPhone-ul și transformă-l în ce dorești, dă-i personalitatea ta unică!",
      "After purchase, you can customize the e-ink display with your favorite designs, messages, or images.": "După achiziție, poți personaliza afișajul e-ink cu desene, mesaje sau imagini preferate.",
      "Purchase initiated!": "Achiziția a fost inițiată!",
      "Stay Updated": "Rămâi la curent",
      "Subscribe to our newsletter for the latest news and exclusive offers.": "Abonează-te la newsletter-ul nostru pentru cele mai recente știri și oferte exclusive.",
      "Enter your email address": "Introdu adresa ta de email",
      "Subscribe": "Abonează-te",
      "All rights reserved": "Toate drepturile rezervate",
      "Explore Our Designs": "Descoperă Husele",
      "How to Use AuraCases & Product Demonstration": "Cum funcționează AuraCases",
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
      "Personalizează experiența": "Personalizează experiența",
      "Schimbă-ți stilul telefonului - ": "Schimbă-ți stilul telefonului - ",

      // **Features List**
      "feature_eink_display": "Afișaj e-Ink RGB",
      "feature_durable_material": "Material durabil",
      "feature_wireless_charging": "Încărcare wireless",
      "feature_precise_cutouts": "Decupaje precise",
      "feature_ease_of_use": "Ușurință în utilizare",

      // **Features Descriptions**
      "RGB E-Ink Display Description": "Afișajul nostru e-Ink RGB permite o gamă largă de culori vibrante, oferind utilizatorilor posibilitatea de a personaliza aspectul carcasei lor în moduri inovatoare și interactive.",
      "Easily Customizable Description": "Personalizarea este simplă și intuitivă, permițând schimbarea rapidă a designului direct de pe dispozitivul tău, fără necesitatea unor instrumente suplimentare.",
      "High Durability Description": "Construită din materiale de înaltă calitate, AuraCase oferă protecție robustă împotriva șocurilor și uzurii zilnice, asigurând o durată lungă de viață.",
      "Slim Design Description": "Designul subțire și elegant al carcasei se potrivește perfect cu iPhone-ul tău, păstrându-i aspectul elegant și subțire.",
      "Responsive Touch Controls Description": "Controalele tactile integrate pe afișajul e-Ink sunt responsiv, oferind o experiență de utilizare fluidă și intuitivă.",
      "Battery Efficient Description": "Afișajul e-Ink consumă foarte puțină energie, prelungind durata de viață a bateriei telefonului tău.",
      "Water Resistant Description": "AuraCase este rezistentă la apă, oferind o protecție suplimentară împotriva stropirilor accidentale și a umezelii.",

      // **Specifications List**
      "spec_dimension_height": "Înălțime",
      "spec_dimension_width": "Lățime",
      "spec_dimension_depth": "Adâncime",
      "spec_material": "Material",
      "spec_eink_display": "Afișaj e-Ink",
      "spec_compatibility": "Compatibilitate",
      "spec_wireless_charging": "Încărcare wireless",
      "spec_accessories": "Accesorii",

      // **Specifications Descriptions**
      "Compatibility Description": "AuraCase este compatibilă cu iPhone 15 Pro Max, asigurând o potrivire perfectă și acces facil la toate porturile și funcțiile dispozitivului.",
      "Material Description": "Confecționată din TPU durabil și policarbonat de înaltă calitate, AuraCase oferă o protecție excelentă împotriva zgârieturilor și șocurilor.",
      "Dimensions Description": "Dimensiunile precise ale carcasei sunt 160 x 80 x 10 mm, asigurând o potrivire perfectă pentru iPhone 15 Pro Max.",
      "Weight Description": "Cu o greutate de doar 50 de grame, AuraCase adaugă o protecție robustă fără a îngreuna dispozitivul tău.",
      "E-Ink Display Description": "Afișajul e-Ink RGB integrat oferă o personalizare uimitoare, fiind ușor de schimbat și adaptat preferințelor tale de zi cu zi.",
      "Color Options Description": "Disponibil în mai multe culori elegante, AuraCase îți permite să îți exprimi stilul personal în mod unic.",
      "Battery Life Description": "Afișajul e-Ink este proiectat pentru a fi eficient din punct de vedere energetic, permițând o durată de viață a bateriei de până la 24 de ore în utilizare activă.",

      // **Additional Specifications**
      "spec_dimension_height_value": "160 mm",
      "spec_dimension_width_value": "80 mm",
      "spec_dimension_depth_value": "10 mm",
      "spec_material_value": "TPU durabil și policarbonat",
      "spec_eink_display_value": "RGB, ușor de schimbat",
      "spec_compatibility_value": "iPhone 15 Pro Max",
      "spec_wireless_charging_value": "Compatibil cu încărcarea wireless",
      "spec_accessories_value": "Fără accesorii incluse",

      // **Other Keys (Existing)**
      "testimonials": [
        {
          "name": "Alex M.",
          "content": "AuraCases mi-a transformat telefonul! Ecranul e-Ink RGB este revoluționar.",
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
      // **Navigation**
      "Home": "Главная",
      "Product": "Продукт",
      "Features": "Характеристики",
      "Specifications": "Спецификации",
      "Testimonials": "Отзывы", 
      "FAQ": "Часто задаваемые вопросы", 
      "Order": "Заказ",
      "Contact": "Контакты",
      
      // **Welcome Section**
      "Welcome to AuraCases": "Добро пожаловать в AuraCases",
      "Why Choose AuraCases?": "Почему выбирают AuraCases?",
      "Unique Design": "Уникальный дизайн",
      "Durability": "Долговечность",
      "Easy to Use": "Простота использования", 
      "Personalize your iPhone experience": "Персонализируйте свой опыт использования iPhone",
      "Discover ultimate protection with AuraCases, our cases with customizable e-ink display. Match your case to your style effortlessly.": "Откройте для себя идеальную защиту с AuraCases, нашими чехлами с настраиваемым дисплеем e-Ink. Без труда подберите чехол под свой стиль.",
      "Price": "Цена",
      "Order Now": "Заказать сейчас",
      "Moldova Flag": "Флаг Молдовы",
      "Made in Moldova": "Доставка по Молдове",
      "Our Product": "AuraCase",
      "Select your iPhone Model": "Выберите модель вашего iPhone",
      "Customize Your Case": "Настройте свой чехол",
      "Customize your AuraCase to perfectly match your style and personality.": "Настройте чехол AuraCase с любым желаемым дизайном.",
      "Choose your preferred iPhone model and explore our range of features and specifications.": "Выбери свой iPhone, измени его и добавь в него свою уникальность!",
      "After purchase, you can customize the e-ink display with your favorite designs, messages, or images.": "После покупки вы можете настроить дисплей e-Ink с вашими любимыми дизайнами, сообщениями или изображениями.",
      "Purchase initiated!": "Покупка начата!",
      "Stay Updated": "Будьте в курсе",
      "Subscribe to our newsletter for the latest news and exclusive offers.": "Подпишитесь на нашу рассылку, чтобы получать последние новости и эксклюзивные предложения.",
      "Enter your email address": "Введите свой адрес электронной почты",
      "Subscribe": "Подписаться",
      "All rights reserved": "Все права защищены",
      "Explore Our Designs": "Открой для себя наши чехлы",
      "How to Use AuraCases & Product Demonstration": "Как работают AuraCases",
      "Buy AuraCase from Us": "Купите AuraCase у нас",
      "Order your AuraCase directly from our website and enjoy fast delivery.": "Закажите AuraCase прямо на нашем сайте и наслаждайтесь быстрой доставкой.",
      "Download Special App": "Скачать специальное приложение",
      "Install the AuraCase app to customize your e-ink display effortlessly.": "Установите приложение AuraCase, чтобы без труда настроить дисплей e-Ink.",
      "Take a Photo or Download": "Сделайте фото или скачайте",
      "Choose or take a photo, or download your favorite design to upload.": "Выберите или сделайте фото, или скачайте любимый дизайн для загрузки.",
      "Enjoy Your Unique Design": "Наслаждайтесь своим уникальным дизайном",
      "Display your custom design on the e-ink screen and stand out!": "Отображайте свой уникальный дизайн на экране e-Ink и выделяйтесь!",
      "Back to Top": "Наверх",
      "Showcase Enlarged": "Увеличенный Showcase",
      "Personalizează experiența": "Персонализируйте свой опыт",
      "Schimbă-ți stilul telefonului - ": "Измени стиль своего телефона - ",

      // **Features List**
      "feature_eink_display": "RGB E-Ink дисплей",
      "feature_durable_material": "Прочный материал",
      "feature_wireless_charging": "Беспроводная зарядка",
      "feature_precise_cutouts": "Точные вырезы",
      "feature_ease_of_use": "Удобство использования",

      // **Features Descriptions**
      "RGB E-Ink Display Description": "Наш RGB e-Ink дисплей предлагает широкий спектр ярких цветов, предоставляя пользователям возможность персонализировать внешний вид своей чехла инновационными и интерактивными способами.",
      "Easily Customizable Description": "Персонализация проста и интуитивно понятна, позволяя быстро менять дизайн непосредственно на вашем устройстве без необходимости использования дополнительных инструментов.",
      "High Durability Description": "Изготовленная из высококачественных материалов, AuraCase обеспечивает прочную защиту от ударов и ежедневного износа, гарантируя долгий срок службы.",
      "Slim Design Description": "Тонкий и элегантный дизайн чехла идеально подходит для вашего iPhone, сохраняя его стильный и тонкий внешний вид.",
      "Responsive Touch Controls Description": "Интегрированные сенсорные управления на дисплее e-Ink отзывчивы, обеспечивая плавный и интуитивно понятный пользовательский опыт.",
      "Battery Efficient Description": "E-Ink дисплей потребляет очень мало энергии, продлевая время работы батареи вашего телефона.",
      "Water Resistant Description": "AuraCase водостойкая, обеспечивая дополнительную защиту от случайных брызг и влаги.",

      // **Specifications List**
      "spec_dimension_height": "Высота",
      "spec_dimension_width": "Ширина",
      "spec_dimension_depth": "Глубина",
      "spec_material": "Материал",
      "spec_eink_display": "E-Ink дисплей",
      "spec_compatibility": "Совместимость",
      "spec_wireless_charging": "Беспроводная зарядка",
      "spec_accessories": "Аксессуары",

      // **Specifications Descriptions**
      "Compatibility Description": "AuraCase совместим с iPhone 15 Pro Max, обеспечивая идеальную посадку и легкий доступ ко всем портам и функциям устройства.",
      "Material Description": "Изготовленная из прочного TPU и высококачественного поликарбоната, AuraCase обеспечивает отличную защиту от царапин и ударов.",
      "Dimensions Description": "Точные размеры чехла составляют 160 x 80 x 10 мм, обеспечивая идеальную посадку для iPhone 15 Pro Max.",
      "Weight Description": "С весом всего 50 грамм, AuraCase добавляет прочную защиту без утяжеления вашего устройства.",
      "E-Ink Display Description": "Интегрированный RGB e-Ink дисплей обеспечивает потрясающую персонализацию, легко изменяемую и адаптируемую под ваши ежедневные предпочтения.",
      "Color Options Description": "Доступен в нескольких элегантных цветах, AuraCase позволяет выразить ваш личный стиль уникальным образом.",
      "Battery Life Description": "E-Ink дисплей разработан для энергоэффективности, позволяя батарее работать до 24 часов при активном использовании.",

      // **Specifications Values**
      "spec_dimension_height_value": "160 мм",
      "spec_dimension_width_value": "80 мм",
      "spec_dimension_depth_value": "10 мм",
      "spec_material_value": "Прочный TPU и поликарбонат",
      "spec_eink_display_value": "RGB, легко настраиваемый",
      "spec_compatibility_value": "iPhone 15 Pro Max",
      "spec_wireless_charging_value": "Совместим с беспроводной зарядкой",
      "spec_accessories_value": "Без аксессуаров",

      // **Other Keys (Existing)**
      "testimonials": [
        {
          "name": "Алекс М.",
          "content": "AuraCases преобразил мой телефон! E-Ink дисплей RGB – это революция.",
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

// Initialize i18next with the configuration
i18n.use(initReactI18next).init({
  resources,
  lng: 'ro', // default language
  fallbackLng: 'ro',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
