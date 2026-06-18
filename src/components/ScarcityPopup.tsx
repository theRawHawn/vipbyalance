import { useState, useEffect } from 'react';
import { X, AlertTriangle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const popupTranslations = {
  en: {
    headerNotice: "STRICT QUARTERLY CAPACITY LIMIT",
    badge: "⚠️ Notice",
    heading: "Pragmatic Quality Control",
    text1: "To guarantee pristine, error-free books & dedicated professional attention, we only onboard",
    text1Highlight: "8 new accounts each quarter",
    statusMessagePart1: "⏳ 5 of 8 slots are locked. Just",
    statusMessagePart2: "3 slots remain",
    statusMessagePart3: "before onboarding closes",
    noTrialsHeader: "No Free Trials",
    noTrialsText: "We filter strictly for serious businesses. You can test us for",
    noTrialsHighlight: "1 month, paid in full",
    noTrialsTextEnd: ". Cancel instantly if not 100% satisfied.",
    buttonText: "Secure 1 of 3 Remaining Slots",
    closeButton: "Continue to browse",
    whatsappMessage: "Hi Byalance Team! I want to lock in 1 of the 3 remaining client slots for this quarter. I am ready to start the 1-month paid test drive of your bookkeeping & compliance services."
  },
  hi: {
    headerNotice: "कठोर त्रैमासिक क्षमता सीमा",
    badge: "⚠️ नोटिस",
    heading: "व्यावहारिक गुणवत्ता नियंत्रण",
    text1: "सटीक, त्रुटि-रहित बहीखाता और समर्पित व्यावसायिक ध्यान सुनिश्चित करने के लिए, हम केवल ऑनबोर्ड करते हैं",
    text1Highlight: "प्रत्येक तिमाही में 8 नए खाते",
    statusMessagePart1: "⏳ 8 में से 5 स्लॉट बुक हो चुके हैं। केवल",
    statusMessagePart2: "3 स्लॉट शेष हैं",
    statusMessagePart3: "ऑनबोर्डिंग बंद होने से पहले",
    noTrialsHeader: "कोई मुफ्त ट्रायल नहीं",
    noTrialsText: "हम केवल गंभीर व्यवसायों के लिए काम करते हैं। आप हमारी सेवाओं का परीक्षण कर सकते हैं",
    noTrialsHighlight: "1 महीना, पूर्ण भुगतान के साथ",
    noTrialsTextEnd: "। यदि आप 100% संतुष्ट नहीं हैं, तो तुरंत सेवा रद्द करें।",
    buttonText: "शेष 3 स्लॉट में से 1 सुरक्षित करें",
    closeButton: "ब्राउज़ करना जारी रखें",
    whatsappMessage: "नमस्ते Byalance टीम! मैं इस तिमाही के लिए बचे हुए 3 ग्राहक स्लॉट में से 1 सुरक्षित करना चाहता हूँ। मैं आपकी बहीखाता और अनुपालन सेवाओं के 1 महीने के सशुल्क टेस्ट ड्राइव को शुरू करने के लिए तैयार हूँ।"
  },
  kn: {
    headerNotice: "ಕಟ್ಟುನಿಟ್ಟಾದ ತ್ರೈಮಾಸಿಕ ಸಾಮರ್ಥ್ಯ ಮಿತಿ",
    badge: "⚠️ ಸೂಚನೆ",
    heading: "ಪ್ರಾಯೋಗಿಕ ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ",
    text1: "ನಿಖரವಾದ ಮತ್ತು ದೋಷ-ಮುಕ್ತ ಬುಕ್ಕೀಪಿಂಗ್ ಹಾಗೂ ಬದ್ಧ ವೃತ್ತಿಪರ ಗಮನವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು, ನಾವು ಕೇವಲ ಸೇರಿಸಿಕೊಳ್ಳುತ್ತೇವೆ",
    text1Highlight: "ಪ್ರತಿ ತ್ರೈಮಾಸಿಕದಲ್ಲಿ 8 ಹೊಸ ಖಾತೆಗಳು",
    statusMessagePart1: "⏳ 8 ರಲ್ಲಿ 5 ಸ್ಲಾಟ್‌ಗಳು ಈಗಾಗಲೇ ಬುಕ್ ಆಗಿವೆ. ಕೇವಲ",
    statusMessagePart2: "3 ಸ್ಲಾಟ್‌ಗಳು ಉಳಿದಿವೆ",
    statusMessagePart3: "ನೋಂದಣಿ ಮುಚ್ಚುವ ಮೊದಲು",
    noTrialsHeader: "ಯಾವುದೇ ಉಚಿತ ಟ್ರಯಲ್ ಇಲ್ಲ",
    noTrialsText: "ನಾವು ಗಂಭೀರವಾದ ವ್ಯವಹಾರಗಳಿಗೆ ಮಾತ್ರ ಸೇವೆ ನೀಡುತ್ತೇವೆ. ನೀವು ನಮ್ಮನ್ನು ಪರೀಕ್ಷಿಸಬಹುದು",
    noTrialsHighlight: "1 ತಿಂಗಳು, ಪೂರ್ಣ ಪಾವತಿಯೊಂದಿಗೆ",
    noTrialsTextEnd: ". ನೀವು 100% ತೃಪ್ತರಾಗದಿದ್ದರೆ ತಕ್ಷಣವೇ ರದ್ದುಗೊಳಿಸಿ.",
    buttonText: "ಉಳಿದಿರುವ 3 ಸ್ಲಾಟ್‌ಗಳಲ್ಲಿ 1 ಕಾಯ್ದಿರಿಸಿ",
    closeButton: "ವೀಕ್ಷಿಸಲು ಮುಂದುವರಿಯಿರಿ",
    whatsappMessage: "ನಮಸ್ಕಾರ Byalance ತಂಡ! ಈ ತ್ರೈಮಾಸಿಕಕ್ಕೆ ಉಳಿದಿರುವ 3 ಕ್ಲೈಂಟ್ ಸ್ಲಾಟ್‌ಗಳಲ್ಲಿ 1 ಅನ್ನು ಕಾಯ್ದಿರಿಸಲು ನಾನು ಬಯಸುತ್ತೇನೆ. ನಿಮ್ಮ ಬುಕ್ಕೀಪಿಂಗ್ ಮತ್ತು ನಿಯಂತ್ರಣ ಸೇವೆಗಳ 1 ತಿಂಗಳ ಪಾವತಿಸಿದ ಟೆಸ್ಟ್ ಡ್ರೈವ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸಲು ನಾನು ಸಿದ್ಧನಿದ್ದೇನೆ."
  },
  te: {
    headerNotice: "కఠినమైన త్రైమాసిక సామర్థ్య పరిమితి",
    badge: "⚠️ నోటీసు",
    heading: "ఆచరణాత్మక నాణ్యత నియంత్రణ",
    text1: "ఖచ్చితమైన, లోపాలు లేని బుక్ కీపింగ్ మరియు ప్రత్యేక వృత్తిపరమైన శ్రద్ధను అందించడానికి, మేము కేవలం",
    text1Highlight: "ప్రతి త్రైమాసికంలో 8 కొత్త ఖాతాలను మాత్రమే స్వీకరిస్తాము",
    statusMessagePart1: "⏳ 8 స్లాట్లలో 5 ఇప్పటికే బుక్ అయ్యాయి. కేవలం",
    statusMessagePart2: "3 స్లాట్లు మిగిలి ఉన్నాయి",
    statusMessagePart3: "ఆన్‌బోర్డింగ్ ముగిసేలోగా",
    noTrialsHeader: "ఉచిత ట్రయల్స్ లేవు",
    noTrialsText: "మేము కేవలం తీవ్రమైన వ్యాపారాల కోసం మాత్రమే పని చేస్తాము. మీరు మమ్మల్ని పరీక్షించవచ్చు",
    noTrialsHighlight: "1 నెల, పూర్తి చెల్లింపుతో",
    noTrialsTextEnd: ". 100% సంతృప్తి చెందకపోతే వెంటనే రద్దు చేసుకోండి.",
    buttonText: "మిగిలిన 3 స్లాట్లలో 1 సురక్షితం చేసుకోండి",
    closeButton: "బ్రౌజ్ చేయడం కొనసాగించండి",
    whatsappMessage: "నమస్తే Byalance టీమ్! ఈ త్రైమాసికానికి మిగిలి ఉన్న 3 క్లయింట్ స్లాట్లలో 1 ని సురక్షితం చేసుకోవాలనుకుంటున్నాను. మీ బుక్ కీపింగ్ & పన్ను సేవల 1 నెల చెల్లింపు టెస్ట్ డ్రైవ్ ప్రారంభించడానికి నేను సిద్ధంగా ఉన్నాను."
  },
  mr: {
    headerNotice: "कडक त्रैमासिक क्षमता मर्यादा",
    badge: "⚠️ सूचना",
    heading: "व्यावहारिक गुणवत्ता नियंत्रण",
    text1: "अचूक, त्रुटी-मुक्त बहीखाते आणि समर्पित व्यावसायिक लक्ष सुनिश्चित करण्यासाठी, आम्ही फक्त ऑनबोर्ड करतो",
    text1Highlight: "प्रत्येक तिमाहीत 8 नवीन बिझनेस खाती",
    statusMessagePart1: "⏳ 8 पैकी 5 स्लॉट आधीच बुक झाले आहेत. फक्त",
    statusMessagePart2: "3 स्लॉट शिल्लक आहेत",
    statusMessagePart3: "ऑनबोर्डिंग बंद होण्यापूर्वी",
    noTrialsHeader: "कोणतीही विनामूल्य चाचणी नाही",
    noTrialsText: "आम्ही फक्त गंभीर व्यवसायांनाच सेवा देतो. तुम्ही आमची चाचणी घेऊ शकता",
    noTrialsHighlight: "1 महिना, पूर्ण शुल्कासह",
    noTrialsTextEnd: ". जर तुम्ही 100% समाधानी नसाल तर त्वरित सेवा रद्द करा.",
    buttonText: "शिल्लक 3 स्लॉटपैकी 1 सुरक्षित करा",
    closeButton: "ब्राउझ करणे सुरू ठेवा",
    whatsappMessage: "नमस्कार Byalance टीम! मला या तिमाहीसाठी शिल्लक असलेल्या ३ क्लायंट स्लॉटपैकी १ स्लॉट सुरक्षित करायचा आहे. मी तुमच्या बुककीपिंग आणि अनुपालन सेवांचा १ महिन्याचा सशुल्क टेस्ट ड्राईव्ह सुरू करण्यास तयार आहे."
  },
  ta: {
    headerNotice: "கடுமையான காலாண்டு திறன் வரம்பு",
    badge: "⚠️ அறிவிப்பு",
    heading: "நடைமுறை தரக் கட்டுப்பாடு",
    text1: "மிகத் துல்லியமான, பிழையற்ற கணக்குப்பதிவு மற்றும் பிரத்யேக நிபுணத்துவ கவனிப்பை வழங்க, நாங்கள் காலாண்டுக்கு",
    text1Highlight: "8 புதிய வாடிக்கையாளர்களை மட்டுமே சேர்க்கிறோம்",
    statusMessagePart1: "⏳ 8 இல் 5 இடங்கள் ஏற்கனவே முன்பதிவு செய்யப்பட்டுள்ளன. வெறும்",
    statusMessagePart2: "3 இடங்கள் மட்டுமே உள்ளன",
    statusMessagePart3: "முன்பதிவு முடிவதற்குள்",
    noTrialsHeader: "இலவச சோதனை இல்லை",
    noTrialsText: "நாங்கள் தீவிரமான வணிகங்களை மட்டுமே தேர்வு செய்கிறோம். எங்கள் சேவைகளை நீங்கள் சோதித்துப் பார்க்க",
    noTrialsHighlight: "1 மாதம், முழு கட்டணத்துடன்",
    noTrialsTextEnd: ". உங்களுக்கு 100% திருப்தி இல்லை எனில் உடனடியாக நிறுத்திக் கொள்ளலாம்.",
    buttonText: "மீதமுள்ள 3 இடங்களில் 1 ஐ முன்பதிவு செய்க",
    closeButton: "தொடர்ந்து பார்க்கவும்",
    whatsappMessage: "வணக்கம் Byalance குழுவே! இந்த காலாண்டிற்கு மீதமுள்ள 3 வாடிக்கையாளர் இடங்களில் 1 ஐ முன்பதிவு செய்ய விரும்புகிறேன். உங்கள் கணக்குப்பதிவு மற்றும் இணக்க சேவைகளுக்கான 1 மாத கட்டண சோதனைப் பயணத்தைத் தொடங்க நான் தயாராக உள்ளேன்."
  }
};

const ScarcityPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000); // Trigger after 8 seconds of browsing

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  // Fallback to English if language is not supported
  const t = popupTranslations[language as keyof typeof popupTranslations] || popupTranslations.en;

  const getWhatsAppLink = () => {
    return `https://wa.me/917406296116?text=${encodeURIComponent(t.whatsappMessage)}`;
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-3 animate-fade-in"
    >
      <div className="bg-white rounded-xl border-2 border-red-600 max-w-[325px] w-full relative overflow-hidden shadow-2xl flex flex-col">
        
        {/* High-Alert Header Banner */}
        <div className="bg-red-600 text-white py-2 px-3 font-black tracking-wider text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-inner">
          <AlertTriangle className="h-3 w-3 animate-bounce text-yellow-300" strokeWidth={3} />
          {t.headerNotice}
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-10 right-3 bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 p-1.5 rounded-full border border-slate-200 hover:border-red-200 transition-colors z-10 shadow-sm cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-4 sm:p-5 text-center">
          <span className="text-[10px] font-black tracking-widest text-red-600 uppercase bg-red-50 border border-red-200 px-3 py-0.5 rounded-full inline-block animate-pulse">
            {t.badge}
          </span>

          <h3 className="text-lg font-black text-slate-950 tracking-tight mt-2.5 leading-tight">
            {t.heading}
          </h3>

          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            {t.text1} <strong className="font-extrabold text-red-600">{t.text1Highlight}</strong>.
          </p>

          <p className="text-xs text-slate-800 mt-3 bg-red-50 border border-dashed border-red-200 rounded-lg p-2.5 text-center font-bold">
            {t.statusMessagePart1} <strong className="text-red-600 text-sm font-black">{t.statusMessagePart2}</strong> {t.statusMessagePart3}.
          </p>

          <div className="mt-3 text-left border-l-2 border-slate-300 pl-2 py-0.5 text-[10px] text-slate-500 leading-normal space-y-0.5">
            <span className="font-bold text-slate-700 uppercase tracking-wider text-[8px] block">{t.noTrialsHeader}</span>
            <p>
              {t.noTrialsText} <strong className="font-bold text-slate-800">{t.noTrialsHighlight}</strong>{t.noTrialsTextEnd}
            </p>
          </div>

          <div className="mt-4.5 space-y-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg font-extrabold text-xs transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-md shadow-red-600/10"
            >
              {t.buttonText} <ArrowRight size={13} />
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-[11px] font-black text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 py-2.5 rounded-lg transition-colors uppercase tracking-wider block shadow-sm cursor-pointer"
            >
              {t.closeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScarcityPopup;
