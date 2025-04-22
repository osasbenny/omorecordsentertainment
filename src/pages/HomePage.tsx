import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedArtists from '../components/home/FeaturedArtists';
import FeaturedEvents from '../components/home/FeaturedEvents';
import AboutSection from '../components/home/AboutSection';
import MediaGalleryPreview from '../components/home/MediaGalleryPreview';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedArtists />
      <FeaturedEvents />
      <AboutSection />
      <MediaGalleryPreview />
      <CallToAction />
    </>
  );
};

export default HomePage;