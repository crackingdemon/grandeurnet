import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MapContainer = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto pt-19 pb-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-2/3 */}
          <div className="col-span-12 lg:col-span-12">
            <br></br>
            <div className="w-full h-96 lg:h-600">
              <iframe
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=grandeur%20net%20dehradun+(GrandeurNet)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>

          {/* COLUMN-1 */}
        
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
