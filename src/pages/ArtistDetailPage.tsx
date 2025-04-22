import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section, { SectionTitle } from '../components/ui/Section';
import Button from '../components/ui/Button';
import { artists } from '../data/artists';
import { Music, Clock, Calendar, Play, ExternalLink } from 'lucide-react';

const ArtistDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<any>(null);
  
  useEffect(() => {
    const foundArtist = artists.find(a => a.id === id);
    setArtist(foundArtist);
  }, [id]);
  
  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Music className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Artist Not Found</h2>
          <p className="text-gray-600 mb-6">The artist you're looking for doesn't exist or has been removed.</p>
          <Link to="/artists" className="text-primary-600 hover:text-primary-800 font-medium">
            Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${artist.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-primary-800/50" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-primary-300 mb-2">{artist.genre}</p>
              <h1 className="mb-6">{artist.name}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                {artist.socialLinks.instagram && (
                  <SocialLink href={artist.socialLinks.instagram} label="Instagram" />
                )}
                {artist.socialLinks.twitter && (
                  <SocialLink href={artist.socialLinks.twitter} label="Twitter" />
                )}
                {artist.socialLinks.spotify && (
                  <SocialLink href={artist.socialLinks.spotify} label="Spotify" />
                )}
                {artist.socialLinks.youtube && (
                  <SocialLink href={artist.socialLinks.youtube} label="YouTube" />
                )}
              </div>
              <Button
                variant="accent"
                to="/contact"
              >
                Book This Artist
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <Section id="artist-bio">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Biography</SectionTitle>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {artist.bio}
          </p>
        </div>
      </Section>
      
      {/* Featured Tracks */}
      <Section id="featured-tracks" bgColor="bg-gray-50">
        <SectionTitle>Featured Tracks</SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          {artist.featuredTracks.map((track: any) => (
            <div 
              key={track.id}
              className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center gap-6"
            >
              <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden group">
                <img 
                  src={track.coverArt || artist.image} 
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-bold">{track.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{track.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Released: {new Date(track.releaseDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Play className="w-5 h-5 text-gray-700" />
                </button>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="External link"
                >
                  <ExternalLink className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section id="cta" bgColor="bg-primary-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book {artist.name} for Your Event</h2>
          <p className="text-lg text-primary-200 mb-8">
            Looking to bring authentic {artist.genre} to your venue or event? Contact us to check availability and rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/contact"
              variant="accent"
              size="lg"
            >
              Booking Inquiry
            </Button>
            <Button
              to="/events"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Upcoming Shows
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Back to Artists */}
      <div className="bg-white py-6">
        <div className="container">
          <Link to="/artists" className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Artists
          </Link>
        </div>
      </div>
    </>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
}

const SocialLink = ({ href, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm"
    >
      {label === 'Instagram' && <InstagramIcon />}
      {label === 'Twitter' && <TwitterIcon />}
      {label === 'Spotify' && <SpotifyIcon />}
      {label === 'YouTube' && <YouTubeIcon />}
      <span>{label}</span>
    </a>
  );
};

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

export default ArtistDetailPage;