import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState,useEffect } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';


const Contactusform = () => {

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










    let [isOpen, setIsOpen] = useState(false)

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleClick = () => {
        alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
        setIsOpen(false)
    }

    // FORM SUBMIT
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // handle form submission
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                {/* <div className='lg:hidden'>
                    <button type="button" className='bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded' onClick={openModal}>
                        Contact Us
                    </button>
                </div> */}
                <div className='hidden lg:block'>
                    <button type="button" className='justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white' onClick={openModal}>
                        Contact Us
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

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
    className="btn btn-primary  border-2 border-blue-500 shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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


                                    {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                                    </div> */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Contactusform;

