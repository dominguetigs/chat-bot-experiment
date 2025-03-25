import { useEffect } from 'react';

import { useLottie } from 'lottie-react';

import Lottie from './lottie.json';

const LOTTIE_SPEED = 1;

export function ChatEmptyState() {
  const options = {
    animationData: Lottie,
    loop: true,
  };

  const { View, setSpeed } = useLottie(options);

  useEffect(() => {
    setSpeed(LOTTIE_SPEED);
  }, [setSpeed]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background">
      <div className="w-40 h-40">{View}</div>
      <span className="text-sm font-semibold text-slate-700">How can I help you?</span>
    </div>
  );
}
