import Section from '../ui/Section';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <Section 
      bgColor="bg-primary-900"
      className="text-white text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Book Our Artists?</h2>
        <p className="text-lg text-primary-200 mb-8">
          Let Omorecords bring authentic African music and entertainment to your next event.
          Our artists deliver unforgettable performances for audiences of all sizes.
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
  );
};

export default CallToAction;