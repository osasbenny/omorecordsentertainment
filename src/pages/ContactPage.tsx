import React, { useState } from 'react';
import Section, { SectionTitle } from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Phone, Mail, MapPin, Send, Disc3, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100 mb-8">
              Have a question, want to book an artist, or interested in collaborating? 
              Get in touch with the Omorecords team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <SectionTitle align="left">Get In Touch</SectionTitle>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you're an artist looking for representation, 
              a venue interested in booking our talent, or a fan with questions, our team is here to help.
            </p>
            
            <div className="space-y-6 mb-8">
              <ContactItem 
                icon={<Phone className="w-5 h-5" />}
                title="Phone"
                content="+234 123 456 7890"
              />
              <ContactItem 
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                content="info@omorecords.com"
              />
              <ContactItem 
                icon={<MapPin className="w-5 h-5" />}
                title="Office"
                content="123 Music Avenue, Lagos, Nigeria"
              />
              <ContactItem 
                icon={<Clock className="w-5 h-5" />}
                title="Business Hours"
                content="Monday - Friday: 9am - 5pm"
              />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Disc3 className="w-6 h-6 text-primary-600" />
                <h3 className="text-lg font-bold">Follow Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest news, releases, and events by following us on social media.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="#" label="Instagram" />
                <SocialLink href="#" label="Twitter" />
                <SocialLink href="#" label="Facebook" />
                <SocialLink href="#" label="YouTube" />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="Artist Booking">Artist Booking</option>
                      <option value="Artist Submission">Artist Submission</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="General Question">General Question</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={isSubmitting ? null : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section id="map" bgColor="bg-gray-50" className="p-0">
        <div className="aspect-video w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46311106408!2d3.1191195768174757!3d6.548055762344153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1696423593257!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Omorecords Entertainment Location"
            className="brightness-90"
          />
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section id="faq">
        <SectionTitle subtitle="Find answers to common questions about Omorecords Entertainment">
          Frequently Asked Questions
        </SectionTitle>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem 
            question="How can I book an artist for my event?"
            answer="To book an artist, fill out the contact form with details about your event, including date, venue, and budget. Our team will get back to you with availability and quotes."
          />
          <FaqItem 
            question="How do I submit my music to Omorecords?"
            answer="We're always looking for new talent. Submit your demo by selecting 'Artist Submission' in our contact form and including links to your music and social media profiles."
          />
          <FaqItem 
            question="Do you offer internships or job opportunities?"
            answer="Yes, we occasionally have openings for internships and full-time positions. Check our social media or contact us directly for current opportunities."
          />
          <FaqItem 
            question="Can I license music from your artists for my project?"
            answer="Yes, we handle licensing for commercial use, film, TV, and advertising. Contact us with details about your project for licensing information."
          />
          <FaqItem 
            question="Where can I purchase tickets for upcoming events?"
            answer="Tickets for our events are available through the individual event pages on our website or through our ticketing partners. Links are provided on each event page."
          />
        </div>
      </Section>
    </>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactItem = ({ icon, title, content }: ContactItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-primary-100 rounded-full text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
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
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary-600 hover:text-white transition-colors"
      aria-label={label}
    >
      {label === 'Instagram' && <Instagram />}
      {label === 'Twitter' && <Twitter />}
      {label === 'Facebook' && <Facebook />}
      {label === 'YouTube' && <Youtube />}
    </a>
  );
};

const Instagram = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Twitter = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const Facebook = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
  </svg>
);

const Youtube = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className={`w-full px-6 py-4 text-left font-medium text-lg transition-colors ${
          isOpen ? 'bg-primary-50 text-primary-800' : 'bg-white hover:bg-gray-50'
        } flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <div className="p-6 border-t border-gray-200 bg-white">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;