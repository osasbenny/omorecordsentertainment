export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  image: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    spotify?: string;
    youtube?: string;
  };
  featuredTracks: Track[];
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  releaseDate: string;
  coverArt?: string;
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Eazie Boi',
    genre: 'Afrobeats',
    bio: 'Eazie Boi is a dynamic artist known for his unique blend of Afrobeats and contemporary sounds. His music reflects both his cultural heritage and modern influences, creating a distinctive style that resonates with audiences worldwide.',
    image: '/artists/eazie-boi-1.jpg', // Path to the first provided image
    socialLinks: {
      instagram: 'https://instagram.com/iam_eazieboi',
      twitter: 'https://twitter.com/iam_eazieboi',
      spotify: 'https://spotify.com',
      youtube: 'https://youtube.com'
    },
    featuredTracks: [
      {
        id: '101',
        title: 'Oshey',
        duration: '3:45',
        releaseDate: '2023-07-28',
        coverArt: '/tracks/oshey-cover.jpg' // Path to the Oshey artwork
      }
    ]
  },
  {
    id: '2',
    name: 'Ricky',
    genre: 'Hip Hop/Rap',
    bio: 'Ricky brings a fresh perspective to hip hop with his introspective lyrics and innovative sound. His music seamlessly blends traditional hip hop elements with contemporary production, creating a unique sonic experience.',
    image: '/artists/ricky-1.jpg', // Path to Ricky's image
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      spotify: 'https://spotify.com'
    },
    featuredTracks: [
      {
        id: '201',
        title: 'Ocean Vibes',
        duration: '3:22',
        releaseDate: '2023-08-15',
        coverArt: '/tracks/ocean-vibes-cover.jpg'
      }
    ]
  }
];