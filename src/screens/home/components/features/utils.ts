export const projects: ProjectType[] = [
  {
    title: 'Big Dipper',
    cover: {
      url: '/projects/big-dipper.png',
      className: 'big-dipper'
    },
    description: 'Big Dipper is an open source blockchain explorer that I helped revamp and maintain. By far, it is one of the most rewarding project that I\'ve built and watched stabilized. Currently the project has over 50 forks with the original having over 200 forks. While primarily focused on the Cosmos SDK ecosystem, it has since been expanded to provide support for Elrond, Flow, and Solana too.',
    stack: ['Nextjs, Material-UI, Nodejs, Jest'],
    links: [
      {
        type: 'github',
        description: 'cosmos ui',
        url: 'https://github.com/forbole/big-dipper-2.0-cosmos',
      },
    ],
  },
  {
    title: 'Multiplayer Conway\'s Game of Life',
    cover: {
      url: '/projects/game-of-life.png',
      className: 'game-of-life'
    },
    description: 'A spinoff of the popular Game of Life. This project was created as a fun refresher on how to use SocketIO and it\'s websocket protocols. Real-time interactive was created using SocketIO and Nodejs on the backend and React on the frontend.',
    stack: ['React', 'Express', 'Nodejs', 'SocketIO'],
    links: [
      {
        type: 'github',
        description: 'github game of life react',
        url: 'https://github.com/ryuash/game-of-life-react',
      },
      {
        type: 'github',
        description: 'github game of life nodejs',
        url: 'https://github.com/ryuash/game-of-life-nodejs',
      },
      {
        type: 'external',
        description: 'Game of life',
        url: 'https://gol-react-ryuash.herokuapp.com/',
      },
    ],
  },
  {
    title: 'Stackbox',
    cover: {
      url: '/projects/stackbox.png',
      className: 'stackbox'
    },
    description: 'A spinoff of the popular Jackbox party games developed by Jackbox Games. Stackbox is a multiplayer collaborative project with several games designed to be played with one device acting as a host, and up to four players on their personal devices. Stackbox utilizes Google’s real-time Firebase for real-time interactivity',
    stack: ['React', 'Redux', 'Recharts', 'Express', 'Firebase', 'Mocha', 'Chai'],
    links: [
      {
        type: 'github',
        description: 'github stackbox',
        url: 'https://github.com/guava-jay/capstone',
      },
      {
        type: 'external',
        description: 'stackbox',
        url: 'https://stackbox.herokuapp.com/',
      },
    ],
  },
]
