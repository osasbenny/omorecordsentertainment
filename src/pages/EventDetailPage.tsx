import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section, { SectionTitle } from '../components/ui/Section';
import Button from '../components/ui/Button';
import { events } from '../data/events';
import { Calendar, Clock, MapPin, Users, Share2, ChevronLeft } from 'lucide-react';

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null);
  
  useEffect(() => {
    const foundEvent = events.find(e => e.id === id);
    setEvent(foundEvent);
  }, [id]);
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Event Not Found</h2>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Link to="/events" className="text-primary-600 hover:text-primary-800 font-medium">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-primary-800/50" />
        <div className="container relative">
          <Link to="/events" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to All Events
          </Link>
          <h1 className="mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center text-white/90">
              <Calendar className="w-5 h-5 mr-2 text-accent-400" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-white/90">
              <Clock className="w-5 h-5 mr-2 text-accent-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-white/90">
              <MapPin className="w-5 h-5 mr-2 text-accent-400" />
              <span>{event.venue}, {event.location}</span>
            </div>
          </div>
          
          {event.type === 'upcoming' && (
            <a 
              href={event.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-md transition-colors"
            >
              Get Tickets
            </a>
          )}
        </div>
      </section>
      
      {/* Event Details */}
      <Section id="event-details">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">About This Event</h2>
            <div className="mb-8">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-auto rounded-lg mb-6"
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => {
                    navigator.share({
                      title: event.title,
                      text: event.description,
                      url: window.location.href,
                    }).catch(() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    });
                  }}
                >
                  <Share2 className="w-4 h-4" />
                  Share Event
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary-600" />
                Performers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.performers.map((performer: string, index: number) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Music />
                    </div>
                    <div>
                      <h4 className="font-medium">{performer}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Event Information</h3>
              <div className="space-y-4 mb-6">
                <EventInfoItem 
                  icon={<Calendar className="w-5 h-5 text-primary-600" />}
                  label="Date"
                  value={formatDate(event.date)}
                />
                <EventInfoItem 
                  icon={<Clock className="w-5 h-5 text-primary-600" />}
                  label="Time"
                  value={event.time}
                />
                <EventInfoItem 
                  icon={<MapPin className="w-5 h-5 text-primary-600" />}
                  label="Venue"
                  value={`${event.venue}, ${event.location}`}
                />
                <EventInfoItem 
                  icon={<Users className="w-5 h-5 text-primary-600" />}
                  label="Performers"
                  value={`${event.performers.length} artists`}
                />
              </div>
              
              {event.type === 'upcoming' && (
                <div>
                  <a 
                    href={event.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-md transition-colors mb-3"
                  >
                    Get Tickets
                  </a>
                  <Link 
                    to="/contact"
                    className="w-full block text-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md transition-colors hover:bg-gray-50"
                  >
                    Contact for Group Rates
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Venue Map */}
      <Section id="venue-map" bgColor="bg-gray-50" className="p-0">
        <SectionTitle>Event Location</SectionTitle>
        <div className="aspect-video w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46311106408!2d3.1191195768174757!3d6.548055762344153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1696423593257!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`${event.venue} Location Map`}
          />
        </div>
      </Section>
      
      {/* Call to Action */}
      {event.type === 'upcoming' && (
        <Section id="cta" bgColor="bg-primary-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Miss This Event</h2>
            <p className="text-lg text-primary-200 mb-8">
              Secure your tickets now for an unforgettable experience with Omorecords artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={event.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-md transition-colors"
              >
                Get Tickets
              </a>
              <Button
                to="/events"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Other Events
              </Button>
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

interface EventInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const EventInfoItem = ({ icon, label, value }: EventInfoItemProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

const Music = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

export default EventDetailPage;