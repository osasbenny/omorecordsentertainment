export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  description: string;
  image: string;
  ticketLink: string;
  performers: string[];
  type: 'upcoming' | 'past';
  featured?: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Afrobeats Summer Festival',
    date: '2025-07-15',
    time: '16:00 - 23:00',
    venue: 'Lagos Beach Resort',
    location: 'Lagos, Nigeria',
    description: 'Join us for the biggest Afrobeats festival of the summer! Featuring performances from Omorecords artists and special guests. Experience a day of incredible music, food, and cultural celebration.',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ticketLink: 'https://ticketlink.example',
    performers: ['Adebayo Rhythm', 'Nkechi Sounds', 'Kwame Fire', 'Special Guests'],
    type: 'upcoming',
    featured: true
  },
  {
    id: '2',
    title: 'Amapiano Nights',
    date: '2025-08-22',
    time: '20:00 - 02:00',
    venue: 'Club Vibes',
    location: 'Johannesburg, South Africa',
    description: 'Experience the electric energy of Amapiano with a night dedicated to this popular South African genre. Featuring Amara Beats and guest DJs from across Africa.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ticketLink: 'https://ticketlink.example',
    performers: ['Amara Beats', 'Guest DJs'],
    type: 'upcoming',
    featured: true
  },
  {
    id: '3',
    title: 'Afro Soul Concert',
    date: '2025-09-10',
    time: '19:00 - 22:00',
    venue: 'National Theatre',
    location: 'Accra, Ghana',
    description: 'An intimate evening of soulful music showcasing the vocal talents of Nkechi Sounds. Experience her haunting melodies and powerful storytelling in this special concert.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ticketLink: 'https://ticketlink.example',
    performers: ['Nkechi Sounds', 'Special Guests'],
    type: 'upcoming'
  },
  {
    id: '4',
    title: 'Lagos Music Week',
    date: '2025-11-05',
    time: 'Multiple events',
    venue: 'Multiple venues',
    location: 'Lagos, Nigeria',
    description: 'A week-long celebration of Nigerian music featuring workshops, networking events, and performances from Omorecords artists and beyond.',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ticketLink: 'https://ticketlink.example',
    performers: ['Multiple Artists'],
    type: 'upcoming'
  },
  {
    id: '5',
    title: 'Afro Fusion Launch Party',
    date: '2023-12-18',
    time: '19:00 - 23:00',
    venue: 'Eko Hotel',
    location: 'Lagos, Nigeria',
    description: 'The official launch party for Adebayo Rhythm\'s hit album "Afro Fusion". An unforgettable night of music and celebration.',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ticketLink: 'https://ticketlink.example',
    performers: ['Adebayo Rhythm', 'Special Guests'],
    type: 'past'
  },
  {
    id: '6',
    title: 'African Music Awards',
    date: '2024-02-25',
    time: '18:00 - 22:00',
    venue: 'Convention Center',
    location: 'Nairobi, Kenya',
    description: 'Omorecords artists were nominated for multiple awards at this prestigious ceremony celebrating the best in African music.',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ticketLink: 'https://ticketlink.example',
    performers: ['Various Artists'],
    type: 'past'
  }
];