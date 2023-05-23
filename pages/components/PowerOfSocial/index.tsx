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
<>
        <div id="aboutus-section bg-gradient-to-r from-blue-600 to-violet-600">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
               
                <h1 className='text-center text-4xl lg:text-65xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text '>The power of social media marketing?
</h1>
<main >

<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
  
</div>

<div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
  <p className="pb-6">Social media marketing has completely changed the game for companies of all kinds. It has changed how businesses interact with their target market and produced previously unheard-of possibilities for engagement, reach, and brand development.
.</p>

  <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
    thoroughly
    partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
    attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
    expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
    uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
    newspaper in advantage frankness to concluded unwilling.</p>

  <p className="pb-6">First of all, social media sites have a sizable user base that enables businesses to connect with millions of potential clients. Brands can successfully engage with their target audience through properly designed content and targeted advertising, generating traffic for their websites or physical stores.
</p>

  <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
  Second, social media encourages participation and communication. Users can "like," "share," "comment," and even "become brand advocates," expanding the audience for a business' message. The social proof and credibility that this user-generated material provides encourage others to interact with the brand.

  </div>

  <p className="pb-6">Additionally, social media enables exact targeting. Businesses may pinpoint and target particular demographics, interests, and behaviors through data analytics and user insights. By ensuring that the brand's message reaches the appropriate audience, this targeting capacity improves the likelihood of conversion and client acquisition.
</p>
<p className="pb-6">Social media platforms also provide useful insights into market dynamics, consumer trends, and consumer preferences. These insights may be used by businesses to improve their marketing plans, make their campaigns more effective, and stay one step ahead of the competition.

</p>

  <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Building a strong social media presence?
</h2>

  <p className="pb-6">In today's digital environment, developing a strong social media presence is essential for businesses and  Gandeur nNetcompany is focusing on this with the Gandeur team. Grandeur net company is following these crucial steps:
Such as Establishing your objectives and target market first. Know what you want to accomplish with social media and pinpoint your ideal clientele.
Create material that is consistent and appealing next. Create a content plan that is compatible with your brand and appealing to your target audience. 
To keep your material interesting and shareable, use a variety of text, pictures, videos, and other interactive formats.
Building a strong social media presence is crucial for businesses in the modern digital landscape.
</p>

  <p className="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
    Hundred no
    prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
    ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
    connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
    ask expense are compact. New all paid few hard pure she.</p>

  <p className="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
    tastes really
    so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
    elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
    in cold no less been sent hard hill.</p>

  <p className="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
    make two real
    miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
    to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
    without me.</p>

</div>
</main>
            </div>
        </div>
        </>

    )
}

export default Aboutus;