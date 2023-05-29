import React, { useState, useEffect,ChangeEvent, FormEvent } from "react";
import emailjs from 'emailjs-com';
import axios from 'axios';

interface FormData {
  name: string;
  whatsappNumber: string;
  businessNature: string;
  marketingBudget: string;
}

export default function Index() {
  const [animationText, setAnimationText] = useState("");
  const text = "Book a call with us";
  const animationDelay = 100; // Delay between each character (in milliseconds)
  const loopDelay = 2000; // Delay before restarting the animation (in milliseconds)



  //this chat 

  const [success, setSuccess] = useState(false);

  //endd 
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      if (wordIndex === text.split(" ").length) {
        clearTimeout(timeout);
        setTimeout(() => {
          setAnimationText("");
          wordIndex = 0;
          charIndex = 0;
          animateText();
        }, loopDelay);
        return;
      }

      const currentWord = text.split(" ")[wordIndex];
      const currentChar = currentWord[charIndex];
      setAnimationText((prevText) => prevText + currentChar);

      charIndex++;

      if (charIndex === currentWord.length) {
        charIndex = 0;
        wordIndex++;
        setAnimationText((prevText) => prevText + " ");
      }

      timeout = setTimeout(animateText, animationDelay);
    };

    animateText();

    return () => {
      clearTimeout(timeout);
    };
  }, []);


    const [show, setshow] = useState(false);
   
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [businessNature, setBusinessNature] = useState('');
    const [marketingBudget, setMarketingBudget] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        await emailjs.send('service_ygl26pw', 'template_emj3ulu', {
          name,
          email,
          whatsapp,
          businessNature,
          marketingBudget,
        }, '6y5s-UuRj3-DVCQ8C');

        setName('');
        setEmail('');
        setWhatsapp('');
        setBusinessNature('');
        setMarketingBudget('');
  
        setSuccess(true);

        // Optionally, you can display a success message or close the modal here
        console.log('Email sent successfully!');
      } catch (error) {
        // Handle the error as needed
        console.error('Error sending email:', error);
      }
    };
  
     
    useEffect(() => {
        setTimeout(() => {
            setshow(true);
        }, 1000);
    }, [])

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
        <>
        {success ? (
  <>
    <div className="text-green-500 text-center mt-4">
      Form submitted successfully!
    </div>
    <div className="text-center mt-4">
      Countdown: {formatCountdown(countdown)}
    </div>
  </>
) : (
  <>
    {/* Existing JSX code */}
  </>
)}
        <div
      id="modal"
      className={`${
        show ? 'flex' : 'hidden'
      } w-screen h-screen fixed z-50 mx-auto justify-center items-center px-4 md:px-10 py-20 z-10`}
    >
      <div className="bg-white px-10 border-[2px] py-10 rounded-md mt-16 justify-between pb-16 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-8">
          <div className="flex justify-between">
            <div className="flex items-center">
              <h1 className="text-3xl text-red-500 font-bold">
                {animationText}☎️
              </h1>
            </div>
            <img
              className="cursor-pointer"
             
              onClick={() => {
                setshow(!show);
                setshow(false);
                setSuccess(false);
              }}
              src="https://s2.svgbox.net/hero-outline.svg?ic=x&color=000"
              width="22"
              height="22"
            />
          </div>

          {/* Form section */}
          <br />
          <form
            onSubmit={handleSubmit}
            className="rounded-lg shadow-lg p-4"
            style={{ background: 'linear-gradient(45deg, #FF5F6D, #FFC371)' }}
          >
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2 pr-2">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 w-full rounded-md outline-none shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 w-full rounded-md outline-none shadow-md"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2 pr-2">
                <label htmlFor="whatsapp" className="block mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="border p-2 w-full rounded-md outline-none shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <label htmlFor="businessNature" className="block mb-1">
                  Business Nature
                </label>
                <input
                  type="text"
                  id="businessNature"
                  value={businessNature}
                  onChange={(e) => setBusinessNature(e.target.value)}
                  className="border p-2 w-full rounded-md outline-none shadow-md"
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="marketingBudget" className="block mb-1">
                Marketing Budget
              </label>
              <select
                id="marketingBudget"
                value={marketingBudget}
                onChange={(e) => setMarketingBudget(e.target.value)}
                className="border p-2 rounded-md outline-none shadow-md w-full"
              >
                <option value="">Select an option</option>
                <option value="below-50k">Below 50k</option>
                <option value="50k-1lk">50k - 1lk</option>
                <option value="1lk-3lk">1lk - 3lk</option>
                <option value="above-3lk">Above 3lk</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-lg"
            >
              Submit
            </button>
          </form>
          {/* Form section ends here */}

          <p className="my-8 text-sm font-bold leading-5 text-gray-600">
            Let us know about any queries you are facing and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
        <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/147745"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
        </div>
      </div>
    </div>

        </>
    );
}
