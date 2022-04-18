import {
  useState, useEffect,
} from 'react';
import { theme } from '@src/styles/theme';

export const useScreenSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState<{width: number; height: number;}>(getSize());
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect((): any => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    const width = windowSize?.width ?? 0;
    // is mobile
    if (width < theme.media.md) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // is tablet
    if (width >= theme.media.md
      && width < theme.media.lg) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }

    // is desktop
    if (width >= theme.media.lg) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [windowSize.width]);

  return {
    windowSize,
    isDesktop,
    isTablet,
    isMobile,
  };
};
