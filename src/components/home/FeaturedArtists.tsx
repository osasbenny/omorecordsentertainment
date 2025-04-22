import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionTitle } from '../ui/Section';
import Button from '../ui/Button';
import { artists } from '../../data/artists';

const FeaturedArtists = () => {
  return (
    <Section id="featured-artists" bgColor="bg-gray-50">
      <SectionTitle 
        subtitle="Discover the incredible talent representing Omorecords Entertainment"
      >
        Our Featured Artists
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button to="/artists" variant="primary">
          View All Artists
        </Button>
      </div>
    </Section>
  );
};

const ArtistCard = ({ artist }: { artist: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/artists/${artist.id}`}
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card group overflow-hidden">
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={artist.image} 
            alt={artist.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`} />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold">{artist.name}</h3>
            <p className="text-sm text-white/80">{artist.genre}</p>
            
            <div className={`flex items-center mt-3 transform transition-transform duration-300 ${
              isHovered ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
            }`}>
              <span className="text-sm font-medium">View Profile</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArtists;