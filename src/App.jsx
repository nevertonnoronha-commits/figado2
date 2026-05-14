import React, { useState, useEffect, useRef } from 'react';
import { globalStyles } from './styles/globalStyles';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { StickyUrgencyBar } from './components/sections/StickyUrgencyBar';
import { MarqueeBanner } from './components/sections/MarqueeBanner';
import { HeroSection } from './components/sections/HeroSection';
import { PainPointsSection } from './components/sections/PainPointsSection';
import { TransformationSection } from './components/sections/TransformationSection';
import { MechanismSection } from './components/sections/MechanismSection';
import { ExpertSection } from './components/sections/ExpertSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { DetailedContentSection } from './components/sections/DetailedContentSection';
import { BonusesSection } from './components/sections/BonusesSection';
import { OfferPricingSection } from './components/sections/OfferPricingSection';
import { GuaranteeSection } from './components/sections/GuaranteeSection';
import { SocialProofSection } from './components/sections/SocialProofSection';
import { AccessDeliverySection } from './components/sections/AccessDeliverySection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { Footer } from './components/layout/Footer';
import { SocialProofPopup } from './components/features/SocialProofPopup';
import { AIChatWidget } from './components/features/AIChatWidget';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ h: 1, m: 32, s: 31 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'model', text: '¡Hola! Soy tu asesora virtual de Naturale. ¿Tienes alguna duda sobre la guía de recetas o la oferta del 85% OFF de hoy?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isChatOpen]);

  const handleSendChat = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const systemInstruction = "Eres un asistente virtual experto y amable para 'Naturale', una guía de recetas creada por la Dra. Elinna Novaz para sanar el hígado graso. Tu objetivo es resolver dudas del producto y animar a la compra (hoy a $17.99 con 85% OFF). No des consejos médicos, sugiere consultar a un profesional para casos graves, pero resalta que la nutrición de Naturale es el primer paso ideal. Responde de forma concisa (máximo 2 párrafos cortos), empática y persuasiva. Usa viñetas si es necesario.";

      const formattedHistory = chatMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));
      formattedHistory.push({ role: 'user', parts: [{ text: userMsg }] });

      const payload = {
        contents: formattedHistory,
        systemInstruction: { parts: [{ text: systemInstruction }] }
      };

      let delay = 1000;
      let data = null;
      const maxRetries = 3;

      for (let i = 0; i < maxRetries; i++) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.status === 429) {
          await new Promise(r => setTimeout(r, delay));
          delay *= 2;
          continue;
        }

        if (!response.ok) throw new Error("HTTP Error");
        data = await response.json();
        break;
      }

      if (data && data.candidates && data.candidates[0].content) {
        const aiReply = data.candidates[0].content.parts[0].text;
        setChatMessages(prev => [...prev, { role: 'model', text: aiReply }]);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'model', text: 'Hubo un error de conexión al procesar tu mensaje. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Timer logic with LocalStorage persistency
  useEffect(() => {
    const savedTime = localStorage.getItem('naturale_timer');
    if (savedTime) {
      setTimeLeft(JSON.parse(savedTime));
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else { m = 59; h--; }
        }
        const newTime = { h, m, s };
        localStorage.setItem('naturale_timer', JSON.stringify(newTime));
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Progress logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Popup logic (Social Proof)
  useEffect(() => {
    const timeout = setTimeout(() => setShowPopup(true), 15000);
    const hideTimeout = setTimeout(() => setShowPopup(false), 25000);
    return () => { clearTimeout(timeout); clearTimeout(hideTimeout); };
  }, []);

  return (
    <div className="relative selection:bg-[#e2b764] selection:text-[#04100b]">
      <style>{globalStyles}</style>
      <div id="scroll-progress" style={{ width: scrollProgress }}></div>

      <StickyUrgencyBar timeLeft={timeLeft} />
      <HeroSection />
      <MarqueeBanner />
      <PainPointsSection />
      <TransformationSection />
      <MechanismSection />
      <ExpertSection />
      <BenefitsSection />
      <DetailedContentSection />
      <BonusesSection />
      <OfferPricingSection />
      <GuaranteeSection />
      <SocialProofSection />
      <AccessDeliverySection />
      <FAQSection />
      <FinalCTASection />
      <Footer />

      <SocialProofPopup showPopup={showPopup} setShowPopup={setShowPopup} />

      <AIChatWidget
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        chatMessages={chatMessages}
        chatInput={chatInput}
        setChatInput={setChatInput}
        isChatLoading={isChatLoading}
        chatEndRef={chatEndRef}
        handleSendChat={handleSendChat}
      />
      <SpeedInsights />
    </div>
  );
}
