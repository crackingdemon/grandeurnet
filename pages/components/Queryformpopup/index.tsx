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
  const text = 'Book a Call with us !';
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplayedText('');
            currentIndex = 0;
            startTyping();
          }, 2000); // Delay before restarting the animation
        }
      }, 100); // Adjust the typing speed by changing the interval duration
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
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
        
        <div id="modal" className={`${show ? "flex" : "hidden"} w-screen h-screen fixed z-50 mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <div className="bg-white px-10 border-[2px] py-10 rounded-md mt-16 justify-between pb-16">

                    <div className="">
                        <div className="flex justify-between ">
                            <div className="flex items-center">
                               <h1 className="animate-typewriter">
        {displayedText}
        <span className="animate-blink">|</span>
      </h1>
                            </div>
                            <img className="cursor-pointer" onClick={
                                () => setshow(!show)
                            } src="https://s2.svgbox.net/hero-outline.svg?ic=x&color=000" width="22" height="22" />
                        </div>



{/* this section  */}

<br></br><br></br>
{/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input
            type="text"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="businessNature">Business Nature:</label>
          <input
            type="text"
            id="businessNature"
            name="businessNature"
            value={formData.businessNature}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="marketingBudget">Marketing Budget:</label>
          <select
            id="marketingBudget"
            name="marketingBudget"
            value={formData.marketingBudget}
            onChange={handleChangeSelect}
            required
          >
            <option value="">Select</option>
            <option value="below-50k">Below 50k</option>
            <option value="in-between-50k-1lk">In-between 50k - 1lk</option>
            <option value="in-between-1lk-3lk">In-between 1lk - 3lk</option>
            <option value="above-3lk">Above 3lk</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form> */}
 <form onSubmit={handleSubmit} className="rounded-lg shadow-lg p-4" style={{ background: 'linear-gradient(45deg, #FF5F6D, #FFC371)' }}>
  <div className="flex flex-wrap mb-2">
    <div className="w-1/2 pr-2">
      <label htmlFor="name" className="block mb-1">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded-md outline-none shadow-md"
      />
    </div>
    <div className="w-1/2 pl-2">
      <label htmlFor="email" className="block mb-1">Email</label>
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
    <div className="w-1/2 pr-2">
      <label htmlFor="whatsapp" className="block mb-1">WhatsApp Number</label>
      <input
        type="text"
        id="whatsapp"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="border p-2 w-full rounded-md outline-none shadow-md"
      />
    </div>
    <div className="w-1/2 pl-2">
      <label htmlFor="businessNature" className="block mb-1">Business Nature</label>
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
    <label htmlFor="marketingBudget" className="block mb-1">Marketing Budget</label>
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
  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-lg">
    Submit
  </button>
</form>













{/* 
thi section ends here */}
                        <p className="my-8 text-sm font-bold leading-5 text-gray-600">Let Us Know about any of the query you are facing and we will bet back to you as soon as possible.</p>
                    </div>
                    <div>
                        <div className="md:flex items-center lg:mt-0 mt-4">
                            
                            
                        </div>
                        
                        <div className="md:flex items-center mt-8">
                            {/* <div className="bg-black cursor-pointer text-white rounded-md px-5 mt-4 py-2">
                                Submit
                            </div> */}
                            <div></div>
                            
                        </div>
                        <br></br>
                        <div className="bg-primary text-black flex items-center justify-center">
  <p className="uppercase text-xs tracking-widest text-center px-4 py-3 text-white	">
Book a call ☎️ back with our expert || <b>Offer ending in ⏰</b> <span className="text-white	">{formatCountdown(countdown)}</span>
  </p>
</div>
                    </div>


                </div>
            </div>
        </>
    );
}
