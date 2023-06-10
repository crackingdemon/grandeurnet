import Slider from 'react-slick';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface DataType {
  heading: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    heading: 'CRC Derma',
    imgSrc: '/images/project/crcderma.jpeg',
  },
  {
    heading: 'Hollywood SPA.',
    imgSrc: '/images/project/hollywoodspa.jpeg',
  },
  {
    heading: 'Florence',
    imgSrc: '/images/project/florence.jpeg',
  },
  {
    heading: 'Mandoli',
    imgSrc: '/images/project/mandoli.jpeg',
  },
];

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  );
}

const OurWorkCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const autoScroll = setInterval(() => {
      slider?.slickNext();
    }, 2000); // Adjust the interval time to make it faster or slower

    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 500,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-bgblue py-20 marginFeature bg-featured">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center pt-48 pb-10 md:pt-96">
          <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Important pieces that have been displayed</h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">
            web design for a website's brand.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-48 my-2">
            The best web services for making a brand
          </h3>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-transparent m-3 pb-12 my-10 rounded-3xl">
                <Image src={items.imgSrc} alt="gaby" width={636} height={620} className="rounded-2xl" />
                <div className="w-345">
                  <h4 className="sm:text-5xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white">
                    {items.heading}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurWorkCarousel;
