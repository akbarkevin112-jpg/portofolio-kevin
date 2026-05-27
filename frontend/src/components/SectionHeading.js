import React from 'react';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
