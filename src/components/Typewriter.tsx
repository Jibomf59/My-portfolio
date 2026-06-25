import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterProps) {
  const [state, setState] = useState({
    text: '',
    wordIndex: 0,
    isDeleting: false,
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const { text, wordIndex, isDeleting } = state;
    const currentWord = words[wordIndex];

    const run = () => {
      if (!isDeleting) {
        const next = currentWord.slice(0, text.length + 1);
        if (next.length === currentWord.length) {
          setState({ text: next, wordIndex, isDeleting: false });
          timeoutRef.current = setTimeout(
            () => setState({ text: next, wordIndex, isDeleting: true }),
            pauseTime
          );
          return;
        }
        setState({ text: next, wordIndex, isDeleting: false });
      } else {
        const next = currentWord.slice(0, text.length - 1);
        if (next.length === 0) {
          const newIdx = (wordIndex + 1) % words.length;
          setState({ text: '', wordIndex: newIdx, isDeleting: false });
          return;
        }
        setState({ text: next, wordIndex, isDeleting: true });
      }
    };

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(run, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [state, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {state.text}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}
