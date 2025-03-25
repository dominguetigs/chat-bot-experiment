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
    <div className="flex flex-col justify-center items-center h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-32 h-32"
      >
        {View}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-sm text-center font-semibold text-slate-700"
      >
        No messages yet. <br />
        How can I help you?
      </motion.span>
    </div>
  );
}
