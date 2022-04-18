const media = {
  xs: '320px',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
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
      return `(min-width: ${mediaSize})`;
    }
  }
}
