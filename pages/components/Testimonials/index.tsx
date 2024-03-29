import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Sakshi Sharma",
        profession: '',
        comment: '“Thank you so much for making me look good! I have been receiving compliments about the website from everyone I speak with.',
        imgSrc: '/images/testimonial/neha.jpeg',
    },

    


    {
        name: "Nancy ",
        profession: '',
        comment: 'I was looking for a designer who could help me take my business to the next level.They did just that! They took my vision and ran with it, creating a beautiful logo, that perfectly represents my company',
        imgSrc: '/images/testimonial/pooja.jpeg',
    },
    {
        name: "Arjun",
        profession: '',
        comment: 'Working with Grandeur Net team for my website SEO has been a game-changer. Their team of experts took the time to understand my requirements and developed a customized digital marketing strategy that aligned perfectly with my website.  I am getting good results on the suggested keywords',
        imgSrc: '/images/testimonial/tariun.jpeg',
    },
    {
        name: "Naresh Gautam",
        profession: '',
        comment: 'I am so gald i choose them for my website. They made the process easy and were so helpful in guiding me through the design process.The result was exactly what i wanted !',
        imgSrc: '/images/testimonial/sahil.jpeg',
    },
    {
        name: "Luci",
        profession: '',
        comment: 'Grandeurnet Digital Agency exceeded my expectations! Their expertise and professionalism delivered outstanding results for my business. Highly recommended!',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Tarun",
        profession: '',
        comment: 'Best website developer in Dehradun.My website after design is much more effective. I will definitely recommend you further to my friends and family.',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-48 my-4">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
