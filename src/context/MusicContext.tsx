import { createContext, useContext, type ReactNode } from 'react';

interface MusicContextType {
  isMuted: boolean;
  toggleMute: () => void;
  isReady: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children, value }: { children: ReactNode; value: MusicContextType }) => {
  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
};
