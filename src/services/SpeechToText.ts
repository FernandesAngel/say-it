
import { pipeline, env, read_audio } from "@huggingface/transformers";
import type { Pipeline } from "@huggingface/transformers";

env.allowRemoteModels = true;
env.useBrowserCache = false;

let pipe: Pipeline | null = null;
export async function loadWhisper() {
  console.log('careganfo')
  if (!pipe) {
    console.log('careganfo pipe')
    pipe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small",
      {dtype: "fp32"}
    );
  }
  console.log('caregou')
  return pipe;
}

export async function transcribe(audioBlob: File | Blob) {
  console.log('entrou trancriber')
  const opts = {
  language: "pt",
  task: "transcribe",
  temperature: 0.0,
  chunk_length_s: 30,
  stride_length_s: 5
};
  const whisper = await loadWhisper();
  const audioUrl = URL.createObjectURL(audioBlob);
  const audioBuffer = await read_audio(audioUrl, 16000);

  const result = await whisper(audioBuffer, opts);

  URL.revokeObjectURL(audioUrl);

  console.log('finalizou trancriber')
  console.log(result.text)
  return result.text;
}