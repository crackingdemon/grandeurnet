import React, { useState, useEffect } from "react";
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

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
            alert('Form Submitted. Thanks.');
            resetForm(); // Reset the form after successful submission
            // Redirect the user to a custom thank-you page
            router.push('/thankyoupage');
          })
          .catch((error) => {
            console.error('Form submission error:', error);
            // Handle form submission error
          });
      }
    };

    const form = document.getElementById('bootstrapForm');
    form?.addEventListener('submit', handleSubmit);

    return () => {
      form?.removeEventListener('submit', handleSubmit);
    };
  }, []);

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

  const formatCountdown = (countdown: number): string => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

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
                <h1 className="text-3xl text-red-500 font-bold"><Typewriter
  options={{
    strings: ['Book a Call With Us ☎️  '],
    autoStart: true,
    loop: true,
  }}
/></h1>
              </div>
              <img
                className="cursor-pointer"
                onClick={() => {
                  setshow(!show);
                  setshow(false);
                }}
                src="https://s2.svgbox.net/hero-outline.svg?ic=x&color=000"
                width="22"
                height="22"
              />
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
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2">
      <fieldset>
        <legend>
          <label htmlFor="183274325">Name</label>
        </legend>
        <div className="form-group">
          <input
            id="183274325"
            type="text"
            name="entry.183274325"
            className="form-control"
          />
        </div>
      </fieldset>
    </div>
    <div className="w-full sm:w-1/2 px-2">
      <fieldset>
        <legend>
          <label htmlFor="608973755">Email</label>
        </legend>
        <div className="form-group">
          <input
            id="608973755"
            type="text"
            name="entry.608973755"
            className="form-control"
          />
        </div>
      </fieldset>
    </div>
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
    <div className="w-full sm:w-1/2 px-2">
      <fieldset>
        <legend>
          <label htmlFor="661978007">Business Nature</label>
        </legend>
        <div className="form-group">
          <input
            id="661978007"
            type="text"
            name="entry.661978007"
            className="form-control"
          />
        </div>
      </fieldset>
    </div>
  </div>

  <fieldset>
    <legend>Marketing Budget?</legend>
    <div className="form-group">
      <div className="radio">
        <label>
          <input type="radio" name="entry.536277257" value="Below 50k" />
          Below 50k
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="entry.536277257" value="50k to 1lk" />
          50k to 1lk
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="entry.536277257" value="1lk to 3lk" />
          1lk to 3lk
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="entry.536277257" value="above 3lk" />
          above 3lk
        </label>
      </div>
    </div>
  </fieldset>

  <input type="hidden" name="fvv" value="1" />
  <input type="hidden" name="fbzx" value="-4203744167857321587" />
  <input type="hidden" name="pageHistory" value="0" />

  <button
    className="btn btn-primary"
    type="submit"
    value="Submit"
    onClick={() => {
      setTimeout(() => {
        setshow(!show);
        setshow(false);
      }, 3000); // 3000 milliseconds = 3 seconds
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
