import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'


interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Grandeur Net is a well-known graphic design and website design firm with experience in building beautiful and intuitive online experiences. Our creative team creates fascinating websites and powerful graphics that inspire and engage. Make your brand stand out by relying on GrandeNet for all of your digital design requirements.',
        link: 'Learn more'
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'GrandeNet, a well-known website design and graphic design firm, provides a wide range of services to satisfy your needs for digital design. Our talented staff specialises in building appealing, mobile-friendly websites that improve your online presence. In addition, we offer excellent graphic design services for promotional materials, branding, and logo creation.',
        link: 'Learn more'
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Our outstanding work in website design, graphic design, SEO, and SMM is something we are proud of at GrandeNet. Our gifted team of web designers and developers creates visually attractive websites that are user-friendly and search engine-optimized. Additionally, we provide excellent graphic design services to produce eye-catching graphics for your brand. ',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (
<>
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-navyblue rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl'>
                            <h4 className='text-4xl font-semibold  text-white mb-5'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold text-white hover-underline' legacyBehavior>{item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Aboutus;