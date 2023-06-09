import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MapContainer = () => {
  return (
    <div className="bg-black">
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
          <div className="col-span-4">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">Grandeur Net</h3>
            <div className="flex justify-center sm:justify-start gap-2">
              <div className="">
                <Link href="https://linktr.ee/grandeurnet">
                  <Image src="/images/barcode.jpeg" alt="barcode" width={150} height={200} layout="fixed" className="static" />
                </Link>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
