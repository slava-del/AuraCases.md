// AuraCasesLanding.jsx

import React, { useState, useEffect, useRef } from 'react';
import {
    motion,
    AnimatePresence,
} from 'framer-motion';
import { Star, Menu, X, ArrowUp, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import './i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moldovanFlag from './assets/moldova_flag.png';

// Helper function to import all images from a directory
const importAll = (r) => r.keys().map(r);

// Dynamically import all product images from the assets folder
const productImages = importAll(
    require.context('./assets/firstSectionImgs', false, /\.(png|jpe?g|svg)$/)
);

// Dynamically import all model images from the productImgsPng folder
const modelImages = importAll(
    require.context('./assets/productImgsPng', false, /\.(png|jpe?g|svg)$/)
);

// Dynamically import all showcase images from the showcaseImgs folder
const showcaseImages = importAll(
    require.context('./assets/showcaseImgs', false, /\.(png|jpe?g|svg)$/)
);

// Dynamically import all review images from the reviewImgs folder
const reviewImages = importAll(
    require.context('./assets/reviewImgs', false, /\.(png|jpe?g|svg)$/)
);

// Updated models array with all iPhones from 13 to 15 Pro Max
const models = [
    { id: 'iphone13', name: 'iPhone 13' },
    { id: 'iphone14', name: 'iPhone 14' },
    { id: 'iphone15', name: 'iPhone 15' },
    { id: 'iphone16', name: 'iPhone 16' },
];

// Usage steps for the features and video section
const usageSteps = [
    {
        number: '1',
        title: 'Buy AuraCase from Us',
        description: 'Order your AuraCase directly from our website and enjoy fast delivery.',
    },
    {
        number: '2',
        title: 'Download Special App',
        description: 'Install the AuraCase app to customize your e-ink display effortlessly.',
    },
    {
        number: '3',
        title: 'Take a Photo or Download',
        description: 'Choose or take a photo, or download your favorite design to upload.',
    },
    {
        number: '4',
        title: 'Enjoy Your Unique Design',
        description: 'Display your custom design on the e-ink screen and stand out!',
    },
];

const stylesList = [
    'elegant',
    'simple',
    'bright',
    'classic',
    'modern',
    'rustic',
    'chic',
    'soft',
    'bold',
    'vintage',
    'cool',
    'folk',
    'natural',
    'flashy',
    'cosy',
    'urban',
    'clean',
    'trendy',
    'artsy',
    'warm',
];


export default function AuraCasesLanding() {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState(models[0].id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modelImageIndex, setModelImageIndex] = useState(0);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [openAccordionItem, setOpenAccordionItem] = useState(null);
    const [currentSection, setCurrentSection] = useState('');
    const [currentModelText, setCurrentModelText] = useState(0);
    const [currentStyleText, setCurrentStyleText] = useState(0);
    const [showcaseModalOpen, setShowcaseModalOpen] = useState(false);
    const [selectedShowcaseImage, setSelectedShowcaseImage] = useState(null);

    const sectionsRef = useRef({});

    // Features and Specifications data
    const featuresList = [
        "Premium polycarbonate shell with soft-touch finish",
        "Precision-cut ports for easy access to all buttons and features",
        "Wireless charging compatible",
        "Raised bezel for screen and camera protection"
    ];

    const specificationsList = [
        { label: 'Dimensions', value: '150 x 75 x 10 mm' },
        { label: 'Weight', value: '50g' },
        { label: 'Materials', value: 'Polycarbonate, TPU' },
        { label: 'Compatibility', value: 'All major phone models' },
    ];

    // Fetch testimonials from translations
    const testimonials = t('testimonials', { returnObjects: true });

    // Carousel effect for Hero section
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Carousel effect for model images in product selection section
    useEffect(() => {
        const interval = setInterval(() => {
            setModelImageIndex((prevIndex) =>
                prevIndex === modelImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Handle scroll events for "Back to Top" button and progress indicator
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);

            if (scrollTop > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for highlighting navbar links
    useEffect(() => {
        const sections = ['products', 'features-video', 'testimonials', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
                sectionsRef.current[id] = section;
            }
        });

        return () => {
            const currentSectionsRef = sectionsRef.current; 
        
            sections.forEach(id => {
                const section = currentSectionsRef[id]; 
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
        
    }, []);

    // Text animation for main text
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentModelText((prev) => (prev + 1) % models.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Text animation for secondary text
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStyleText((prev) => (prev + 1) % stylesList.length);
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, []);

    // Function to handle navigation clicks with smooth scrolling
    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false); // Close mobile menu if open
    };

    // Settings for react-slick slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: testimonials.length >= 3 ? 3 : testimonials.length,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false, // Hide arrows for a cleaner look
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // For screens smaller than 640px
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Settings for showcase carousel on mobile
    const showcaseCarouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
    };

    // Settings for steps carousel on mobile
    const stepsCarouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        adaptiveHeight: true,
    };

    // Assign images to testimonials
    const getReviewImage = (index) => {
        if (reviewImages.length === 0) return null;
        return reviewImages[index % reviewImages.length];
    };

    return (
        <div className="min-h-screen bg-white text-black relative">
            {/* Desktop Scroll Progress Bar and Back to Top Button */}
            <div className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-6 z-50">
                {/* Scroll Progress Bar Container */}
                <div className="w-3 h-[5cm] bg-gray-300 rounded-full flex flex-col overflow-hidden">
                    <motion.div
                        className="w-full bg-black rounded-full"
                        style={{ height: `${scrollProgress}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${scrollProgress}%` }}
                        transition={{ ease: "linear", duration: 0.2 }}
                    />
                </div>
                {/* Back to Top Button */}
                {showScrollToTop && (
                    <motion.button
                        className="bg-black text-white p-2 rounded-md shadow-lg"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={t('Back to Top')}
                        type="button"
                    >
                        <ArrowUp className="w-3.5 h-6" />
                    </motion.button>
                )}
            </div>

            {/* Mobile Horizontal Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50 lg:hidden">
                <motion.div
                    className="h-full bg-black"
                    style={{ width: `${scrollProgress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ ease: "linear", duration: 0.2 }}
                />
            </div>

            {/* Header */}
            <header className="bg-white shadow-md fixed w-full z-50">
                <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Sparkles className="h-6 w-6 text-black" />
                        <h1 className="text-2xl font-bold text-black">
                            <span>Aura</span>
                            <span>Cases</span>
                        </h1>
                    </div>
                    <nav className="hidden md:flex space-x-6 items-center">
                        <motion.button
                            onClick={() => handleNavClick('products')}
                            className={`cursor-pointer transition-colors relative group ${currentSection === 'products' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                }`}
                            type="button"
                        >
                            {t('Product')}
                        </motion.button>
                        <motion.button
                            onClick={() => handleNavClick('features-video')}
                            className={`cursor-pointer transition-colors relative group ${currentSection === 'features-video' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                }`}
                            type="button"
                        >
                            {t('Features')}
                        </motion.button>
                        <motion.button
                            onClick={() => handleNavClick('testimonials')}
                            className={`cursor-pointer transition-colors relative group ${currentSection === 'testimonials' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                }`}
                            type="button"
                        >
                            {t('Testimonials')}
                        </motion.button>
                        <motion.button
                            onClick={() => handleNavClick('contact')}
                            className={`cursor-pointer transition-colors relative group ${currentSection === 'contact' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                }`}
                            type="button"
                        >
                            {t('Contact')}
                        </motion.button>
                        {/* Language Toggle Button */}
                        <motion.button
                            onClick={() => {
                                const newLang = i18n.language === 'ro' ? 'ru' : 'ro';
                                i18n.changeLanguage(newLang);
                            }}
                            className="ml-4 bg-gray-200 text-black px-3 py-1 rounded-full focus:outline-none flex items-center space-x-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                        >
                            <span>{i18n.language === 'ro' ? 'RU' : 'RO'}</span>
                            <ChevronDown className="w-4 h-4" />
                        </motion.button>
                    </nav>
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                        type="button"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                    </button>
                </div>
                <AnimatePresence mode="wait">
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden bg-white shadow-md"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col items-center space-y-2 py-4">
                                <motion.button
                                    onClick={() => handleNavClick('products')}
                                    className={`w-full text-center py-2 cursor-pointer transition-colors ${currentSection === 'products' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                        }`}
                                    type="button"
                                >
                                    {t('Product')}
                                </motion.button>
                                <motion.button
                                    onClick={() => handleNavClick('features-video')}
                                    className={`w-full text-center py-2 cursor-pointer transition-colors ${currentSection === 'features-video' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                        }`}
                                    type="button"
                                >
                                    {t('Features')}
                                </motion.button>
                                <motion.button
                                    onClick={() => handleNavClick('testimonials')}
                                    className={`w-full text-center py-2 cursor-pointer transition-colors ${currentSection === 'testimonials' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                        }`}
                                    type="button"
                                >
                                    {t('Testimonials')}
                                </motion.button>
                                <motion.button
                                    onClick={() => handleNavClick('contact')}
                                    className={`w-full text-center py-2 cursor-pointer transition-colors ${currentSection === 'contact' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                                        }`}
                                    type="button"
                                >
                                    {t('Contact')}
                                </motion.button>
                                {/* Mobile Language Toggle Button */}
                                <motion.button
                                    onClick={() => {
                                        const newLang = i18n.language === 'ro' ? 'ru' : 'ro';
                                        i18n.changeLanguage(newLang);
                                    }}
                                    className="mt-2 bg-gray-200 text-black px-4 py-2 rounded-full focus:outline-none flex items-center space-x-1"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="button"
                                >
                                    <span>{i18n.language === 'ro' ? 'RU' : 'RO'}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Space for fixed header */}
            <div className="pt-1"></div>

            {/* Hero Section */}
            <section className="bg-white relative overflow-hidden text-black" id="hero">
                {/* Mobile Version */}
                <div className="block md:hidden relative w-full h-screen">
                    <img
                        src={productImages[currentImageIndex]}
                        alt="AuraCases E-ink Case for iPhone"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-start px-6">
                        <motion.div
                            className="bg-gray bg-opacity-30 backdrop-blur-md rounded-lg p-6 max-w-md w-full transition-all duration-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Main Heading */}
                            <h2 className="text-3xl font-extrabold mb-4 text-left">
                                Personalizează
                                <br />
                                experiența{' '}
                                <span className="relative inline-block">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentModelText}
                                            className="inline-block font-bold text-white"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {models[currentModelText].name}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h2>

                            {/* Secondary Heading */}
                            <h3 className="text-lg mb-4 text-left">
                                <span className="text-black font-bold">{t('Schimbă-ți stilul telefonului - ')}</span>
                                <span className="relative inline-block font-bold text-white">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentStyleText}
                                            className="inline-block font-bold text-white"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {stylesList[currentStyleText]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h3>

                            <p className="text-xl font-bold mb-6 text-left">
                                {t('Price')}: 699 MDL
                            </p>
                            <div className="flex flex-col space-y-4">
                                <motion.button
                                    className="bg-black text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavClick('products')}
                                    type="button"
                                >
                                    {t('Order Now')}
                                </motion.button>
                                <div className="flex items-center">
                                    <img
                                        src={moldovanFlag}
                                        alt={t('Moldova Flag')}
                                        className="w-9 h-6 rounded-lg"
                                    />
                                    <span className="ml-2 text-sm italic text-white">
                                        {t('Made in Moldova')}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop Version */}
                <div className="hidden md:flex h-screen items-center justify-center relative bg-white">
                    <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
                        {/* Text Content with Animations */}
                        <motion.div
                            className="w-1/2 relative z-10"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Personalizează
                                <br />
                                experiența{' '}
                                <span className="relative inline-block">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentModelText}
                                            className="inline-block font-bold text-black"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {models[currentModelText].name}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h2>

                            {/* Secondary Heading */}
                            <h3 className="text-xl mb-4 font-semibold">
                                <span className="text-gray-700">{t('Schimbă-ți stilul telefonului - ')}</span>
                                <span className="relative inline-block font-bold text-black">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentStyleText}
                                            className="inline-block font-bold text-black"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {stylesList[currentStyleText]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h3>

                            <p className="text-2xl font-bold mb-8">
                                {t('Price')}: 699 MDL
                            </p>
                            <div className="flex items-center space-x-4">
                                <motion.button
                                    className="bg-black text-white px-8 py-2 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavClick('products')}
                                    type="button"
                                >
                                    {t('Order Now')}
                                </motion.button>
                                <div className="flex items-center">
                                    <img
                                        src={moldovanFlag}
                                        alt={t('Moldova Flag')}
                                        className="w-9 h-6 rounded-lg"
                                    />
                                    <span className="ml-2 text-base italic text-black-500">
                                        {t('Made in Moldova')}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Carousel */}
                        <motion.div
                            className="w-1/2 relative flex items-center justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-full h-[700px] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={productImages[currentImageIndex]}
                                        alt="AuraCases E-ink Case for iPhone"
                                        className="w-auto h-[700px] rounded-lg shadow-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    />
                                </AnimatePresence>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </section>

            {/* Product Presentation Section */}
            <section id="products" className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-black">
                        {t('Our Product')}
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center mb-12 w-full">
                        {/* Customization Options */}
                        <div className="flex flex-col md:w-1/2 space-y-6">
                            {/* Main Text - Order 1 on mobile */}
                            <motion.div
                                className="order-1"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-lg text-gray-700">
                                    {t('Customize your AuraCase to perfectly match your style and personality.')}
                                </p>
                                <p className="text-lg text-gray-700">
                                    {t('Choose your preferred iPhone model and explore our range of features and specifications.')}
                                </p>
                            </motion.div>

                            {/* Product Image - Order 2 on mobile */}
                            <motion.div
                                className="order-2 md:hidden flex justify-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative w-full max-w-xs rounded-lg overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={modelImageIndex}
                                            src={modelImages[modelImageIndex]}
                                            alt="AuraCases E-ink Case for iPhone"
                                            className="w-full h-auto object-contain"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        />
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Description, Specs, and Features - Order 3 on mobile */}
                            <motion.div
                                className="order-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                {/* Dropdown Menus */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="model" className="text-lg font-semibold">
                                            {t('Select your iPhone Model')}:
                                        </label>
                                        {/* Modern Dropdown Menu */}
                                        <div className="relative inline-block text-left">
                                            <motion.button
                                                type="button"
                                                className="inline-flex justify-between items-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                                aria-haspopup="true"
                                                aria-expanded={dropdownOpen}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {models.find(model => model.id === selectedModel)?.name || 'Select Model'}
                                                <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                                            </motion.button>

                                            <AnimatePresence mode="wait">
                                                {dropdownOpen && (
                                                    <motion.div
                                                        className="origin-top-right absolute right-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 max-h-60 overflow-y-auto"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <div className="py-1">
                                                            {models.map((model) => (
                                                                <motion.div
                                                                    key={model.id}
                                                                    className={`cursor-pointer select-none relative px-4 py-2 text-sm ${selectedModel === model.id
                                                                        ? 'bg-gray-200 text-black'
                                                                        : 'text-gray-700 hover:bg-gray-200'
                                                                        }`}
                                                                    onClick={() => {
                                                                        setSelectedModel(model.id);
                                                                        setDropdownOpen(false);
                                                                    }}
                                                                    // Removed the backgroundColor in whileHover to prevent all items being highlighted
                                                                    whileTap={{ scale: 0.98 }}
                                                                    type="button"
                                                                >
                                                                    {model.name}
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Section */}
                                <div className="mb-4">
                                    <div className="w-full">
                                        {/* Features Accordion Item */}
                                        <div className="border-b border-gray-300">
                                            <button
                                                className="w-full flex justify-between items-center px-4 py-2 focus:outline-none"
                                                onClick={() =>
                                                    setOpenAccordionItem(
                                                        openAccordionItem === 'features' ? null : 'features'
                                                    )
                                                }
                                            >
                                                <span className="text-lg font-semibold">{t('Features')}</span>
                                                {openAccordionItem === 'features' ? (
                                                    <ChevronUp className="w-5 h-5" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </button>
                                            <AnimatePresence mode="wait">
                                                {openAccordionItem === 'features' && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ul className="list-disc pl-8 pr-4 py-2 space-y-1">
                                                            {featuresList.map((feature, index) => (
                                                                <li key={index} className="text-gray-700">
                                                                    {t(feature)}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        {/* Specifications Accordion Item */}
                                        <div className="border-b border-gray-300">
                                            <button
                                                className="w-full flex justify-between items-center px-4 py-2 focus:outline-none"
                                                onClick={() =>
                                                    setOpenAccordionItem(
                                                        openAccordionItem === 'specifications' ? null : 'specifications'
                                                    )
                                                }
                                            >
                                                <span className="text-lg font-semibold">{t('Specifications')}</span>
                                                {openAccordionItem === 'specifications' ? (
                                                    <ChevronUp className="w-5 h-5" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </button>
                                            <AnimatePresence mode="wait">
                                                {openAccordionItem === 'specifications' && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="pl-4 pr-4 py-2 space-y-1">
                                                            {specificationsList.map((spec, index) => (
                                                                <p key={index} className="text-gray-700">
                                                                    <strong>{t(spec.label)}:</strong> {t(spec.value)}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Buy Button - Order 4 on mobile */}
                            <motion.div
                                className="order-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <motion.button
                                    className="bg-black text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => alert(t('Purchase initiated!'))}
                                    type="button"
                                >
                                    {t('Order Now')}
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Product Image Carousel - Visible on Desktop */}
                        <motion.div
                            className="hidden md:flex md:w-1/2 mb-6 md:mb-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-full max-w-lg rounded-lg overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={modelImageIndex}
                                        src={modelImages[modelImageIndex]}
                                        alt="AuraCases E-ink Case for iPhone"
                                        className="w-full h-auto object-contain"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    />
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Combined Features and Video Section */}
            <section id="features-video" className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-black">
                        {t('How to Use AuraCases & Product Demonstration')}
                    </h2>

                    {/* Mobile Version */}
                    <div className="block md:hidden">
                        {/* Video */}
                        <div className="w-full rounded-lg shadow-lg overflow-hidden mb-8 h-80">
                            <video
                                className="w-full h-full object-cover rounded-lg"
                                controls
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/how_to_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* Steps Carousel */}
                        <div className="w-full mb-8 pb-4">
                            <Slider {...stepsCarouselSettings}>
                                {usageSteps.map((step, index) => (
                                    <div key={index} className="px-4">
                                        <motion.div
                                            className="bg-white rounded-lg shadow-md p-4 flex flex-col relative text-left hover:shadow-lg transition-shadow h-full"
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: index * 0.1,
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="flex items-center justify-start mb-4">
                                                <div className="bg-black text-white w-12 h-12 flex items-center justify-center text-lg font-bold rounded-lg">
                                                    {step.number}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-black">
                                                {t(step.title)}
                                            </h3>
                                            <p className="text-gray-700">{t(step.description)}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Desktop Version */}
                    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {/* Steps/Features Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {usageSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md p-6 flex flex-col relative text-left hover:shadow-lg transition-shadow"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center justify-start mb-4">
                                        <div className="bg-black text-white w-12 h-12 flex items-center justify-center text-lg font-bold rounded-lg">
                                            {step.number}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-black">
                                        {t(step.title)}
                                    </h3>
                                    <p className="text-gray-700">{t(step.description)}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Video Section */}
                        <div className="flex items-center justify-center h-full">
                            <div className="rounded-lg shadow-lg overflow-hidden w-full h-full flex items-center justify-center">
                                <video
                                    className="w-full h-full object-cover rounded-lg"
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src="/how_to_video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className="py-20 bg-white" id="showcase">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-black">
                        {t('Explore Our Designs')}
                    </h2>
                    {/* Desktop Grid */}
                    <div className="hidden md:grid gap-4" style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    }}>
                        {showcaseImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden rounded-lg cursor-pointer"
                                style={{
                                    aspectRatio: '1',
                                    maxWidth: '450px',
                                    margin: 'auto',
                                }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    setSelectedShowcaseImage(image);
                                    setShowcaseModalOpen(true);
                                }}
                            >
                                <img
                                    src={image}
                                    alt={`Showcase ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                    {/* Mobile Carousel */}
                    <div className="block md:hidden">
                        <Slider
                            {...showcaseCarouselSettings}
                        >
                            {showcaseImages.map((image, index) => (
                                <div key={index}>
                                    <motion.div
                                        className="relative overflow-hidden rounded-lg cursor-pointer"
                                        style={{
                                            aspectRatio: '1',
                                            margin: 'auto',
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => {
                                            setSelectedShowcaseImage(image);
                                            setShowcaseModalOpen(true);
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`Showcase ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/* Showcase Modal */}
                <AnimatePresence mode="wait">
                    {showcaseModalOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowcaseModalOpen(false)}
                        >
                            <motion.div
                                className="bg-white rounded-lg overflow-hidden max-w-3xl w-full mx-4"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedShowcaseImage}
                                    alt={t('Showcase Enlarged')}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Testimonials */}
<section id="testimonials" className="py-20 bg-white">
    <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
            {t('Testimonials')}
        </h2>
        <Slider {...(sliderSettings || {})}>
            {testimonials && testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4">
                        <div
                            className="bg-white rounded-lg shadow-md p-6 flex h-full items-center justify-between mb-8"
                            style={{ height: '200px', overflow: 'hidden' }}
                        >
                            {/* Content */}
                            <div className="flex-1 pr-4">
                                <p className="text-gray-700 mb-4 line-clamp-5">
                                    "{testimonial.content || t('No testimonial provided')}"
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-black">
                                        {testimonial.name || t('Anonymous Reviewer')}
                                    </span>
                                    <div className="flex">
                                        {[...Array(testimonial.rating || 0)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-black stroke-black" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Image */}
                            {getReviewImage(index) && (
                                <img
                                    src={getReviewImage(index)}
                                    alt={testimonial.name || t('Reviewer')}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">
                    {t('No testimonials available')}
                </p>
            )}
        </Slider>
    </div>
</section>


            {/* Newsletter Subscription Section */}
            <section id="contact" className="bg-white py-20">
                <div className="container max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-black">{t('Stay Updated')}</h2>
                    <p className="mb-8 text-gray-700">
                        {t('Subscribe to our newsletter for the latest news and exclusive offers.')}
                    </p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center">
                        <input
                            type="email"
                            placeholder={t('Enter your email address')}
                            className="w-full sm:flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition mb-4 sm:mb-0 sm:mr-4 text-black"
                            required
                        />
                        <motion.button
                            type="submit"
                            className="bg-black text-white px-6 h-10 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 flex items-center justify-center whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('Subscribe')}
                        </motion.button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-8 text-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h3 className="text-xl font-semibold">AuraCases</h3>
                            <p>
                                © {new Date().getFullYear()} AuraCases. {t('All rights reserved')}.
                            </p>
                            <p>{t('Made in Moldova')}.</p>
                        </div>
                        <div className="flex space-x-4">
                            {/* Facebook Icon */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 hover:text-gray-300 transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                    />
                                </svg>
                            </a>
                            {/* Twitter Icon */}
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 hover:text-gray-300 transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 19c11 0 16-9.717 16-18A18.083 18.083 0 0024 4.557a13.934 13.934 0 01-4.803 1.318A9.865 9.865 0 0023.337 3a19.84 19.84 0 01-6.29 2.149A9.932 9.932 0 0016.616 3c-5.522 0-10 4.477-10 10 0 .78.088 1.536.256 2.266A28.184 28.184 0 014 4.557a9.935 9.935 0 002.457 13.23A9.902 9.902 0 012 18.407a28.203 28.203 0 0015 4.433"
                                    />
                                </svg>
                            </a>
                            {/* Instagram Icon */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 hover:text-gray-300 transition"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 16V8a5 5 0 0110 0v8m-5 4h.01M5 12a7 7 0 1114 0 7 7 0 01-14 0z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
