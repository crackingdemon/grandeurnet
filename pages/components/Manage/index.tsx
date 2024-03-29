import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
const names = [
    {
        heading: "Startup",
        price: 0,
        user: 'per user, per month',
        button: "More Offers",
        profiles: 'we will',
        posts: ' customise plan',
        templates: "as per your",
        view: " business model ",
        support: 'for confirm',
        seo:"growth ",
        website:"",
        social:"",
        dedicated:"",
        category: 'yearly'
    },
    {
        heading: "Business",
        price: 0,
        user: 'per user, per month',
        button: "More Offers",
        profiles: 'we will',
        posts: ' customise plan',
        templates: "as per your",
        view: " business model ",
        support: 'for confirm',
        seo:"growth ",
        website:"",
        social:"",
        dedicated:"",
        category: 'yearly'
    },
    {
        heading: "Agency",
        price: 0,
        user: 'per user, per month',
        button: "More Offers",
        profiles: 'we will',
        posts: ' customise plan',
        templates: "as per your",
        view: " business model ",
        support: 'for confirm',
        seo:"growth ",
        website:"",
        social:"",
        dedicated:"",
        category: 'yearly'
    },
    {
        heading: "Agency",
        price: 55,
        user: 'per user, one month',
        button: "More Offers",
        profiles: 'Online Promotion',
        posts: 'Google page editing',
        templates: "Dedicated project manager",
        view: "9-5 customer support",
        support: '',
        seo:"SEO report of last 30days ",
        website:"",
        social:"",
        dedicated:"",
        category: 'monthly'
    },
    {
        heading: "Startup",
        price: 85,
        user: 'per user, one month',
        button: "More Offers",
        profiles: 'Online Promotion',
        posts: 'Google page editing',
        templates: "Dedicated project manager",
        view: "9-5 customer support",
        support: 'Creative content creation',
        seo:"SEO report of last 30days ",
        website:"",
        social:"",
        dedicated:"",
        category: 'monthly'
    },
    {
        heading: "Business",
        price: 105,
        user: 'per user, one month',
        button: "More Offers ",
        profiles: 'Online Promotion',
        posts: 'Google page editing',
        templates: "Dedicated project manager",
        view: "9-5 customer support",
        support: 'Creative content creation',
        seo:"SEO report of last 30days ",
        website:"Website - Traffic increase",
        social:"Social media marketing Ads ",
        dedicated:"Dedicated project manager",
        category: 'monthly'
    },
];

const Manage = () => {
  const [enabled, setEnabled] = useState(false); // Set enabled to false for monthly billing
  const [selectedCategory, setSelectedCategory] = useState('monthly');

  const toggleEnabled = () => {
    setEnabled(!enabled);
    setSelectedCategory(enabled ? 'monthly' : 'yearly');
  };

  const filteredData = names.filter(items => items.category === selectedCategory);

  return (
    <div id="services-section">
      <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
        <h3 className='text-center text-4xl sm:text-65xl font-black'>Handle all of your social media accounts in one location.</h3>

        <div className='md:flex md:justify-around mt-20'>
          <div className='flex gap-5 justify-center md:justify-start'>
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className='text-lg font-semibold'>7+ countries
</h4>
          </div>
          <div className='flex gap-5 justify-center md:justify-start'>
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className='text-lg font-semibold'>Won $2.5M in agency sales</h4>
          </div>
          <div className='flex gap-5 justify-center md:justify-start'>
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className='text-lg font-semibold'>90% + Client Satisfaction</h4>
          </div>
        </div>

        <div className='mt-6 relative'>
          <div className='dance-text mb-5'>get 1 month free</div>
          <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
          <div className='flex justify-center'>
            <h3 className='text-sm font-medium mr-5'>Billed Yearly</h3>
            <Switch
              checked={!enabled} // Inverted the checked value
              onChange={toggleEnabled}
              className={`${!enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only text-black">Enable notifications</span>
              <span className={`${!enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <h3 className='text-sm font-medium ml-5'>Trail Pack</h3>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14'>
          {filteredData.map((items, i) => (
            <div className='manageTabs text-center p-10' key={i}>
              <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
              <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>${items.price}</h2>
              <p className='text-sm font-medium text-bggrey mb-6'>{items.user}</p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdPy_G-Fzx6Lroa-uhIcPdMBtH9Q7MLVjd1CRzAMwWPZm0bjA/viewform" passHref  legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue hover:scale-125 bg-blue text-white border-2 border-blue rounded-full py-4 px-12 mb-6">
          {items.button}
        </a>
      </Link>
              {/* <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} /> */}
              <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.seo}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.website}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.social}</h3>
              <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.dedicated}</h3>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
