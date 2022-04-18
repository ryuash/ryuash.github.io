import { useState } from 'react';

export const useFeatureProject = () => {
  const [hover, setHover] = useState(false);

  const hoverOn = () => {
    setHover(true)
  };

  const hoverOff = () => {
    setHover(false)
  }

  return {
    hover,
    hoverOn,
    hoverOff
  }
}
