const media = {
  xs: 320,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export const theme = {
  colors: {
    primary: '#0a5c59',
    secondary: '#faf3de',
  },
  background: {
    surfaceOne: '#ffffff'
  },
  media: {
    ...media,
    maxWidth: '800px',
    generateMedia: (device: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
      const mediaSize = media[device] || media.xs;
      return `(min-width: ${mediaSize}px)`;
    }
  }
}
