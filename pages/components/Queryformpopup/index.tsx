import React, { useState, useEffect } from "react";
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = document.getElementById('bootstrapForm') as HTMLFormElement | null;

      if (form) {
        const formData = new FormData(form);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSf7wJXszNWIXrORhXmDPJkOnRJEZVvjHYEm0xIdk-jJVYqleQ/formResponse', {
          method: 'POST',
          body: formData,
        })
          .then(() => {
            toast.success('Form Submitted. Thanks.'); // Display success toast
            resetForm(); // Reset the form after successful submission
            // Redirect the user to a custom thank-you page
            router.push('/thankyoupage');
          })
          .catch((error) => {
            console.error('Form submission error:', error);
          ; // Display error toast
            // Handle form submission error
          });
      }
    };

    const form = document.getElementById('bootstrapForm');
    form?.addEventListener('submit', handleSubmit);

    return () => {
      form?.removeEventListener('submit', handleSubmit);
    };
  }, [router]);

  const resetForm = () => {
    const form = document.getElementById('bootstrapForm') as HTMLFormElement | null;

    if (form) {
      form.reset(); // Reset the form fields to their initial state
    }
  };

  const [show, setshow] = useState(false);
  const [countdown, setCountdown] = useState<number>(3600); // Initial countdown value in seconds

  useEffect(() => {
    setTimeout(() => {
      setshow(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  

  return (
    <>
      <div
        id="modal"
        className={`${show ? 'flex' : 'hidden'} w-screen h-screen fixed z-50 mx-auto justify-center items-center px-4 md:px-10 py-20 z-10`}
      >
        <div className="bg-white px-10 border-[2px] py-10 rounded-md mt-16 justify-between pb-16 flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-8">
            <div className="flex justify-between">
              <div className="flex items-center">
                <h1 className="text-3xl text-red-500 font-bold">
                  <Typewriter
                    options={{
                      strings: ['Get a FREE TRIAL Whatsapp  us '],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </div>
              {/* <Image
                alt="Description of the image"
                className="cursor-pointer"
                onClick={() => {
                  setshow(!show);
                  setshow(false);
                }}
                src="/images/hero-outline.svg"
                width={22}
                height={22}
              /> */}
            </div>

            {/* Form section */}
            <br />
           <form
  id="bootstrapForm"
  action="https://docs.google.com/forms/d/e/1FAIpQLSf7wJXszNWIXrORhXmDPJkOnRJEZVvjHYEm0xIdk-jJVYqleQ/formResponse"
  target="_self"
  method="POST"
  className="rounded-lg shadow-lg p-4"
  style={{ background: 'linear-gradient(45deg, #FF5F6D, #FFC371)' }}
>
  <div className="w-full sm:w-1/2 px-2">
    <fieldset>
      <legend>
        <label htmlFor="1906255374">WhatsApp Number</label>
      </legend>
      <div className="form-group">
        <input
          id="1906255374"
          type="text"
          name="entry.1906255374"
          className="form-control"
        />
      </div>
    </fieldset>
  </div>
<br></br>
  <button
    className="btn btn-primary  border-2 border-blue-500 shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    type="submit"
    value="Submit"
    onClick={() => {
      setTimeout(() => {
        setshow(!show);
        setshow(false);
      }, 2000); // 3000 milliseconds = 3 seconds
      toast.success("Thank you for submitting the form! We'll get back to you soon.", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }}
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
            <h2 className="bold ">Google Reviews</h2>
            <iframe
              src="https://widgets.sociablekit.com/google-reviews/iframe/150151"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
