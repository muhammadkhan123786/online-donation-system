import type React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-8 border-blue-500 border-t-transparent animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
