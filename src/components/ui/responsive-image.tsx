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
  sizes = '(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1920px'
}) => {
  const baseSrc = src.replace('/images/', '').replace('.webp', '');
  
  return (
    <picture>
      <source 
        media="(max-width: 640px)" 
        srcSet={`/images/${baseSrc}-400w.webp`} 
      />
      <source 
        media="(max-width: 1024px)" 
        srcSet={`/images/${baseSrc}-800w.webp`} 
      />
      <source 
        media="(max-width: 1440px)" 
        srcSet={`/images/${baseSrc}-1200w.webp`} 
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