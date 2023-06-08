import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';
import Image from "next/image";
import logo from "../../../public/logo.png"


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#aboutus-section', current: false },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
    { name: 'Blog', href: '#blog-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [countdown, setCountdown] = useState<number>(3600); // Initial countdown value in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear interval when component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Format the countdown to display hours, minutes, and seconds
  const formatCountdown = (countdown: number): string => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

    return (
        <Disclosure as="nav" className="navbar">
            <>
           
            {/* <div className="bg-gray-200 py-2 text-center">
      <h1 className="text-2xl font-semibold">
        Hurry up! Sale ends in{' '}
        <span className="text-red-500">{formatCountdown(countdown)}</span>
      </h1>
    </div> */}
  

<div className="bg-primary text-black flex items-center justify-center">
  <p className="uppercase text-xs tracking-widest text-center px-4 py-3 text-white	">
Book a call ☎️ back with our expert || <b>Offer ending in ⏰</b> <span className="text-white	">{formatCountdown(countdown)}</span>
  </p>
</div>
                <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                        
                        <Image src={logo} alt="logo" width={250} height={160} />
                        
                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                   
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                {/* <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div> */}

<div className="sm:mr-3 w-full">
  <Link href="#project-section" passHref legacyBehavior>
    <a rel="noopener noreferrer">
      <button type="submit" className="joinButton w-full text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
        Our Projects
      </button>
    </a>
  </Link>
</div>


                            </div>
                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
                            <Contactusform />
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
