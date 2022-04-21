export const projects: ProjectType[] = [
  {
    title: 'Node Checker',
    cover: {
      url: '/projects/node-checker.png',
      className: 'node-checker'
    },
    description: 'Node checker is a nodejs app I made before switching over to grafana and prometheus to keep tabs on all the active servers. It is incorporated with a discord bot that will send alerts whenever a server is not responding or needs a disk cleanup.',
    stack: ['Nodejs'],
    links: [],
  },
  {
    title: 'Desmos Profile Preview',
    cover: {
      url: '/projects/desmos-profile-preview.png',
      className: 'profile-preview'
    },
    description: 'Desmos Profile Preview is an app made to visualise how your desmos profile will look on Big Dipper before doing any costing transaction.',
    stack: ['Nodejs'],
    links: [
      {
        type: 'github',
        description: 'github profile preview',
        url: 'https://github.com/catboss-network/big-dipper-profile-preview',
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
  {
    title: 'Uprise App',
    cover: {
      url: '/projects/uprise-merchant.png',
      className: 'uprise-merchant'
    },
    description: 'Uprise App is the merchant facing part of the loan platform designed and developed with the dev team. Some features I imeplemented were team integrations, lockouts and OAuth integrations with Stripe and Paypal.',
    stack: ['React', 'Nodejs', 'Flask', 'Jest'],
    links: [],
  },
  {
    title: 'FroNotes',
    cover: {
      url: '/projects/fronotes.png',
      className: 'fronotes'
    },
    description: 'Fronotes is a markdown note taking app. This was created as a way to get more hands on with Electron and understand the native lifecycles.',
    stack: ['React', 'Redux', 'Electron'],
    links: [
      {
        type: 'github',
        description: 'github fronotes',
        url: 'https://github.com/ryuash/FroNotes',
      },
    ],
  },
  {
    title: 'A Game',
    cover: {
      url: '/projects/a-game.jpeg',
      className: 'a-game'
    },
    description: 'A Game is a 2D platformer created during stackathon using Godot with GDScript to compare how game development logic differs from web development logic.',
    stack: ['GDScript'],
    links: [
      {
        type: 'github',
        description: 'github A Game',
        url: 'https://github.com/ryuash/stackathon_platformer',
      },
      {
        type: 'external',
        description: 'A game',
        url: 'https://ryuash.itch.io/a-game',
      },
    ],
  },
  {
    title: 'Pluto Games',
    cover: {
      url: '/projects/pluto-games.png',
      className: 'pluto-games'
    },
    description: 'Pluto Games is an e-commerce collaborative project focused on the games market. Some features that I implemented were Stripe integration, search querys and unit testing',
    stack: ['React', 'Redux', 'Express', 'Sequelize', 'Mocha', 'Chai'],
    links: [
      {
        type: 'github',
        description: 'github pluto games',
        url: 'https://github.com/Goat-Pluto-Shopper/pluto-games',
      },
      {
        type: 'external',
        description: 'pluto games',
        url: 'https://pluto-games.herokuapp.com/',
      },
    ],
  },
]
