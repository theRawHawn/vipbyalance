import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, TrendingUp, CalendarClock, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import local slideshow assets for proper Vite bundling
import slideOverall from '../assets/images/younger_indian_associates_1781767148602.jpg';
import slideAccounting from '../assets/images/byalance_bookkeeping_1781769995527.jpg';
import slideGst from '../assets/images/byalance_gst_1781770011952.jpg';
import slideTds from '../assets/images/byalance_tds_1781770025824.jpg';
import slidePayroll from '../assets/images/byalance_payroll_1781770041812.jpg';

const aboutLocalTranslations = {
  en: {
    subtitle: "Pioneering excellence in financial and compliance services to empower your business.",
    slides: [
      {
        alt: "Byalance Professional Compliance Team",
        caption: "Our expert professional compliance team coordinating company audits and filings."
      },
      {
        alt: "Accounting & Bookkeeping Services",
        caption: "End-to-end bookkeeping, balance sheet finalization, and expert financial modeling consultation."
      },
      {
        alt: "Goods & Services Tax (GST) Compliance",
        caption: "Hassle-free GST registration, multi-state return filings, and strategic tax consultation."
      },
      {
        alt: "Tax Deducted at Source (TDS) Compliance",
        caption: "Accurate TDS calculations, quarterly return filings (24Q/26Q), and advisory services."
      },
      {
        alt: "Payroll & Component Compliances",
        caption: "Complete payroll processing including PF, ESI, and Professional Tax (PT) compliance."
      }
    ],
    tooltips: {
      excellence: "Excellence",
      mission: "Mission-Driven",
      timely: "Timely Filing",
      established: "Established Firm",
      save: "Save Smartly",
      safe: "Your Data is Safe"
    }
  },
  hi: {
    subtitle: "आपके व्यवसाय को सशक्त बनाने के लिए वित्तीय और अनुपालन सेवाओं में अग्रणी उत्कृष्टता।",
    slides: [
      {
        alt: "Byalance व्यावसायिक अनुपालन टीम",
        caption: "कंपनी ऑडिट और फाइलिंग के समन्वय में हमारी विशेषज्ञ अनुपालन टीम।"
      },
      {
        alt: "लेखा और बहीखाता सेवाएँ",
        caption: "सटीक बहीखाता पद्धति, बैलेंस शीट फाइनलाइजेशन, और विशेषज्ञ वित्तीय परामर्श।"
      },
      {
        alt: "वस्तु एवं सेवा कर (GST) अनुपालन",
        caption: "आसान जीएसटी पंजीकरण, बहु-राज्य रिटर्न फाइलिंग और रणनीतिक कर परामर्श।"
      },
      {
        alt: "स्रोत पर कर कटौती (TDS) अनुपालन",
        caption: "सटीक टीडीएस गणना, त्रैमासिक रिटर्न फाइलिंग (24Q/26Q), और हमारी विशेषज्ञ सलाह।"
      },
      {
        alt: "पेरोल और वैधानिक अनुपालन",
        caption: "संस्थागत पेरोल प्रसंस्करण (PF, ESI, और व्यावसायिक कर अनुपालन सहित)।"
      }
    ],
    tooltips: {
      excellence: "उत्कृष्टता",
      mission: "मिशन-संचालित",
      timely: "समय पर फाइलिंग",
      established: "स्थापित फर्म",
      save: "बचत करें",
      safe: "आपका डेटा सुरक्षित है"
    }
  },
  kn: {
    subtitle: "ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸಲು ಹಣಕಾಸು ಮತ್ತು ಇಣುಕು ನಿಯಮಗಳ ಸೇವೆಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಪ್ರಗತಿ.",
    slides: [
      {
        alt: "Byalance ವೃತ್ತಿಪರ ನಿಯಂತ್ರಣ ತಂಡ",
        caption: "ಕಂಪನಿಯ ಆಡಿಟ್‌ಗಳು ಮತ್ತು ಸಲ್ಲಿಕೆಗಳನ್ನು ಸಮನ್ವಯಗೊಳಿಸುವ ನಮ್ಮ ತಜ್ಞ ವೃತ್ತಿಪರ ತಂಡ."
      },
      {
        alt: "ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆ ಹಾಗೂ ಬುಕ್ಕೀಪಿಂಗ್ ಸೇವೆಗಳು",
        caption: "ಕೊನೆಯಿಂದ ಕೊನೆಯವರೆಗಿನ ಬುಕ್‌ಕೀಪಿಂಗ್, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್ ಅಂತಿಮಗೊಳಿಸುವಿಕೆ ಮತ್ತು ತಜ್ಞ ಹಣಕಾಸು ಸಲಹೆ."
      },
      {
        alt: "ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ (GST) ಪಾಲನೆ",
        caption: "ತೊಂದರೆ ರಹಿತ ಜಿಎಸ್‌ಟಿ ನೋಂದಣಿ, ಬಹು-ರಾಜ್ಯ ರಿಟರ್ನ್‌ಗಳ ಸಲ್ಲಿಕೆ ಮತ್ತು ತೆರಿಗೆ ಯೋಜನೆ."
      },
      {
        alt: "ಮೂಲದಲ್ಲೇ ತೆರಿಗೆ ಕಡಿತ (TDS) ಪಾಲನೆ",
        caption: "ನಿಖರವಾದ ಟಿಡಿಎಸ್ ಲೆಕ್ಕಾಚಾರಗಳು, ತ್ರೈಮಾಸಿಕ ರಿಟರ್ನ್ ಸಲ್ಲಿಕೆಗಳು (24Q/26Q) ಮತ್ತು ಸಲಹಾ ಸೇವೆಗಳು."
      },
      {
        alt: "ಪೇರೋಲ್ ಮತ್ತು ಉದ್ಯೋಗಿ ಭತ್ಯೆ ನಿಯಮಗಳು",
        caption: "ಪಿಎಫ್, ಇಎಸ್‌ಐ ಮತ್ತು ವೃತ್ತಿಪರ ತೆರಿಗೆ ಸೇರಿದಂತೆ ಸಂಪೂರ್ಣ ಪೇರೋಲ್ ಪ್ರಕ್ರಿಯೆ."
      }
    ],
    tooltips: {
      excellence: "ಶ್ರೇಷ್ಠತೆ",
      mission: "ಧ್ಯೇಯ-ಆಧಾರಿತ",
      timely: "ಸಮಯಕ್ಕೆ ಸಲ್ಲಿಕೆ",
      established: "ಸ್ಥಾಪಿತ ಸಂಸ್ಥೆ",
      save: "ಬುದ್ಧಿವಂತ ಉಳಿತಾಯ",
      safe: "ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತವಾಗಿದೆ"
    }
  },
  te: {
    subtitle: "మీ వ్యాపారాన్ని బలోపేతం చేయడానికి ఆర్థిక మరియు నియంత్రణ సేవలలో అగ్రగామి శ్రేష్ఠత.",
    slides: [
      {
        alt: "Byalance ప్రొఫెషనల్ కంప్లైన్స్ బృందం",
        caption: "కంపెనీ ఆడిట్లు మరియు ఫైలింగ్‌లను పర్యవేక్షించే మా నిపుణుల బృందం."
      },
      {
        alt: "అకౌంటింగ్ మరియు బుక్ కీపింగ్ సేవలు",
        caption: "ఎండ్-టు-ఎండ్ బుక్ కీపింగ్, బ్యాలెన్స్ షీట్ ఫైనలైజేషన్ మరియు నిపుణుల సలహాలు."
      },
      {
        alt: "వస్తువులు మరియు సేవల పన్ను (GST) కంప్లైన్స్",
        caption: "సులభమైన జీఎస్టీ రిజిస్ట్రేషన్, మల్టీ-స్టేట్ రిటర్న్ ఫైలింగ్స్ మరియు పన్ను కౌన్సెలింగ్."
      },
      {
        alt: "మూలాధారం వద్ద పన్ను మినహాయింపు (TDS) కంప్లైన్స్",
        caption: "ఖచ్చితమైన టీడీఎస్ గణనలు, త్రైమాసిక రిటర్న్ ఫైలింగ్స్ (24Q/26Q) మరియు సలహా సేవలు."
      },
      {
        alt: "పేరోల్ మరియు ఇతర ఉద్యోగ భత్యాల కంప్లైన్స్",
        caption: "పీఎఫ్, ఈఎస్ఐ మరియు ప్రొఫెషనல் టాక్స్ (PT) తో కూడిన పూర్తి పేరోల్ ప్రాసెసింగ్."
      }
    ],
    tooltips: {
      excellence: "శ్రేష్ఠత",
      mission: "లక్ష్య-ఆధారిత",
      timely: "సకాలంలో ఫైలింగ్",
      established: "స్థాపిత సంస్థ",
      save: "తెలివైన పొదుపు",
      safe: "మీ డేటా సురక్షితం"
    }
  },
  mr: {
    subtitle: "तुमच्या व्यवसायाला सक्षम करण्यासाठी आर्थिक आणि नियमावली सेवांमध्ये अग्रगण्य उत्कृष्टता.",
    slides: [
      {
        alt: "Byalance व्यावसायिक अनुपालन टीम",
        caption: "कंपनी ऑडिट आणि फायलिंगचे समन्वय साधणारी आमची तज्ज्ञ व्यावसायिक टीम."
      },
      {
        alt: "लेखा आणि बहीखाते सेवा",
        caption: "एंड-टू-एंड बुककीपिंग, बॅलन्स शीट फायनलायझेशन आणि तज्ज्ञ आर्थिक मॉडेलिंग सल्ला."
      },
      {
        alt: "वस्तू आणि सेवा कर (GST) अनुपालन",
        caption: "त्रासमुक्त जीएसटी नोंदणी, बाजूने रिटर्न फायलिंग आणि धोरणात्मक कर सल्ला."
      },
      {
        alt: "उगमस्थानी कर कपात (TDS) अनुपालन",
        caption: "अचूक टीडीएस गणना, त्रैमासिक रिटर्न फायलिंग (24Q/26Q) आणि सल्लागार सेवा."
      },
      {
        alt: "पेरोल आणि वैधानिक अनुपालन",
        caption: "पीएफ, ईएसआय आणि व्यावसायिक कर (PT) सह संपूर्ण पेरोल प्रोसेसिंग."
      }
    ],
    tooltips: {
      excellence: "उत्कृष्टता",
      mission: "ध्येय-प्रेरित",
      timely: "वेळेवर फायलिंग",
      established: "स्थापित फर्म",
      save: "स्मार्ट बचत",
      safe: "तुमचा डेटा सुरक्षित आहे"
    }
  },
  ta: {
    subtitle: "உங்கள் வணிகத்தை மேம்படுத்துவதற்காக நிதி மற்றும் இணக்க சேவைகளில் முன்னோடி சிறப்பு.",
    slides: [
      {
        alt: "Byalance நிபுணத்துவ இணக்கக் குழு",
        caption: "நிறுவனத்தின் தணிக்கைகள் மற்றும் வரித்தாக்கல் பணிகளை ஒருங்கிணைக்கும் எங்கள் நிபுணத்துவக் குழு."
      },
      {
        alt: "கணக்குப்பதிவு மற்றும் புத்தக மேலாண்மை சேவைகள்",
        caption: "முழுமையான புத்தக மேலாண்மை, இருப்புநிலைக் குறிப்பு இறுதி செய்தல் மற்றும் நிபுணத்துவ நிதி ஆலோசனைகள்."
      },
      {
        alt: "சரக்கு மற்றும் சேவை வரி (GST) இணக்கம்",
        caption: "எளிதான ஜிஎஸ்டி பதிவு, பல மாநில வரித்தாக்கல் மற்றும் உத்திசார்ந்த வரி ஆலோசனைகள்."
      },
      {
        alt: "வருமான வரி மூலக் கழிவு (TDS) இணக்கம்",
        caption: "துல்லியமான டிடிஎஸ் கணக்கீடுகள், காலாண்டு வரித்தாக்கல் (24Q/26Q) மற்றும் ஆலோசனை சேவைகள்."
      },
      {
        alt: "ஊதியப்பட்டியல் மற்றும் சட்டப்பூர்வ இணக்கம்",
        caption: "பிஎஃப், இஎஸ்ஐ மற்றும் தொழில்முறை வரி உள்ளடக்கிய முழுமையான ஊதியப்பட்டியல் செயலாக்கம்."
      }
    ],
    tooltips: {
      excellence: "சிறப்பு",
      mission: "இலட்சியம் மிக்கது",
      timely: "சரியான நேர வரித்தாக்கல்",
      established: "நிறுவப்பட்ட நிறுவனம்",
      save: "புத்திசாலித்தனமான சேமிப்பு",
      safe: "உங்கள் தரவு பாதுகாப்பானது"
    }
  }
};

