import Slider from 'react-slick';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

interface DataType {
  heading: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    heading: 'Work 1.',
    imgSrc: '/images/brands/b1.jpeg',
  },
  {
    heading: 'work2.',
    imgSrc: '/images/brands/b2.jpeg',
  },
  {
    heading: 'work 3.',
    imgSrc: '/images/brands/b3.jpeg',
  },
  {
    heading: 'work 5.',
    imgSrc: '/images/brands/b4.jpeg',
  },
  {
    heading: 'work 5.',
    imgSrc: '/images/brands/b5littlestanford.jpeg',
  },
  {
    heading: 'work 5.',
    imgSrc: '/images/brands/feat2.jpg',
  },
  {
    heading: 'work 5.',
    imgSrc: '/images/brands/feat2.jpg',
  },
];
const postData2: DataType[] = [
    {
      heading: 'Work 1.',
      imgSrc: '/images/brands/b1.jpeg',
    },
    {
      heading: 'work2.',
      imgSrc: '/images/brands/b2.jpeg',
    },
    {
      heading: 'work 3.',
      imgSrc: '/images/brands/b3.jpeg',
    },
    {
      heading: 'work 5.',
      imgSrc: '/images/brands/b4.jpeg',
    },
    {
        heading: 'Work 1.',
        imgSrc: '/images/brands/b5littlestanford.jpeg',
      },
      {
        heading: 'work2.',
        imgSrc: '/images/brands/b6briofit.jpeg',
      },
      {
        heading: 'work 3.',
        imgSrc: '/images/brands/b7florence.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b8shiva.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b9bansal.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b10dentfit.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b11hollywood.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b12delhi.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b13doons.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b14maaganga.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b14property.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b16saisgree.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b17khandelwal.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b18khandelwalce.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b19rajdhani.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b20gym.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b21sheeba.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b22apolo.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b23oomph.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b24rawgym.jpeg',
      },
      {
        heading: 'work 5.',
        imgSrc: '/images/brands/b25aarambh.jpeg',
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
    slidesToShow: 4,
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



  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
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
    <>
      
       

        {/* <Slider {...settings} ref={sliderRef}>
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
        </Slider> */}

<div className="flex justify-center items-center">
      <h1 className="text-6xl lg:text-40xl font-bold text-blue">
        <Typewriter
          options={{
            strings: ['Brands🏆 ','We Worked With'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
        <Slider {...settings2} ref={sliderRef}>
          {postData2.map((items, i) => (
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
        



        
      
      </>
  );
};

export default OurWorkCarousel;
