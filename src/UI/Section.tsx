import type React from 'react';

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

export default Section;
