import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { Disc3 } from 'lucide-react';

const slideImages = [
  'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=1600'
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-center items-center text-center text-white pt-20">
        <div className="animate-fade-in">
          <Disc3 className="w-20 h-20 text-primary-400 mx-auto mb-6" />
          <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Omorecords <span className="text-accent-400">Entertainment</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the best of African music and entertainment. 
            We bring authentic sounds and cultural experiences to the global stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              to="/artists"
            >
              Our Artists
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/events"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Upcoming Events
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;