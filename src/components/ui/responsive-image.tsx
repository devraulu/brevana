import React from 'react';

interface ResponsiveImageProps {
  src: string; // Base name without size suffix (e.g., "aerial")
  alt: string;
  className?: string;
  priority?: boolean; // For above-the-fold images
  sizes?: string; // Custom sizes attribute
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 600px, (max-width: 1200px) 1000px, (max-width: 1600px) 1440px, 1920px'
}) => {
  const baseSrc = src.replace('/images/', '').replace('.webp', '');
  
  return (
    <picture>
      <source 
        media="(max-width: 768px)" 
        srcSet={`/images/${baseSrc}-600w.webp`} 
      />
      <source 
        media="(max-width: 1200px)" 
        srcSet={`/images/${baseSrc}-1000w.webp`} 
      />
      <source 
        media="(max-width: 1600px)" 
        srcSet={`/images/${baseSrc}-1440w.webp`} 
      />
      <img
        src={`/images/${baseSrc}-1920w.webp`}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
      />
    </picture>
  );
};

export default ResponsiveImage;