export default function About() {
  const { language, t } = useLanguage();
  const localTranslation = aboutLocalTranslations[language as keyof typeof aboutLocalTranslations] || aboutLocalTranslations.en;

  const slides = [
    {
      src: slideOverall,
      alt: localTranslation.slides[0].alt,
      caption: localTranslation.slides[0].caption
    },
    {
      src: slideAccounting,
      alt: localTranslation.slides[1].alt,
      caption: localTranslation.slides[1].caption
    },
    {
      src: slideGst,
      alt: localTranslation.slides[2].alt,
      caption: localTranslation.slides[2].caption
    },
    {
      src: slideTds,
      alt: localTranslation.slides[3].alt,
      caption: localTranslation.slides[3].caption
    },
    {
      src: slidePayroll,
      alt: localTranslation.slides[4].alt,
      caption: localTranslation.slides[4].caption
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const stats = [
    { icon: ShieldCheck, title: t.about.stats.trusted, text: t.about.stats.trustedText },
    { icon: TrendingUp, title: t.about.stats.growth, text: t.about.stats.growthText },
    { icon: CalendarClock, title: t.about.stats.timely, text: t.about.stats.timelyText },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-10 sm:py-32 bg-white relative overflow-hidden">
      {/* About Section — Full Background Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* ── ROW 1: TOP ── */}
        {/* Trophy — edge left */}
        <div className="absolute left-[3%] top-[6%] hidden md:block animate-float-2 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title={localTranslation.tooltips.excellence}>
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <path d="M34,18 L66,18 L66,50 C66,66 50,74 50,74 C50,74 34,66 34,50 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <path d="M34,30 L20,30 L20,46 C20,54 27,57 34,55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M66,30 L80,30 L80,46 C80,54 73,57 66,55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="74" x2="50" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="34" y="84" width="32" height="6" rx="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Rupee coin — inner left top */}
        <div className="absolute left-[22%] top-[4%] hidden lg:block animate-float-4 opacity-[0.08]" style={{animationDelay:'1.4s'}}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="29" stroke="currentColor" strokeWidth="1.5" />
            <text x="34" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Passbook — center top */}
        <div className="absolute left-[43%] top-[3%] hidden lg:block animate-float-3 opacity-[0.07]" style={{animationDelay:'0.6s'}}>
          <svg viewBox="0 0 80 110" className="w-12 h-16 text-slate-700 fill-none">
            <rect x="4" y="4" width="72" height="102" rx="5" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="4" y="4" width="72" height="20" stroke="currentColor" strokeWidth="1.5" fill="white" />
            <text x="10" y="18" fontFamily="sans-serif" fontWeight="900" fontSize="9" fill="currentColor">PASSBOOK</text>
            <line x1="14" y1="38" x2="66" y2="38" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="50" x2="66" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="62" x2="66" y2="62" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="74" x2="66" y2="74" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="86" x2="60" y2="86" stroke="currentColor" strokeWidth="1.5" />
            <line x1="40" y1="24" x2="40" y2="106" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        {/* Bank building — inner right top */}
        <div className="absolute right-[20%] top-[5%] hidden lg:block animate-float-5 opacity-[0.08]" style={{animationDelay:'2.1s'}}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <path d="M8,36 L50,10 L92,36 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <rect x="14" y="36" width="72" height="48" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="8" y1="84" x2="92" y2="84" stroke="currentColor" strokeWidth="2.5" />
            <rect x="20" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="36" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="52" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="68" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Target bullseye — edge right */}
        <div className="absolute right-[3%] top-[7%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title={localTranslation.tooltips.mission}>
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2.5" />
            <line x1="76" y1="24" x2="62" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M62,22 L78,22 L78,38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* ── ROW 2: MIDDLE ── */}
        {/* Calendar — edge left */}
        <div className="absolute left-[3%] top-[42%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title={localTranslation.tooltips.timely}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <rect x="16" y="24" width="68" height="58" rx="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="16" y1="42" x2="84" y2="42" stroke="currentColor" strokeWidth="2" />
            <line x1="34" y1="14" x2="34" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="66" y1="14" x2="66" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="57" r="4" fill="currentColor" />
            <circle cx="50" cy="57" r="4" fill="currentColor" />
            <circle cx="68" cy="57" r="4" fill="currentColor" />
            <circle cx="32" cy="72" r="4" fill="currentColor" />
            <circle cx="50" cy="72" r="4" fill="currentColor" />
          </svg>
        </div>
        {/* Handshake — inner left mid */}
        <div className="absolute left-[24%] top-[44%] hidden lg:block animate-float-3 opacity-[0.08]" style={{animationDelay:'1.8s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <path d="M12,55 L30,38 L44,38 L50,32 L56,38 L70,38 L88,55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30,38 L30,62 C30,65 33,68 36,66 L50,58 L64,66 C67,68 70,65 70,62 L70,38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Currency note — center mid */}
        <div className="absolute left-[43%] top-[45%] hidden lg:block animate-float-4 opacity-[0.07] rotate-3" style={{animationDelay:'0.9s'}}>
          <svg viewBox="0 0 120 68" className="w-24 h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="114" height="62" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="3" y="3" width="22" height="62" stroke="currentColor" strokeWidth="1.5" />
            <text x="8" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="currentColor">₹</text>
            <text x="34" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">ONE HUNDRED</text>
            <text x="34" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="currentColor">100</text>
            <line x1="34" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Pie chart — inner right mid */}
        <div className="absolute right-[22%] top-[42%] hidden lg:block animate-float-2 opacity-[0.08]" style={{animationDelay:'3.2s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <circle cx="50" cy="52" r="34" stroke="currentColor" strokeWidth="2.5" />
            <line x1="50" y1="18" x2="50" y2="52" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="52" x2="80" y2="69" stroke="currentColor" strokeWidth="2" />
            <path d="M50,18 A34,34 0 0,1 80,69" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="50" y1="52" x2="16" y2="52" stroke="currentColor" strokeWidth="2" />
            <path d="M16,52 A34,34 0 0,1 50,18" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        {/* Office building — edge right */}
        <div className="absolute right-[3%] top-[40%] hidden md:block animate-float-5 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title={localTranslation.tooltips.established}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <rect x="22" y="18" width="56" height="70" rx="2" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="22" y1="34" x2="78" y2="34" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="66" x2="78" y2="66" stroke="currentColor" strokeWidth="1.5" />
            <rect x="30" y="22" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="46" y="22" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="61" y="22" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="38" y="72" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* ── ROW 3: BOTTOM ── */}
        {/* Piggy bank — edge left */}
        <div className="absolute left-[3%] bottom-[6%] hidden md:block animate-float-4 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title={localTranslation.tooltips.save}>
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <ellipse cx="44" cy="58" rx="28" ry="22" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <circle cx="68" cy="52" r="13" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="77" cy="57" rx="6" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="75" cy="57" r="1.5" fill="currentColor" />
            <circle cx="79" cy="57" r="1.5" fill="currentColor" />
            <path d="M63,40 L67,32 L72,40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="71" cy="49" r="2" fill="currentColor" />
            <path d="M44,36 L52,36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M16,58 C10,54 8,60 12,62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="78" x2="26" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="80" x2="38" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="52" y1="80" x2="54" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="62" y1="78" x2="64" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Cheque — inner left bottom */}
        <div className="absolute left-[21%] bottom-[5%] hidden lg:block animate-float-2 opacity-[0.08] -rotate-3" style={{animationDelay:'2.4s'}}>
          <svg viewBox="0 0 130 78" className="w-28 h-16 text-slate-700 fill-none">
            <rect x="3" y="3" width="124" height="72" rx="3" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="3" y1="20" x2="127" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="15" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">ACCOUNT PAYEE CHEQUE</text>
            <line x1="12" y1="36" x2="115" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="67" fontFamily="sans-serif" fontSize="9" fill="currentColor">₹ ___________________</text>
            <path d="M96,62 C100,58 105,58 109,62 C113,66 117,66 121,62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Stacked coins — inner right bottom */}
        <div className="absolute right-[21%] bottom-[5%] hidden lg:block animate-float-3 opacity-[0.08]" style={{animationDelay:'1.1s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <ellipse cx="50" cy="76" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="63" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="50" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="24" y1="50" x2="24" y2="76" stroke="currentColor" strokeWidth="2" />
            <line x1="76" y1="50" x2="76" y2="76" stroke="currentColor" strokeWidth="2" />
            <text x="42" y="54" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Safe/vault — edge right */}
        <div className="absolute right-[3%] bottom-[7%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title={localTranslation.tooltips.safe}>
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <rect x="14" y="12" width="72" height="72" rx="5" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="32" x2="50" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="58" x2="50" y2="68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="50" x2="42" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="50" x2="68" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="80" x2="86" y2="80" stroke="currentColor" strokeWidth="1.5" />
            <rect x="72" y="45" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="white" />
          </svg>
        </div>

      </div>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          {...fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">{t.about.title}</h2>
          <p className="text-lg text-blue-600 font-medium">
            {localTranslation.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group"
          >
            {/* Slides container */}
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={slides[activeSlide].src} 
                    alt={slides[activeSlide].alt}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    id={`about-slide-img-${activeSlide}`}
                  />
                  
                  {/* Subtle overlay shading for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6 pt-16 flex flex-col justify-end z-10">
                    <p className="text-white text-sm sm:text-base font-semibold tracking-wide drop-shadow-sm leading-relaxed mb-2">
                      {slides[activeSlide].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Navigation Buttons (chevron arrows visible on hover) */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/94 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-115 active:scale-95 z-20 hover:text-blue-600 border border-slate-100/50"
              aria-label="Previous Slide"
              id="about-slide-prev-btn"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/94 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-115 active:scale-95 z-20 hover:text-blue-600 border border-slate-100/50"
              aria-label="Next Slide"
              id="about-slide-next-btn"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-4 right-6 flex gap-2 z-20 items-center justify-center p-1.5 rounded-full bg-slate-950/30 backdrop-blur-[2px]">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeSlide ? 'w-5 bg-blue-500' : 'w-2 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  id={`about-slide-dot-${idx}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div {...fadeIn}>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            
            <div className="mt-8 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6 bg-gradient-to-b from-blue-50/50 via-white/90 to-white hover:from-blue-50/80 border border-blue-100/80 hover:border-blue-300/80 shadow-md hover:shadow-xl shadow-blue-100/30 rounded-3xl transition-all duration-300 group/mission hover:-translate-y-0.5">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50/90 text-blue-600 border border-blue-100/80 rounded-2xl flex items-center justify-center shadow-sm group-hover/mission:scale-105 transition-transform duration-300">
                    <Target size={26} strokeWidth={2} />
                </div>
                <div>
                    <h4 className="font-extrabold text-lg sm:text-xl text-slate-900 mb-2 tracking-tight">{t.about.missionBadge}</h4>
                    <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-semibold italic">
                      {t.about.missionText}
                    </p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-16 border-t border-slate-100">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => {
                  const cardStyles = [
                    {
                      gradient: "from-sky-400 to-blue-500",
                      bgClass: "bg-gradient-to-b from-sky-50/40 via-white/80 to-white hover:from-sky-50/70 border-sky-100/80 hover:border-sky-300/80 hover:shadow-sky-100/40",
                      iconBg: "bg-sky-50/90 text-sky-600 border-sky-100/80",
                      doodle: (
                        <svg viewBox="0 0 100 100" className="w-full h-full text-sky-500 fill-none">
                          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                        </svg>
                      )
                    },
                    {
                      gradient: "from-blue-500 to-indigo-600",
                      bgClass: "bg-gradient-to-b from-blue-50/40 via-white/80 to-white hover:from-blue-50/70 border-blue-100/80 hover:border-blue-300/80 hover:shadow-blue-100/40",
                      iconBg: "bg-blue-50/90 text-blue-600 border-blue-100/80",
                      doodle: (
                        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500 fill-none">
                          <path d="M10,80 L35,55 L60,65 L90,25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <line x1="70" y1="25" x2="90" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <line x1="90" y1="25" x2="90" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M10,80 L90,80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                        </svg>
                      )
                    },
                    {
                      gradient: "from-indigo-500 to-violet-600",
                      bgClass: "bg-gradient-to-b from-indigo-50/40 via-white/80 to-white hover:from-indigo-50/70 border-indigo-100/80 hover:border-indigo-300/80 hover:shadow-indigo-100/40",
                      iconBg: "bg-indigo-50/90 text-indigo-600 border-indigo-100/80",
                      doodle: (
                        <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-500 fill-none">
                          <path d="M50,20 A30,30 0 1,1 20,50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M50,10 L50,30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M50,50 L70,30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="50" cy="58" r="4" fill="currentColor" />
                        </svg>
                      )
                    }
                  ];
                  const style = cardStyles[index] || cardStyles[0];

                  return (
                    <motion.div
                        key={stat.title}
                        className={`${style.bgClass} border shadow-sm hover:shadow-2xl rounded-3xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group hover:-translate-y-1`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* Dynamic top gradient indicator */}
                        <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${style.gradient}`}></div>

                        {/* Floating hand-drawn background doodle */}
                        <div className="absolute right-[-12px] bottom-[-12px] w-24 h-24 opacity-[0.03] group-hover:opacity-[0.09] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none select-none z-0">
                          {style.doodle}
                        </div>

                        <div className="relative z-10 text-center flex flex-col items-center justify-center">
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${style.iconBg} mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                                <stat.icon size={26} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors text-center">{stat.title}</h3>
                            <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-semibold text-center max-w-sm">{stat.text}</p>
                        </div>
                    </motion.div>
                  );
                })}
            </div>
        </div>
      </div>
    </section>
  );
}