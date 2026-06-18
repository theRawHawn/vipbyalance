import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, FileUp, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

const processContent: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
}> = {
  en: {
    badge: 'Our Process',
    title: 'How We Work',
    subtitle: 'A streamlined, secure, and hassle-free onboarding and monthly compliance workflow built for modern businesses.',
    steps: [
      {
        title: 'Instant Secure Onboarding',
        description: 'Complete our onboarding form in under 10 minutes. We assign a dedicated senior certified accountant from our own team directly to your business.'
      },
      {
        title: 'Seamless Monthly Drop',
        description: 'Upload your sales, purchase invoices, and bank statements directly via our secure desk, email, or a quick WhatsApp snap.'
      },
      {
        title: 'Rigorous Ledger Audit',
        description: 'We perform deep-dive entries, bank reconciliation, and match Input Tax Credit (GSTR-2B vs Books) to prevent leaks.'
      },
      {
        title: 'Timely Filing & Reporting',
        description: 'Your tax filings (GST, TDS, ITR) are compiled and submitted before deadlines, accompanied by simple P&L reviews.'
      }
    ]
  },
  hi: {
    badge: 'हमारी प्रक्रिया',
    title: 'हम कैसे काम करते हैं',
    subtitle: 'आधुनिक व्यवसायो के लिए बनाई गई एक सुव्यवस्थित, सुरक्षित और परेशानी मुक्त मासिक अनुपालन प्रक्रिया।',
    steps: [
      {
        title: 'त्वरित सुरक्षित ऑनबोर्डिंग',
        description: 'कम से कम 10 मिनट में ऑनबोर्डिंग फॉर्म पूरा करें। हम अपनी खुद की विशेषज्ञ टीम से एक समर्पित सीनियर अकाउंटेंट सीधे आपके व्यवसाय के लिए नियुक्त करेंगे।'
      },
      {
        title: 'सरल मासिक डॉक्यूमेंट शेयरिंग',
        description: 'अपनी बिक्री, खरीद चालान और बैंक स्टेटमेंट सीधे हमारे सुरक्षित पोर्टल, ईमेल या केवल एक व्हाट्सएप संदेश पर भेजें।'
      },
      {
        title: 'सख्त बहीखाता ऑडिट',
        description: 'हम प्रत्येक प्रविष्टि, बैंक समाधान और इनपुट टैक्स क्रेडिट (GSTR-2B) का गहन मिलान करते हैं ताकि कोई विसंगति न हो।'
      },
      {
        title: 'समय पर फाइलिंग और रिपोर्टिंग',
        description: 'आपके टैक्स रिटर्न (GST, TDS, ITR) समय से पहले जमा किए जाते हैं, साथ ही आपको मासिक वित्तीय रिपोर्ट भी प्रदान की जाती है।'
      }
    ]
  },
  kn: {
    badge: 'ನಮ್ಮ ಪ್ರಕ್ರಿಯೆ',
    title: 'ನಮ್ಮ ಕೆಲಸದ ವಿಧಾನ',
    subtitle: 'ಆಧುನಿಕ ವ್ಯವಹಾರಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸುರಕ್ಷಿತ ಮತ್ತು ಸರಳವಾದ ಮಾಸಿಕ ಅನುಸರಣೆ ಪ್ರಕ್ರಿಯೆ.',
    steps: [
      {
        title: 'ತ್ವರಿತ ಸುರಕ್ಷಿತ ಆನ್‌ಬೋರ್ಡಿಂಗ್',
        description: 'ಕೇವಲ 10 ನಿಮಿಷಗಳಲ್ಲಿ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪ್ರಕ್ರಿಯೆ ಮುಗಿಸಿ. ನಮ್ಮ ಸ್ವಂತ ತಂಡದಿಂದಲೇ ಒಬ್ಬ ಹಿರಿಯ ಪ್ರಮಾಣೀಕೃತ ಅಕೌಂಟೆಂಟ್‌ರನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕೆ ನಿಯೋಜಿಸುತ್ತೇವೆ.'
      },
      {
        title: 'ಸುಲಭ ಮಾಸಿಕ ದಾಖಲೆ ಸಲ್ಲಿಕೆ',
        description: 'ನಿಮ್ಮ ಮಾರಾಟ, ಖರೀದಿ ಇನ್‌ವಾಯ್ಸ್‌ಗಳು ಮತ್ತು ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ನಮ್ಮ ಸುರಕ್ಷಿತ ಡೆಸ್ಕ್, ಇಮೇಲ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸುಲಭವಾಗಿ ಕಳುಹಿಸಿ.'
      },
      {
        title: 'ಕಟ್ಟುನಿಟ್ಟಾದ ಲೆಡ್ಜರ್ ಆಡಿಟ್',
        description: 'ನಾವು ಪ್ರತಿ ಪ್ರವೇಶ, ಬ್ಯಾಂಕ್ ಸಾಮರಸ್ಯ ಮತ್ತು ಇನ್‌ಪುಟ್ ಟ್ಯಾಕ್ಸ್ ಕ್ರೆಡಿಟ್ (GSTR-2B) ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತೇವೆ.'
      },
      {
        title: 'ಸಕಾಲಿಕ ಫೈಲಿಂಗ್ ಮತ್ತು ವರದಿ',
        description: 'ನಿಮ್ಮ ತೆರಿಗೆ ಸಲ್ಲಿಕೆಗಳನ್ನು (GST, TDS, ITR) ಸಮಯಕ್ಕೆ ಮುಂಚಿತವಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ, ಜೊತೆಗೆ ವಿವರವಾದ ಮಾಸಿಕ ಹಣಕಾಸು ವರದಿಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ.'
      }
    ]
  },
  te: {
    badge: 'మా ప్రక్రియ',
    title: 'మేము ఎలా పని చేస్తాం',
    subtitle: 'ఆధునిక వ్యాపారాల కోసం రూపొందించబడిన చాలా సులభమైన మరియు సురక్షితమైన నెలవారీ పన్ను ప్రక్రియ.',
    steps: [
      {
        title: 'తక్షణ సురక్షిత ఆన్‌బోర్డింగ్',
        description: 'కేవలం 10 నిమిషాల్లో ఆన్‌బోర్డింగ్ పూర్తి చేయండి. మా సొంత అంతర్గత బృందం నుండే ఒక సీనియర్ సర్టిఫైడ్ అకౌంట్ ప్రొఫెషనల్‌ను నేరుగా మీ వ్యాపారానికి కేటాయిస్తాము.'
      },
      {
        title: 'సులభమైన నెలవారీ డాక్యుమెంట్ల సమర్పణ',
        description: 'మీ సేల్స్, పర్చేజ్ ఇన్వాయిస్‌లు మరియు బ్యాంక్ స్టేట్‌మెంట్‌లను ఇమెయిల్ లేదా వాట్సాప్ ద్వారా సురక్షితంగా మాకు పంపండి.'
      },
      {
        title: 'ఖచ్చితమైన లెడ్జర్ ఆడిటింగ్',
        description: 'బ్యాంక్ స్టేట్‌మెంట్‌లు మరియు జీఎస్టీ ఇన్పుట్ ట్యాక్స్ క్రెడిట్ (GSTR-2B) లతో ప్రతి లావాదేవీని మేము క్రాస్-చెక్ చేస్తాము.'
      },
      {
        title: 'సకాలంలో ఫైలింగ్ & రిపోర్టింగ్',
        description: 'మీ పన్ను ఫైలింగ్‌లు (GST, TDS, ITR) గడువు కంటే ముందే పూర్తి చేయబడతాయి, వీటితో పాటు నెలవారీ ఆదాయ నివేదికలు అందించబడతాయి.'
      }
    ]
  },
  mr: {
    badge: 'आमची प्रक्रिया',
    title: 'आम्ही कसे काम करतो',
    subtitle: 'आधुनिक व्यवसायांसाठी तयार केलेली एक सुलभ, सुरक्षित आणि त्रासमुक्त मासिक अनुपालन कार्यपद्धती.',
    steps: [
      {
        title: 'त्वरित सुरक्षित ऑनबोर्डिंग',
        description: 'फक्त १० मिनिटांत ऑनबोर्डिंग पूर्ण करा. आमच्या स्वतःच्या टीममधील एका वरिष्ठ प्रमाणित अकाउंटंटला थेट तुमच्या व्यवसायासाठी नियुक्त केले जाईल.'
      },
      {
        title: 'सोपे मासिक दस्तऐवज सबमिशन',
        description: 'तुमची विक्री, खरेदी इनव्हॉइस आणि बँक स्टेटमेंट थेट आमच्या सुरक्षित डेस्क, ईमेल किंवा व्हॉट्सॲपद्वारे पाठवा.'
      },
      {
        title: 'तंतोतंत खातेपरीक्षण',
        description: 'प्रलंबित कामे पूर्ण करणे, बँक खात्यांचा ताळमेळ आणि जीएसटी इनपुट टॅक्स क्रेडिट (GSTR-2B) ची अचूक पडताळणी आम्ही करतो.'
      },
      {
        title: 'वेळेवर फायलिंग आणि अहवाल',
        description: 'तुमचे कर परतावे (GST, TDS, ITR) मुदतीपूर्वी दाखल केले जातात, सोबतच मासिक नफा-तोटा अहवाल दिला जातो.'
      }
    ]
  },
  ta: {
    badge: 'எங்கள் செயல்முறை',
    title: 'நாங்கள் செயல்படும் விதம்',
    subtitle: 'நவீன வணிகங்களுக்காக வடிவமைக்கப்பட்ட எளிய மற்றும் பாதுகாப்பான மாதாந்திர கணக்கியல் மற்றும் வரி தாக்கல் செயல்முறை.',
    steps: [
      {
        title: 'உடனடி பாதுகாப்பான இணைவு',
        description: '10 நிமிடங்களுக்குள் எங்களுடன் இணையுங்கள். எங்களது சொந்தக் குழுவின் மூத்த சான்றளிக்கப்பட்ட கணக்காளர் ஒருவரை நேரடியாக உங்கள் வணிகத்திற்கு நியமிக்கிறோம்.'
      },
      {
        title: 'எளிதான மாதாந்திர ஆவண பகிர்வு',
        description: 'விற்பனை, கொள்முதல் இன்வாயஸ்கள் மற்றும் வங்கி அறிக்கைகளை மின்னஞ்சல் அல்லது வாட்ஸ்அப் மூலம் எளிதாக எங்களிடம் பகிருங்கள்.'
      },
      {
        title: 'துல்லியமான கணக்கியல் சரிபார்ப்பு',
        description: 'நாங்கள் ஒவ்வொரு கணக்கு பதிவையும், வங்கி இருப்புநிலையும் மற்றும் உள்ளீட்டு வரி வரவு (GSTR-2B) விவரங்களையும் துல்லியமாக சரிபார்க்கிறோம்.'
      },
      {
        title: 'நேரத்திற்குள் வரி தாக்கல் & அறிக்கை',
        description: 'உங்கள் வரி தாக்கல்கள் (GST, TDS, ITR) கடைசி தேதிக்கு முன்பே முடிக்கப்பட்டு உங்களுக்கு மாதாந்திர நிதி அறிக்கைகள் அனுப்பி வைக்கப்படும்.'
      }
    ]
  }
};

