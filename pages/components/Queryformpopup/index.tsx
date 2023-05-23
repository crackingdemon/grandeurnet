import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from 'axios';


export default function Index() {
    const [show, setshow] = useState(false);
    const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [businessNature, setBusinessNature] = useState('');
  const [marketingBudget, setMarketingBudget] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          whatsapp,
          businessNature,
          marketingBudget,
        }),
      });

      if (response.ok) {
        // Reset the form after successful submission
        setName('');
        setWhatsapp('');
        setBusinessNature('');
        setMarketingBudget('');

        // Close the modal or show a success message
      } else {
        // Handle error state or display an error message
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error(error);
      // Handle error state or display an error message
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
                                <h1 className="text-3xl font-light pr-2 leading-5 text-black">Book a Call with us !</h1>
                            </div>
                            <img className="cursor-pointer" onClick={
                                () => setshow(!show)
                            } src="https://s2.svgbox.net/hero-outline.svg?ic=x&color=000" width="22" height="22" />
                        </div>

                        <p className="my-8 text-sm font-bold leading-5 text-gray-600">Let Us Know about any of the query you are facing and we will bet back to you as soon as possible.</p>
                    </div>
                    <div>
                        <div className="md:flex items-center lg:mt-0 mt-4">
                            <div className="md:w-64">
                                <label className="text-sm leading-none text-gray-800" >Name</label>
                                {/* <input onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value
                                    })
                                } type="name" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                    placeholder="Name" /> */}
                            </div>
                            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label className="text-sm leading-none text-gray-800" id="lastName">Phone No</label>
                                {/* <input onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: e.target.value
                                    })
                                } type="number" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" placeholder="9717812319" /> */}
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="md:w-64">
                                <label className="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                {/* <input onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })} type="email" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" /> */}
                            </div>
                            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label className="text-sm leading-none text-gray-800" id="phone" >Query</label>
                                {/* <textarea onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        query: e.target.value
                                    })} type="textarea" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" placeholder="Query" /> */}
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="bg-black cursor-pointer text-white rounded-md px-5 mt-4 py-2">
                                Submit
                            </div>
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
