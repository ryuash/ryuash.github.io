const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'out',
  {
    branch: 'master',
    repo: 'https://github.com/ryuash/ryuash.github.io.git',
    history: false
  },
  () => {
    console.log('Deploy Complete!');
  },
);
