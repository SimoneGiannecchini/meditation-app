import React, { useState } from "react";
import Time from "../components/Timer";
import QuoteBox from "../components/QuoteBox";
import useAudioPlayer from "../hooks/useAudioPlayer";
import forestSound from "../assets/forest.mp3";

import app from "../assets/firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import "../styles.scss";

const Meditation = () => {
  const [canPlay, setCanPlay] = useState(false);
  const [quote, setQuote] = useState("");
  const [duration, setDuration] = useState(5);

  const db = getFirestore(app);
  useAudioPlayer(forestSound, canPlay);

  const handleQuoteChange = (newQuote) => {
    setQuote(newQuote);
  };

  const handleSaveSession = async () => {
    try {
      await addDoc(collection(db, "meditationSessions"), {
        date: new Date(),
        durationInMinutes: duration,
        meditationType: "forestSound",
        motivationalQuote: quote,
      });
      alert("Sessione salvata!");
    } catch (error) {
      console.error("Errore durante il salvataggio:", error);
    }
  };

  return (
    <div className="page-meditation">
      <h1>Meditation Space</h1>

      {!canPlay && (
        <button onClick={() => setCanPlay(true)} className="zen-button">
          Start Music
        </button>
      )}

      <QuoteBox onQuoteChange={handleQuoteChange} />
      <Time onDurationChange={setDuration} onSaveSession={handleSaveSession} />
    </div>
  );
};

export default Meditation;
