import React, { useState } from 'react';
import Section, { SectionTitle } from '../components/ui/Section';
import Button from '../components/ui/Button';
import { events } from '../data/events';
import { Calendar, MapPin, Clock, Filter, Search } from 'lucide-react';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [activeLocation, setActiveLocation] = useState('All');
  
  // Extract unique locations for filtering
  const locations = ['All', ...new Set(events.map(event => event.location.split(',')[0].trim()))];
  
  // Filter events based on search, tab, and location filter
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = event.type === activeTab;
    const matchesLocation = activeLocation === 'All' || 
                            event.location.split(',')[0].trim() === activeLocation;
    
    return matchesSearch && matchesTab && matchesLocation;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Events</h1>
            <p className="text-xl text-primary-100 mb-8">
              Experience the energy and excitement of live performances by Omorecords artists. 
              From intimate showcases to major festivals, we bring authentic African music to audiences worldwide.
            </p>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <Section id="events">
        {/* Tabs */}
        <div className="flex mb-8 border-b">
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === 'upcoming'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === 'past'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" />
            <span className="text-gray-600 mr-2">Filter by location:</span>
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <button
                  key={location}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeLocation === location
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveLocation(location)}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setActiveLocation('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>
      
      {/* Host an Event */}
      <Section id="host-event" bgColor="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Host an Event with Our Artists</h2>
          <p className="text-lg text-gray-300 mb-8">
            Looking to bring authentic African music to your venue or event? Our artists are available 
            for bookings for concerts, festivals, corporate events, and private functions.
          </p>
          <Button
            to="/contact"
            variant="accent"
            size="lg"
          >
            Inquire About Bookings
          </Button>
        </div>
      </Section>
    </>
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
    <div className="card group overflow-hidden flex flex-col md:flex-row">
      <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {event.type === 'upcoming' && (
          <div className="absolute top-4 left-4 bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded">
            Upcoming
          </div>
        )}
      </div>
      
      <div className="p-6 md:w-3/5">
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
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {event.performers.slice(0, 3).map((performer: string, index: number) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {performer}
            </span>
          ))}
          {event.performers.length > 3 && (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              +{event.performers.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <Button 
            to={`/events/${event.id}`} 
            variant="outline"
            size="sm"
          >
            Event Details
          </Button>
          
          {event.type === 'upcoming' && (
            <a 
              href={event.ticketLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
            >
              Buy Tickets
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;