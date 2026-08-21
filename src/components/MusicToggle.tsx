import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicToggleProps {
  isMuted: boolean;
  onToggle: () => void;
}

export const MusicToggle = ({ isMuted, onToggle }: MusicToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-colors duration-300 bg-transparent hover:bg-gold/10"
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
    >
      <motion.div
        key={isMuted ? 'muted' : 'unmuted'}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gold/70" strokeWidth={1.5} />
        ) : (
          <Volume2 className="w-5 h-5 text-gold" strokeWidth={1.5} />
        )}
      </motion.div>
    </button>
  );
};
