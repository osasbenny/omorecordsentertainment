import React from 'react';
import Section, { SectionTitle } from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Music, Award, Users, Globe, Mic, Headphones } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">About Omorecords Entertainment</h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover the story behind our mission to bring authentic African music to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <Section id="our-story">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle align="left">Our Story</SectionTitle>
            <p className="text-gray-600 mb-6">
              Founded in 2015 by music producer and entrepreneur Omoré Ojukwu, Omorecords Entertainment 
              started as a small recording studio in Lagos, Nigeria. With a passion for authentic African 
              sounds and a vision to showcase them on the global stage, Omoré began working with local artists 
              who shared his vision.
            </p>
            <p className="text-gray-600 mb-6">
              What began as a modest studio has grown into a full-service entertainment company representing 
              some of Africa's most exciting musical talents. Today, Omorecords Entertainment has expanded 
              beyond music production to event management, artist development, and digital content creation.
            </p>
            <p className="text-gray-600">
              Throughout our journey, we've remained committed to our core mission: celebrating and promoting 
              African musical heritage while embracing innovation and global influences. Each artist we work 
              with brings a unique perspective to this mission, contributing to the rich tapestry of sounds 
              that define Omorecords.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7087528/pexels-photo-7087528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Omorecords Studio"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-100 rounded-full -z-10" />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section id="mission-vision" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-primary-800">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To discover, develop, and promote authentic African musical talent, creating global 
              opportunities while preserving cultural integrity and artistic innovation.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <Music className="w-8 h-8 text-primary-600" />
              </div>
              <p className="text-gray-600">
                Promoting authentic African sound with global appeal
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-primary-800">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be the premier platform for African music and entertainment globally, connecting cultures 
              through the universal language of music.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-600" />
              </div>
              <p className="text-gray-600">
                Creating a global community united by African music
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Founder Section */}
      <Section id="founder">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle align="left">Founder's Message</SectionTitle>
            <blockquote className="text-gray-600 mb-6 pl-4 border-l-4 border-primary-500 italic">
              "Music has always been Africa's most powerful export. Through Omorecords, we aim to 
              cultivate musical talents that speak to both our rich heritage and contemporary global 
              culture. Every artist has a unique story to tell, and we're here to amplify those voices."
            </blockquote>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in music production and artist management, Omoré Ojukwu 
              has worked with some of Africa's most celebrated artists. His vision for Omorecords 
              Entertainment is rooted in his belief that African music deserves a central place on the 
              world stage.
            </p>
            <p className="text-gray-600">
              Omoré continues to be actively involved in talent discovery and creative direction, 
              guiding the company with his commitment to musical excellence and cultural authenticity.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Omoré Ojukwu - Founder"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-100 rounded-full -z-10" />
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section id="what-we-do" bgColor="bg-gray-50">
        <SectionTitle subtitle="Comprehensive services for artists and music lovers">
          What We Do
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Artist Development" 
            description="We discover and nurture musical talent, providing the resources and guidance needed to develop successful careers." 
            icon={<Users className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Music Production" 
            description="Our state-of-the-art studios and experienced producers create world-class recordings that preserve artistic vision." 
            icon={<Headphones className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Event Management" 
            description="From intimate showcases to major festivals, we create unforgettable live music experiences." 
            icon={<Mic className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Digital Distribution" 
            description="We ensure our artists' music reaches global audiences through strategic digital distribution and promotion." 
            icon={<Globe className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Brand Partnerships" 
            description="We connect artists with brands that share their values for mutually beneficial collaborations." 
            icon={<Award className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Content Creation" 
            description="Our creative team produces compelling visual content that complements and enhances our artists' music." 
            icon={<Music className="w-8 h-8" />}
          />
        </div>
      </Section>

      {/* Call to Action */}
      <section className="relative py-16 bg-gradient-to-r from-primary-900 to-accent-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Omorecords Family</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're an artist looking for representation or a fan wanting to experience the 
            best of African music, we invite you to be part of our journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/contact"
              variant="accent"
              size="lg"
            >
              Contact Us
            </Button>
            <Button
              to="/artists"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Discover Our Artists
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutPage;