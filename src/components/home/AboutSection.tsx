import Section, { SectionTitle } from '../ui/Section';
import Button from '../ui/Button';

const AboutSection = () => {
  return (
    <Section id="about-preview" bgColor="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.pexels.com/photos/3400353/pexels-photo-3400353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Studio session"
              className="w-full h-auto"
            />
          </div>
          <div 
            className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 rounded-full z-0" 
            aria-hidden="true"
          />
          <div 
            className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-full z-0" 
            aria-hidden="true"
          />
        </div>
        
        <div className="order-1 md:order-2">
          <SectionTitle align="left">
            About Omorecords
          </SectionTitle>
          
          <p className="text-gray-600 mb-6">
            Founded in 2015, Omorecords Entertainment has become a leading force in the African music industry. 
            We specialize in discovering and nurturing exceptional talent from across the continent, bringing authentic 
            African sounds to the global stage.
          </p>
          
          <p className="text-gray-600 mb-6">
            Our vision is to celebrate and promote African musical heritage while embracing modern production techniques 
            and global influences. We're committed to creating opportunities for artists to showcase their talents and 
            connect with audiences worldwide.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-4xl font-bold text-primary-600 mb-2">15+</h4>
              <p className="text-gray-600">Signed Artists</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary-600 mb-2">50+</h4>
              <p className="text-gray-600">Music Releases</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary-600 mb-2">100+</h4>
              <p className="text-gray-600">Events Hosted</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary-600 mb-2">10M+</h4>
              <p className="text-gray-600">Global Streams</p>
            </div>
          </div>
          
          <Button to="/about" variant="primary">
            Learn More About Us
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;