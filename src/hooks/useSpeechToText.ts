import { useState } from "react";
import { transcribe } from "../services/SpeechToText";

export const useSpeechToText = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAudio = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const file = event.target.files?.[0];
    if (!file) return;

    const result = await transcribe(file);
    setText(result);
    setLoading(false)
  };

  return {
    transcribedText: text,
    handleAudio,
    loading
  }
}