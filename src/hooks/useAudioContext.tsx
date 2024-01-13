import { useEffect, useState } from "react";

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

// this hook encapulates instantiating an AudioContext object. This appears to
// greatly reduce audio latency on iOS/Safari

export default function useAudioContext() {
  const [audioContext, setAudioContext] = useState<AudioContext | undefined>();

  useEffect(() => {
    if (!window) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    setAudioContext(new AudioContext());
  }, []);
  return audioContext;
}
