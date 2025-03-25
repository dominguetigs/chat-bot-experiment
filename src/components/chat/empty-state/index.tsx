import { useEffect } from 'react';

import { useLottie } from 'lottie-react';

import Lottie from './lottie.json';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col justify-center items-center h-screen bg-background"
    >
      <div className="w-40 h-40">{View}</div>
      <span className="text-sm text-center font-semibold text-slate-700">
        No messages yet. <br />
        How can I help you?
      </span>
    </motion.div>
  );
}
