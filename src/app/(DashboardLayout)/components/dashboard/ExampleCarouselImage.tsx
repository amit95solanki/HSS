import React from "react";

interface ExampleCarouselImageProps {
  src: string;
  alt: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({
  src,
  alt,
}) => <img src={src} className="d-block w-100" alt={alt} />;

export default ExampleCarouselImage;
