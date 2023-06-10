import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import logo from "../../../public/logo.png"
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import Navbar from './components/Navbar/index';
import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import Footer from './components/Footer/index';
import Queryformpopup from './components/Queryformpopup/index';
import Video from './components/Video/index'
import Project from './components/Projects/index'
import Brand from './components/Brands/index'

const Home = () => {

   
  return (
    <>
    <div className="overflow-x-hidden">
 
      <Head>
        <title>Grandeur Net - Marketing agency with proven strategies of business growth</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Queryformpopup />

        <Navbar />

        <Banner />
        <Digital />

        <div id="project-section" className="flex justify-center items-center">
      <h1 className="text-6xl lg:text-40xl font-bold text-blue">
        <Typewriter
          options={{
            strings: [' Lets take some oxygen to move ahead '],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div><br></br>
        <div className="flex flex-col items-center w-2/3 mx-auto">
      <div className="relative h-0 overflow-hidden max-w-full w-full rounded-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/hv4o7DAwsSs"
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full shadow-lg"
        ></iframe>
      </div>
    </div>
        <Beliefs />
        <Project/>
        <Brand/>

        {/* <Aboutus /> */}
        {/* <Dedicated /> */}
        {/* <Wework /> */}
        <Ourteam />
        <Featured />
        
        <Manage />
        <FAQ />
        
        <Testimonials />
        
        <Video/>
        {/* <Articles /> */}
        <Joinus />
 
        <Insta />
        
        <Footer />
        <footer className="bg-gray-200 py-4 px-8 flex justify-between items-center">
        <div className="">
                <Link href="https://linktr.ee/grandeurnet" legacyBehavior>
                  <Image src="/images/linkrr.png" alt="barcode" width={150} height={200} layout="fixed" className="static"/>
                </Link>
              </div>
      <div className="flex items-center">
        <p className="mr-4"></p>
        {/* <img src="/images/linkrr.png"  alt="Logo" width={250} height={160}  /> */}
        <img src="/images/logo.png" alt="Logo" width={250} height={160}  />
      </div>
      
      <div className="flex items-center">
        <a href="https://www.grandeurnet.com/privacy.html" target="_blank" className="mr-4">Privacy Policies</a>
        <a href="/https://www.grandeurnet.com/terms.html" target="_blank" className="mr-4">Terms</a>
      </div>
    </footer>
      </main>
      </div>
    </>
  )
}

export default Home;
