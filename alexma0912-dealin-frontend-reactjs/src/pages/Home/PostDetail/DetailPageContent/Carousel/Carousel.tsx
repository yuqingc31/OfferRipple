import { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { CarouselContainer, RefImageContainer } from './styledCarousel';
import Img from 'react-cool-img';

const Carousel = ({ image }: { image?: string[] }) => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      (mainRef.current as any).sync((thumbsRef.current as any).splide);
    }
  }, []);

  const mainOptions = {
    type: 'loop',
    perPage: 1,
    pagination: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    center: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
  };

  const thumbsOptions = {
    type: 'slide',
    rewind: true,
    perPage: 4,
    pagination: false,
    gap: '1rem',
    arrows: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    center: true,
    isNavigation: true,
    focus: 'center' as const,
  };

  return (
    <CarouselContainer>
      <RefImageContainer>
        <Splide options={mainOptions} ref={mainRef}>
          {image &&
            image.map((img, index) => (
              <SplideSlide key={index}>
                <Img
                  src={img}
                  alt="Product Image"
                  style={{
                    borderRadius: '10px',
                    width: '618px',
                    height: '530px',
                    objectFit: 'cover',
                  }}
                  placeholder={img}
                  debounce={1000}
                />
              </SplideSlide>
            ))}
        </Splide>
      </RefImageContainer>
      <Splide options={thumbsOptions} ref={thumbsRef}>
        {image &&
          image.map((img, index) => (
            <SplideSlide key={index}>
              <Img
                // src={img}
                src={img.replace('/raw/', '/image/') + '?w=400&h=400'}
                alt="Product Image"
                style={{ borderRadius: '10px' }}
                placeholder={img}
                debounce={1000}
              />
            </SplideSlide>
          ))}
      </Splide>
    </CarouselContainer>
  );
};

export default Carousel;
