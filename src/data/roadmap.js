// src/data/roadmap.js
// Clean structured data for roadmap items (bullet arrays + optional sublists)

const ROADMAP = [
  {
    id: 1,
    title: 'Server Survey Form',
    icon: 'https://i.ibb.co/whwqGCd0/avatars-9-K0-Oo-Ptez-IIg-Agzi-mlt-QNQ-t240x240.jpg',
    bullets: [
      'A dedicated form to gather feedback and suggestions, helping to improve the server and meet member needs.'
    ]
  },
  {
    id: 2,
    title: 'Question of the Day Channel',
    icon: 'https://i.ibb.co/Df4mGjGQ/images-18.jpg',
    bullets: [
      'Previously removed due to inactivity. Reintroducing it will encourage consistent engagement and fun conversations.'
    ]
  },
  {
    id: 3,
    title: 'Economy System',
    icon: 'https://i.ibb.co/HpHN3nmL/images-17.jpg',
    bullets: [
      'A core feature to promote activity, interaction, and participation within the server by introducing currency, a shop, and rewards.'
    ]
  },
  {
    id: 4,
    title: 'Creativity Department',
    icon: 'https://i.ibb.co/Zzttx05Q/images-19.jpg',
    bullets: [
      'A specialized team focused on brainstorming and refining ideas to improve the server.',
      {
        text: 'Could operate within a sub-server.',
        sub: [
          'Head of Creativity',
          'Lead Strategists',
          'Idea Curators',
          'Creative Contributors'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Upgraded Level Roles & Reward System',
    icon: 'https://i.ibb.co/Xwb6P9L/169a7ccbe5d104c96fcae59a80849ca1.jpg',
    bullets: [
      'A complete rework of the level system to make every role meaningful and rewarding.'
    ]
  }
]

export default ROADMAP
