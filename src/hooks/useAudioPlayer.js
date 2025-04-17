import { useEffect, useRef } from "react";

const useAudioPlayer = (src, play) => {
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    if (play) audio.play();
    else audio.pause();

    return () => audio.pause();
  }, [play, src]);

  return audioRef.current;
};

export default useAudioPlayer;
