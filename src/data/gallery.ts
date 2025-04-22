export interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  category: 'events' | 'studio' | 'backstage' | 'performance';
  date: string;
  description?: string;
  featured?: boolean;
}

export const mediaGallery: MediaItem[] = [
  {
    id: '1',
    title: 'Lagos Summer Festival Performance',
    type: 'image',
    src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'performance',
    date: '2023-07-15',
    description: 'Adebayo Rhythm electrifying the crowd at Lagos Summer Festival',
    featured: true
  },
  {
    id: '2',
    title: 'Studio Session with Nkechi',
    type: 'image',
    src: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'studio',
    date: '2023-09-10',
    description: 'Nkechi Sounds recording her new album'
  },
  {
    id: '3',
    title: 'Amapiano Nights Event',
    type: 'image',
    src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'events',
    date: '2023-08-22',
    description: 'Packed crowd at Club Vibes for Amapiano Nights',
    featured: true
  },
  {
    id: '4',
    title: 'Backstage at National Theatre',
    type: 'image',
    src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'backstage',
    date: '2023-11-05',
    description: 'Kwame Fire preparing for his performance'
  },
  {
    id: '5',
    title: 'Studio Recording Session',
    type: 'image',
    src: 'https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'studio',
    date: '2024-01-15',
    description: 'Recording session for upcoming album',
    featured: true
  },
  {
    id: '6',
    title: 'Amara Beats DJ Set',
    type: 'image',
    src: 'https://images.pexels.com/photos/2959588/pexels-photo-2959588.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'performance',
    date: '2023-12-18',
    description: 'Amara Beats dropping beats at Club Vibes'
  },
  {
    id: '7',
    title: 'Music Festival Highlights',
    type: 'image',
    src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'events',
    date: '2023-07-15',
    description: 'Highlights from the annual music festival'
  },
  {
    id: '8',
    title: 'Album Artwork Photo Shoot',
    type: 'image',
    src: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'backstage',
    date: '2024-02-20',
    description: 'Behind the scenes of Adebayo\'s album cover shoot'
  },
  {
    id: '9',
    title: 'Studio Mix Session',
    type: 'image',
    src: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'studio',
    date: '2024-03-05',
    description: 'Sound engineer mixing tracks for new release'
  }
];