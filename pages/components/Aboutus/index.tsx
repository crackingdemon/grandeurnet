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
        paragraph: 'We are an expert creative agency dedicated for supporting businesses with modern proven web development, graphic design, branding and marketing solutions.',
        link: 'Learn more'
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'We believe in consistent learning to keep our consistent high level. We provide various technical services to our clients and our effort is to always give the best products with the latest technologies.',
        link: 'Learn more'
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'We work with a lot of different clients on a variety of different projects, but we all have one thing in common: We love our clients.',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

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
                            <Link href="#" className='text-lg font-semibold text-white hover-underline'>{item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;