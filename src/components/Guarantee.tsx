import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, CheckCircle, Scale, MessageSquare, Flame, AlertCircle } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

const guaranteeContent: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  guaranteeTitle: string;
  guaranteeText: string;
  clarificationTitle: string;
  clarificationText: string;
  metrics: Array<{
    value: string;
    label: string;
    desc: string;
  }>;
}> = {
  en: {
    badge: 'Trust & Shield',
    title: 'Zero Penalty Guarantee',
    subtitle: 'We stand on the side of absolute reliability. Our operations and strict peer-review ensure flawless filings.',
    guaranteeTitle: 'Our Zero Penalty Seal of Compliance',
    guaranteeText: 'If Byalance makes any calculation error, filing mistake, or misses a direct compliance window, we will reimburse 100% of any government late fees or penalties imposed on your business, no questions asked.',
    clarificationTitle: 'Fair Play Clarification',
    clarificationText: 'Please note that timely and accurate client submissions are critical. Late data deliveries, omissions, incomplete records, or incorrect details provided from the client’s end are not covered under this guarantee. We maintain a strict audit trail to help you identify these risks early.',
    metrics: [
      { value: 'Max 10', label: 'Special Client Cap', desc: 'To ensure hyper-focused, individual care and impeccable precision, we are only accepting 10 businesses this quarter.' },
      { value: '1-on-1', label: 'Certified Partner-Only Support', desc: 'We never outsource your files to juniors, interns, or external third-parties. Certified senior experts directly manage your taxes.' },
      { value: '100% / 4-Eye', label: 'Dual Verification Check', desc: 'Every single journal sheet and tax return undergoes mandatory review by a second independent partner before submission.' },
      { value: '256-Bit', label: 'Absolute Data Privacy', desc: 'Your ledgers, PAN cards, and bank statements are fully secured utilizing military-grade digital encryption protocols.' }
    ]
  },
  hi: {
    badge: 'सुरक्षा और विश्वास',
    title: 'शून्य जुर्माना वारंटी (Zero Penalty Guarantee)',
    subtitle: 'हम पूर्ण विश्वसनीयता के पक्षधर हैं। हमारे कठोर संचालन और आंतरिक समीक्षा त्रुटिहीन फाइलिंग सुनिश्चित करते हैं।',
    guaranteeTitle: 'हमारा शून्य जुर्माना अनुपालन सील (Zero Penalty Seal)',
    guaranteeText: 'यदि Byalance के द्वारा कोई गणितीय त्रुटि, फाइलिंग संबंधी गलती होती है, या हम नियत समय-सीमा चूकते हैं, तो हम सरकार द्वारा आपके व्यवसाय पर लगाए गए किसी भी जुर्माने या विलंब शुल्क का 100% भुगतान खुद करेंगे, बिना कोई प्रश्न पूछे।',
    clarificationTitle: 'फेयर प्ले स्पष्टीकरण (Fair Play)',
    clarificationText: 'कृपया ध्यान दें कि क्लाइंट की ओर से समय पर और सटीक दस्तावेज जमा करना आवश्यक है। क्लाइंट की ओर से देर से डेटा भेजना, रिकॉर्ड में चूक, अधूरी जानकारी या गलत विवरण दिए जाने पर यह गारंटी लागू नहीं होगी। हम किसी भी संभावित त्रुटि की पहले ही पहचान करने में आपकी मदद करेंगे।',
    metrics: [
      { value: 'अधिकतम 10', label: 'विशेष क्लाइंट सीमा', desc: 'सटीक ध्यान और सर्वोच्च सेवा सुनिश्चित करने के लिए, हम इस तिमाही में केवल 10 व्यवसायों को ऑनबोर्ड कर रहे हैं।' },
      { value: '1-on-1', label: 'सीधा सीनियर पार्टनर सपोर्ट', desc: 'हम आपका कार्य किसी भी प्रशिक्षु या जूनियर्स को नहीं सौंपते; केवल अनुभवी सीनियर चार्टर्ड या टैक्स प्रोफेशनल ही सीधे संभालते हैं।' },
      { value: '100% / 4-आई', label: 'दोहरी सत्यापन ऑडिट', desc: 'प्रत्येक टैक्स रिटर्न और मुख्य वित्तीय रिपोर्ट को जमा करने से पहले अनिवार्य रूप से दूसरे पार्टनर द्वारा दोबारा चेक किया जाता है।' },
      { value: '256-Bit', label: 'डेटा गोपनीयता और सुरक्षा', desc: 'आपके पैन कार्ड और बैंक स्टेटमेंट अत्याधुनिक एन्क्रिप्शन के साथ पूरी तरह सुरक्षित और पूरी तरह गोपनीय रखे जाते हैं।' }
    ]
  },
  kn: {
    badge: 'ಅನುಸರಣೆಯ ಭರವಸೆ',
    title: 'ಶೂನ್ಯ ದಂಡದ ಭರವಸೆ (Zero Penalty Guarantee)',
    subtitle: 'ನಾವು ಸಂಪೂರ್ಣ ವಿಶ್ವಾಸಾರ್ಹತೆಯೊಂದಿಗೆ ನಿಲ್ಲುತ್ತೇವೆ. ನಮ್ಮ ಆಂತರಿಕ ವಿಮರ್ಶೆಯು ದೋಷರಹಿತ ಫೈಲಿಂಗ್ ಅನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
    guaranteeTitle: 'ನಮ್ಮ ಶೂನ್ಯ ದಂಡದ ಮುದ್ರೆ',
    guaranteeText: 'ಒಂದು ವೇಳೆ Byalance ನಿಂದ ಯಾವುದೇ ಲೆಕ್ಕಾಚಾರ ಅಥವಾ ಫೈಲಿಂಗ್ ತಪ್ಪುಗಳಾದರೆ, ಅಥವಾ ನಾವು ಗಡುವನ್ನು ತಪ್ಪಿಸಿದರೆ, ಸರ್ಕಾರವು ನಿಮ್ಮ ವ್ಯವಹಾರದ ಮೇಲೆ ವಿಧಿಸುವ ದಂಡ ಅಥವಾ ವಿಳಂಬ ಶುಲ್ಕದ 100% ಮೊತ್ತವನ್ನು ನಾವೇ ಮರುಪಾವತಿಸುತ್ತೇವೆ, ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಲ್ಲದೆ.',
    clarificationTitle: 'ನ್ಯಾಯೋಚಿತ ಸ್ಪಷ್ಟೀಕರಣ',
    clarificationText: 'ಗ್ರಾಹಕರ ಕಡೆಯಿಂದ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮತ್ತು ನಿಖರವಾದ ಮಾಹಿತಿ ನೀಡುವುದು ಅತ್ಯಗತ್ಯ. ನಿಮ್ಮ ಕಡೆಯಿಂದ ವಿಳಂಬವಾದ ಮಾಹಿತಿ ಸಲ್ಲಿಕೆ, ಆಪೂರ್ಣ ದಾಖಲೆಗಳು ಅಥವಾ ತಪ್ಪು ವಿವರಗಳನ್ನು ನೀಡಿದ್ದಲ್ಲಿ ಈ ದಂಡದ ಭರವಸೆಯು ಅನ್ವಯಿಸುವುದಿಲ್ಲ. ಅಪಾಯಗಳನ್ನು ಮೊದಲೇ ಪತ್ತೆಹಚ್ಚಲು ನಾವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
    metrics: [
      { value: 'ಗರಿಷ್ಠ 10', label: 'ವಿಶೇಷ ಗ್ರಾಹಕರ ಮಿತಿ', desc: 'ನಿಖರವಾದ ಗಮನ ಮತ್ತು ಅತ್ಯುನ್ನತ ಸೇವೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು, ನಾವು ಈ ತ್ರೈಮಾಸಿಕದಲ್ಲಿ 10 ಉದ್ಯಮಗಳನ್ನು ಮಾತ್ರ ಆನ್‌ಬೋರ್ಡ್ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ.' },
      { value: '1-on-1', label: 'ನೇರ ಹಿರಿಯ ಪಾಲುದಾರ ಬೆಂಬಲ', desc: 'ನಾವು ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಯಾವುದೇ ತರಬೇತಿದಾರರು ಅಥವಾ ಜೂನಿಯರ್‌ಗಳಿಗೆ ನೀಡುವುದಿಲ್ಲ; ಅನುಭವಿ ಹಿರಿಯ ತಜ್ಞರು ನೇರವಾಗಿ ನಿರ್ವಹಿಸುತ್ತಾರೆ.' },
      { value: '100% / 4-ಐ', label: 'ದ್ವಿಮುಖ ಪರಿಶೀಲನೆ ವ್ಯವಸ್ಥೆ', desc: 'ಪ್ರತಿ ತೆರಿಗೆ ಸಲ್ಲಿಕೆಯು ಸಲ್ಲಿಕೆಗೆ ಮುಂಚಿತವಾಗಿ ಮತ್ತೊಬ್ಬ ಹಿರಿಯ ಅಧಿಕಾರಿಯಿಂದ ಕಡ್ಡಾಯವಾಗಿ ಮರುಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ.' },
      { value: '256-Bit', label: 'ಡೇಟಾ ಗೌಪ್ಯತೆ ಮತ್ತು ರಕ್ಷಣೆ', desc: 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳು ಮತ್ತು ಪ್ಯಾನ್ ವಿವರಗಳನ್ನು ಅತ್ಯಾಧುನಿಕ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಬಳಸಿ ಸುರಕ್ಷಿತವಾಗಿರಿಸಲಾಗುತ್ತದೆ.' }
    ]
  },
  te: {
    badge: 'భాద్యత & విశ్వసనీయత',
    title: 'జీరో పెనాల్టీ గ్యారంటీ (Zero Penalty Guarantee)',
    subtitle: 'మేము సంపూర్ణ విశ్వసనీయతతో నిలబడతాము. ఏ విధమైన పొరపాట్లూ లేకుండా మీ ఫైలింగ్స్‌ను పూర్తి చేస్తాము.',
    guaranteeTitle: 'మా జీరో పెనాల్టీ సీల్',
    guaranteeText: 'మా Byalance సర్వీస్ ద్వారా ఏదైనా క్యాలిక్యులేషన్ పొరపాట్లు జరిగినా, లేదా మేము గడువు సమయాన్ని దాటినా, ప్రభుత్వం మీ వ్యాపారంపై విధించే ఆలస్య రుసుము లేదా జరిమానాలను మేము 100% తిరిగి చెల్లిస్తాము.',
    clarificationTitle: 'ముఖ్య గమనిక',
    clarificationText: 'క్లయింట్ తరఫున సకాలంలో మరియు ఖచ్చితమైన వివరాలను పంపడం చాలా అవసరం. క్లయింట్ వైపు నుండి సమాచారం ఆలస్యంగా రావడం, అసంపూర్ణ రికార్డులు లేదా తప్పు వివరాల వలన జరిగే నష్టాలకు ఈ గ్యారంటీ వర్తించదు.',
    metrics: [
      { value: 'గరిష్టం 10', label: 'ప్రత్యేక క్లైంట్ పరిమితి', desc: 'వ్యక్తిగత శ్రద్ధ మరియు అత్యున్నత నాణ్యతను అందించడానికి, మేము ఈ త్రైమాసికంలో 10 వ్యాపారాలను మాత్రమే స్వీకరిస్తున్నాము.' },
      { value: '1-on-1', label: 'నేరుగా సీనియర్ పార్టనర్ సపోర్ట్', desc: 'మీ పనులను మేము ఎలాంటి జూనియర్లకో లేదా ఇంటర్న్‌లకో అప్పగించము; నేరుగా సీనియర్ ప్రొఫెషనల్స్ మాత్రమే పూర్తి చేస్తారు.' },
      { value: '100% / 4-ఐ', label: 'రెండంచెల ధృవీకరణ విధానం', desc: 'ఏదైనా పొరపాటును నివారించడానికి ప్రతి లెక్కింపు మరొక సీనియర్ నిపుణుడి ద్వారా రెండవసారి తనిఖీ చేయబడుతుంది.' },
      { value: '256-Bit', label: 'డేటా గోప్యత & రక్షణ', desc: 'మీ పాన్ వివరాలు మరియు బ్యాంక్ రికార్డులను అత్యంత సురక్షిత డిజిటల్ ఎన్‌క్రిప్షన్ ద్వారా రక్షించడం మా బాధ్యత.' }
    ]
  },
  mr: {
    badge: 'सुरक्षा आणि खात्री',
    title: 'झिरो पेनल्टी गॅरंटी (Zero Penalty Guarantee)',
    subtitle: 'आम्ही न डगमगता तुमच्या विश्वासास पात्र राहतो. आमचे तज्ज्ञ ऑडिट प्रत्येक परतावा अचूक असल्याची खात्री करते.',
    guaranteeTitle: 'आमची झिरो पेनल्टी हमी मुद्रा',
    guaranteeText: 'Byalance कडून कोणतीही तांत्रिक किंवा गणितीय चूक झाल्यास, या आमच्यामुळे परतावा दाखल करण्यास उशीर झाल्यास, आम्ही तुमच्या व्यवसायावर आकारला गेलेला १००% सरकारी विलंबाचा दंड स्वतः भरू.',
    clarificationTitle: 'वाजवी नियमावली स्पष्टीकरण',
    clarificationText: 'ग्राहकांनी वेळेवर बरोबर दस्तऐवज सबमिट करणे अत्यंत आवश्यक आहे. आपल्या बाजूने झालेला उशीर, अपूर्ण दस्तऐवज किंवा चुकीच्या माहितीमुळे झालेला विलंबाचा भुर्दंड या हमी अंतर्गत कव्हर केला जाणार नाही.',
    metrics: [
      { value: 'जास्तीत जास्त १०', label: 'मर्यादित क्लाइंट्स प्रवेश', desc: 'अचूक कामाची खात्री आणि प्रत्येक फाइलिंगकडे वैयक्तिक लक्ष देण्यासाठी आम्ही केवळ पहिल्या १० व्यवसायांना समाविष्ट करत आहोत.' },
      { value: '1-on-1', label: 'सीनियर पार्टनर सपोर्ट', desc: 'आम्ही तुमचे काम कोणत्याही शिकाऊ किंवा कनिष्ठ कर्मचाऱ्यांकडे सोपवत नाही; वरिष्ठ चार्टर्ड किंवा कर तज्ज्ञ ते हाताळतात.' },
      { value: '१००% / ४-आय', label: 'दुहेरी पडताळणी मानक', desc: 'प्रत्येक ताळेबंद पत्रक आणि टॅक्स रिटर्न सबमिट करण्यापूर्वी अनिवार्यपणे दुसऱ्या तज्ज्ञाकडून तपासला जातो.' },
      { value: '256-Bit', label: 'गोपनीयता आणि सुरक्षा', desc: 'बँकिंग दर्जाचे डिजिटल एन्क्रिप्शन जे तुमचे पॅन कार्ड आणि खात्यांचे तपशील पूर्णपणे गोपनीय ठेवते.' }
    ]
  },
  ta: {
    badge: 'பாதுகாப்பு & நம்பகத்தன்மை',
    title: 'பூஜ்ஜிய அபராத உத்தரவாதம்',
    subtitle: 'நாங்கள் முழுமையான நம்பகத்தன்மையுடன் செயல்படும் போது, எங்களின் துல்லிய கணக்கீடு பிழையற்ற வரி தாக்கலை உறுதி செய்யும்.',
    guaranteeTitle: 'எங்களின் பூஜ்ஜிய அபராத முத்திரை',
    guaranteeText: 'எங்கள் Byalance தரப்பிலிருந்து ஏதேனும் கணக்கீடு பிழைகளோ, வரி தாக்கல் தவறுகளோ அல்லது குறிப்பிட்ட காலக்கெடுவை தவறவிட்டால், உங்கள் நிறுவனத்திற்கு விதிக்கப்படும் 100% அபராதம் அல்லது தாமதக் கட்டணத்தை நாங்களே செலுத்திவிடுகிறோம்.',
    clarificationTitle: 'நியாயமான வழிகாட்டுதல் விவரம்',
    clarificationText: 'வாடிக்கையாளர் தரப்பில் இருந்து சரியான தகவல்களை சரியான நேரத்தில் பகிர்வது மிக முக்கியம். வாடிக்கையாளர் தரப்பில் இருந்து ஆவணங்கள் தாமதமாகவோ, அரைகுறையாகவோ அல்லது தவறாகவோ வழங்கப்பட்டால் இந்த அபராத உத்தரவாதம் பொருந்தாது.',
    metrics: [
      { value: 'அதிகபட்சம் 10', label: 'சிறப்பு வாடிக்கையாளர் வரம்பு', desc: 'துல்லியமான கவனிப்பையும் நேர்த்தியான சேவையையும் வழங்க இந்த காலாண்டில் 10 நிறுவனங்களை மட்டுமே கணக்கு பராமரிப்பிற்கு ஏற்கிறோம்.' },
      { value: '1-on-1', label: 'நேரடி மூத்த கணக்காளர் ஆதரவு', desc: 'உங்கள் வரி தாக்கல்களை எந்தவொரு பயிற்சியாளர்களுக்கும் ஒதுக்காமல், அனுபவம் வாய்ந்த மூத்த கணக்காளரே நேரடியாகக் கையாளுவார்.' },
      { value: '100% / 4-ஐ', label: 'இருமுறை சரிபார்ப்பு முறை', desc: 'வழங்கப்படும் ஒவ்வொரு கணக்கீடும், அறிக்கையும் தாக்கல் செய்யப்படுவதற்கு முன்னர் மற்றொரு மூத்த அதிகாரியால் சரிபார்க்கப்படுகிறது.' },
      { value: '256-Bit', label: 'தரவு பாதுகாப்பு & இரகசியம்', desc: 'உங்களின் வங்கி அறிக்கைகள் மற்றும் பான் விவரங்கள் அனைத்தும் உயர் பாதுகாப்பு குறியாக்க தொழில்நுட்பத்துடன் பாதுகாக்கப்படுகிறது.' }
    ]
  }
};

export default function Guarantee() {
  const { language } = useLanguage();
  const currentLang: Language = (guaranteeContent[language] ? language : 'en') as Language;
  const content = guaranteeContent[currentLang] || guaranteeContent.en;

  return (
    <section id="guarantee" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative vectors with premium styling */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        
        {/* Top-right ambient glowing gradient */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100 mb-4"
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
            className="text-zinc-600 text-lg leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Real-world Interactive Layout of Guarantee Shield & Details */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-24">
          {/* Main Guarantee Focus Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gradient-to-b from-emerald-50/60 via-emerald-50/20 to-white hover:from-emerald-50 border border-emerald-100/90 rounded-3xl p-8 sm:p-10 shadow-lg shadow-emerald-50/40 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Indicator Accent bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>

            {/* Absolute Background shield watermark */}
            <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 text-emerald-500/5 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                <path d="M50,14 L80,27 L80,56 C80,71 65,82 50,88 C35,82 20,71 20,56 L20,27 Z" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                  <CheckCircle size={26} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                  {content.guaranteeTitle}
                </h3>
              </div>

              <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed mb-8">
                {content.guaranteeText}
              </p>
            </div>

            {/* Client-Clarification Callout with alert colors */}
            <div className="mt-6 p-6 bg-amber-50/60 border border-amber-100 rounded-2xl relative">
              <div className="flex items-center gap-2.5 mb-2.5 text-amber-800">
                <AlertCircle size={18} strokeWidth={2.4} />
                <h4 className="font-extrabold text-xs sm:text-sm tracking-tight uppercase">
                  {content.clarificationTitle}
                </h4>
              </div>
              <p className="text-amber-700/90 text-xs sm:text-sm font-semibold leading-relaxed">
                {content.clarificationText}
              </p>
            </div>
          </motion.div>

          {/* Side Operational Excellence Statement/Aesthetic card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Indicator bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

            {/* Glowing background circle */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-[10px] font-mono uppercase tracking-wider mb-6">
                <Flame size={12} className="text-indigo-400" /> Operational Excellence
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-tight leading-snug">
                Rigorous Auditing, Flawless Delivery
              </h3>

              <p className="text-slate-400 font-medium text-[13px] sm:text-sm leading-relaxed mb-6">
                Operational mistakes or slip-ups cost time, capital, and mental energy. At Byalance, we prevent defaults before they register.
              </p>

              <p className="text-slate-400 font-medium text-[13px] sm:text-sm leading-relaxed">
                Our dual-accountant review cycle cross-checks every cash ledger, GST challan, and TDS liability schedules against the live government XML schema to make sure everything lines up seamlessly.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-800/80 mt-8 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">STANDARDS: ISO-COMPLIANT CERTIFIED</span>
              <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </div>

        {/* Operational Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.metrics.map((metric, index) => {
            const cardStyles = [
              { border: "hover:border-blue-200 hover:shadow-blue-100/30", text: "text-blue-600" },
              { border: "hover:border-indigo-200 hover:shadow-indigo-100/30", text: "text-indigo-600" },
              { border: "hover:border-sky-200 hover:shadow-sky-100/30", text: "text-sky-600" },
              { border: "hover:border-teal-200 hover:shadow-teal-100/30", text: "text-teal-600" }
            ];
            const style = cardStyles[index] || cardStyles[0];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-50/50 hover:bg-white border border-slate-100/70 ${style.border} rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                   <div className={`text-3xl md:text-4xl font-display font-extrabold mb-2 ${style.text} tracking-tight`}>
                    {metric.value}
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase mb-3">
                    {metric.label}
                  </h4>
                </div>
                <p className="text-slate-500 font-bold text-[12px] sm:text-xs leading-relaxed mt-2">
                  {metric.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
