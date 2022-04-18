export const projects: ProjectType[] = [
  {
    title: 'FroNotes',
    cover: {
      url: '/projects/fronotes.png',
      className: 'fronotes'
    },
    description: 'Fronotes is a simple markdown note taking native app created to better understand native desktop lifecycles.',
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
    description: 'A Game is a 2D platformer created during a stackathon using Godot with GDScript to compare how game development logic differs from web development logic.',
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
    description: 'Pluto Games was an e-commerce collaborative project focused on the games market. Some features that I implemented were Stripe integration, search querys and backend testing using mocha and chai',
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