export default function Process() {
  const { language } = useLanguage();
  const currentLang: Language = (processContent[language] ? language : 'en') as Language;
  const content = processContent[currentLang] || processContent.en;

  const icons = [UserPlus, FileUp, ShieldAlert, CheckCircle2];
  const colors = [
    { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', hoverBorder: 'hover:border-blue-300' },
    { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', hoverBorder: 'hover:border-indigo-300' },
    { text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100', hoverBorder: 'hover:border-sky-300' },
    { text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', hoverBorder: 'hover:border-teal-300' },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Absolute vectors for engineering-free craft feeling */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute left-[5%] top-[15%] w-72 h-72 rounded-full bg-blue-100/20 blur-3xl animate-float-3"></div>
        <div className="absolute right-[5%] bottom-[15%] w-72 h-72 rounded-full bg-teal-100/20 blur-3xl animate-float-4" style={{ animationDelay: '1s' }}></div>
        
        {/* Decorative Line Doodles */}
        <div className="absolute left-[15%] top-[50%] opacity-[0.05] hidden xl:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path d="M10,80 C50,20 150,180 190,40" stroke="currentColor" strokeWidth="3" className="text-slate-800" strokeDasharray="5 5" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-100 mb-4"
          >
            {content.badge}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight"
          >
            {content.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-600 text-lg leading-relaxed font-normal"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Process Roadmap Card System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0"></div>

          {content.steps.map((step, index) => {
            const Icon = icons[index] || CheckCircle2;
            const style = colors[index] || colors[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative flex flex-col items-start bg-white border border-slate-100/80 rounded-3xl p-8 shadow-md hover:shadow-xl ${style.hoverBorder} transition-all duration-300 z-10`}
              >
                {/* Step indicator pill */}
                <div className="absolute top-4 right-4 text-xs font-mono font-bold px-2.5 py-1 bg-slate-50 text-slate-400 border border-slate-100/60 rounded-full">
                  Step 0{index + 1}
                </div>

                {/* Animated and styled icon container */}
                <div className={`w-14 h-14 ${style.bg} ${style.text} border ${style.border} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-6 w-8 h-1 bg-slate-100 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-300 rounded-full"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
