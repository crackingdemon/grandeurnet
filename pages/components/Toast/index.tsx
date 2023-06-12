import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const messages = [
  'Varun booked SEO services in faridabad',
  'Neha booked website service in jammu ',
  'Hritvik booked premium service from Canada  ',
  'Alen booked digital marketing services from Peru   ',
  'Sagar booked Social media marketing service in dehradun  ',
  'Ruchi booked application development services in Bihar   ',
  'Pathak ji booked Shopify website service from Siliguri',
  
  
];

const ToastMessage = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentMessage = messages[currentMessageIndex];
      toast(currentMessage);

      setTimeout(() => {
        toast.dismiss();
      }, 10000);

      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 40000);

    return () => {
      clearInterval(interval);
    };
  }, [currentMessageIndex]);

  return <ToastContainer />;
};

export default ToastMessage;
