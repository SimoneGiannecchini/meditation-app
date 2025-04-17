import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const QuoteBox = ({ onQuoteChange }) => {
  const [quote, setQuote] = useState("Caricamento frase...");
  const [key, setKey] = useState(0);

  const loadQuote = () => {
    const proxyUrl = "https://api.allorigins.win/get?url=";
    const targetUrl = "https://zenquotes.io/api/random";

    axios
      .get(proxyUrl + encodeURIComponent(targetUrl))
      .then((res) => {
        const parsed = JSON.parse(res.data.contents);
        const frase = `${parsed[0].q} — ${parsed[0].a}`;
        setQuote(frase);
        setKey((prev) => prev + 1);
        if (onQuoteChange) onQuoteChange(frase);
      })
      .catch(() => {
        const fallback = "Non riesco a caricare la frase. Respira comunque.";
        setQuote(fallback);
        if (onQuoteChange) onQuoteChange(fallback);
      });
  };

  useEffect(() => {
    loadQuote();
    const interval = setInterval(loadQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-box">
      <AnimatePresence mode="wait">
        <motion.p
          key={key}
          className="quote"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1 }}
        >
          {quote}
        </motion.p>
      </AnimatePresence>

      <p className="quote-source">
        Inspirational quotes provided by{" "}
        <a
          href="https://zenquotes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZenQuotes API
        </a>
      </p>
    </div>
  );
};

export default QuoteBox;
