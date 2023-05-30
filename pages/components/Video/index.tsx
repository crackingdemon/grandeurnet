import React from 'react';

const Video = () => {
  return (

    <>
    



<div className="flex  flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
        <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src="https://www.youtube.com/embed/FQWYjJ4GSsY"
        allowFullScreen
      ></iframe>
    </div>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">Satisfied Client of Grandeur Net</h1>
          <p className="my-4 text-center text-sm text-gray-500">Baby Product Brand</p>
          
        </div>


        <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
        <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src="https://www.youtube.com/embed/N5aZPiuRovo"
        allowFullScreen
      ></iframe>
    </div>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">Satisfied Client of Grandeur Net</h1>
          <p className="my-4 text-center text-sm text-gray-500">Salon , Gym , Spa</p>
          
        </div>

        <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
        <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src="https://www.youtube.com/embed/wGHPbn6_VJY"
        allowFullScreen
      ></iframe>
    </div>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">Satisfied Client of Grandeur Net</h1>
          <p className="my-4 text-center text-sm text-gray-500">Construction Company</p>
         
        </div>
      </div>
      
</>

  );
};

export default Video;
