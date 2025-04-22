import { Calendar, MapPin, Clock } from 'lucide-react';
import Section, { SectionTitle } from '../ui/Section';
import Button from '../ui/Button';
import { events } from '../../data/events';

const FeaturedEvents = () => {
  // Filter to only upcoming and featured events
  const featuredEvents = events
    .filter(event => event.type === 'upcoming' && event.featured)
    .slice(0, 2);

  return (
    <Section id="featured-events">
      <SectionTitle 
        subtitle="Don't miss our upcoming concerts, festivals, and exclusive events"
      >
        Upcoming Events
      </SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button to="/events" variant="accent">
          View All Events
        </Button>
      </div>
    </Section>
  );
};

const EventCard = ({ event }: { event: any }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="card group overflow-hidden">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-primary-600" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-primary-600" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-primary-600" />
            <span>{event.venue}, {event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="flex justify-between items-center">
          <Button 
            to={`/events/${event.id}`} 
            variant="outline"
            size="sm"
          >
            Event Details
          </Button>
          
          <a 
            href={event.ticketLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
          >
            Buy Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;