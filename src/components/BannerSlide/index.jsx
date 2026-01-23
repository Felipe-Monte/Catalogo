import { useEffect, useState } from 'react';
import { Container, Dots, Slide, Slides, Tag } from './styles';

import { default as banner1, default as banner3 } from '/sandalia1.jpeg';
import banner2 from '/sandalia2.jpeg';

const images = [banner1, banner2, banner3];

export function BannerSlide() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Tag>Harabelle</Tag>

      <Slides current={current}>
        {images.map((img, index) => (
          <Slide key={index}>
            <img src={img} alt={`Banner ${index + 1}`} />
          </Slide>
        ))}
      </Slides>

      <Dots>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Dots>
    </Container>
  );
}
