import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Menu",
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        section: "Category",
        link: ['Design', 'Mockup', 'View all', 'Log In']
    },
    {
        id: 3,
        section: "Pages",
        link: ['404', 'Instructions', 'License']
    },
    {
        id: 4,
        section: "Others",
        link: ['Styleguide', 'Changelog']
    }
]

const footer = () => {
    return (
        <div className="bg-black -mt-40" id="first-section">
        <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
      
            {/* COLUMN-1 */}
            <div className="col-span-4">
              <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">Grandeur Net</h3>
              <div className="flex gap-4">
                <div className="footer-icons">
                  <Link href="https://www.facebook.com/grandeurnetindia?mibextid=ZbWKwL">
                    <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href="https://twitter.com">
                    <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href="https://instagram.com/grandeur_net?igshid=Y2M0YTlkZGNmOQ==">
                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                  </Link>
                </div>
              </div>

<br></br>
              <div className="flex gap-6">
                <div className="footer-icons">
                  <Link href="https://www.facebook.com/grandeurnetindia?mibextid=ZbWKwL">
                    <Image src={'/images/footer/vec.svg'} alt="facebook" width={10} height={15} />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href="https://twitter.com">
                    <Image src={'/images/footer/twitter.svg'} alt="twitter" width={10} height={15} />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href="https://instagram.com/grandeur_net?igshid=Y2M0YTlkZGNmOQ==">
                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={10} height={15} />
                  </Link>
                </div>
              </div>



              <br></br>
              <div className="flex gap-6">
                <div className="footer-icons">
                  <Link href="https://www.facebook.com/grandeurnetindia?mibextid=ZbWKwL">
                    <Image src={'/images/footer/vec.svg'} alt="facebook" width={5} height={10} />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href="https://twitter.com">
                    <Image src={'/images/footer/twitter.svg'} alt="twitter" width={5} height={10} />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href="https://instagram.com/grandeur_net?igshid=Y2M0YTlkZGNmOQ==">
                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={5} height={10} />
                  </Link>
                </div>
              </div>


             
            </div>
      
            {/* COLUMN-2/3 */}
            <div className="col-span-8 lg:col-span-8">
              {/* Place your content for the other elements here */}
              <h3 className="text-center md:text-start text-offwhite text-lg">View Us on Google Maps</h3>
              <br></br><br></br>
              <div className="w-full">
                    <iframe
                      className="w-full h-600"
                      frameBorder="0"
                      scrolling="no"
                     
                      src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=grandeur%20net%20dehradun+(GrandeurNet)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
            </div>
      
          </div>
        </div>
      
        {/* All Rights Reserved */}
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
            <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
              <div>
                <h3 className="text-center md:text-start text-offwhite text-lg">@2023 - All Rights Reserved by Grandeur Net</h3>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link href="/">
                  <h3 className="text-offwhite pr-6">Privacy policy</h3>
                </Link>
                <Link href="/">
                  <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    )
}

export default footer;
