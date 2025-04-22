import React, { useState } from 'react';
import Section, { SectionTitle } from '../components/ui/Section';
import Button from '../components/ui/Button';
import { artists } from '../data/artists';
import { Search, Music } from 'lucide-react';

const ArtistsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Extract unique genres for filtering
  const genres = ['All', ...new Set(artists.map(artist => artist.genre))];
  
  // Filter artists based on search and genre filter
  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         artist.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = activeFilter === 'All' || artist.genre === activeFilter;
    
    return matchesSearch && matchesGenre;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Our Artists</h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover the incredible talent representing Omorecords Entertainment. Each artist brings a unique 
              sound and perspective to our musical family.
            </p>
          </div>
        </div>
      </section>
      
      {/* Artists Section */}
      <Section id="artists">
        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search artists by name or genre..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {genres.map(genre => (
              <button
                key={genre}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === genre
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        
        {/* Artists Grid */}
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Music className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No artists found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>
      
      {/* Become an Artist */}
      <Section id="join-us" bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle subtitle="Are you a talented artist looking for representation?">
            Join the Omorecords Family
          </SectionTitle>
          
          <p className="text-gray-600 mb-8">
            We're always on the lookout for exceptional talent to join our roster. If you believe your 
            music aligns with our vision and you're ready to take your career to the next level, 
            we'd love to hear from you.
          </p>
          
          <Button
            to="/contact"
            variant="primary"
            size="lg"
          >
            Submit Your Demo
          </Button>
        </div>
      </Section>
    </>
  );
};

const ArtistCard = ({ artist }: { artist: any }) => {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{artist.name}</h3>
          <p className="text-sm text-white/80">{artist.genre}</p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{artist.bio.substring(0, 100)}...</p>
        <Button
          to={`/artists/${artist.id}`}
          variant="outline"
          size="sm"
          className="w-full"
        >
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default ArtistsPage;