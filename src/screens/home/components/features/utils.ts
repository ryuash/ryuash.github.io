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
    title: 'Sven',
    cover: {
      url: '/projects/sven.png',
      className: 'sven'
    },
    description: 'Sven is an art piece I made in React for my professor\'s retirement gallery. The theme was to showcase what his students are currently doing after graduation so I thought this would be a fun way to show how art and code often coexist and touch up on my animation skills along the way.',
    stack: ['React'],
    links: [
      {
        type: 'github',
        description: 'github sven',
        url: 'https://github.com/ryuash/sven-gallery',
      },
      {
        type: 'external',
        description: 'sven',
        url: 'https://ryuash.github.io/sven-gallery/',
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
]
