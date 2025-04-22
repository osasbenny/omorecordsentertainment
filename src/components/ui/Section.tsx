import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
}

const Section = ({ 
  children, 
  className = '', 
  id, 
  bgColor = 'bg-white' 
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({ 
  children, 
  subtitle, 
  align = 'center',
  className = '' 
}: { 
  children: React.ReactNode; 
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      <h2 className="mb-4 text-3xl md:text-4xl font-bold relative inline-block">
        {children}
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent-500 mt-4"></span>
      </h2>
      {subtitle && <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default Section;