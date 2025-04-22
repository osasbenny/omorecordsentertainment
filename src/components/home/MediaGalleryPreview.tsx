import { useState } from 'react';
import Section, { SectionTitle } from '../ui/Section';
import Button from '../ui/Button';
import { mediaGallery } from '../../data/gallery';

const MediaGalleryPreview = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Filter to featured media
  const featuredMedia = mediaGallery
    .filter(item => item.featured)
    .slice(0, 3);
  
  return (
    <Section id="media-preview" bgColor="bg-gray-50">
      <SectionTitle 
        subtitle="Explore photos and videos from our performances, studio sessions, and events"
      >
        Media Gallery
      </SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredMedia.map((item, index) => (
          <div 
            key={item.id}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow group relative aspect-video"
          >
            <img 
              src={item.src} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/80">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button to="/media" variant="primary">
          View Full Gallery
        </Button>
      </div>
    </Section>
  );
};

export default MediaGalleryPreview;