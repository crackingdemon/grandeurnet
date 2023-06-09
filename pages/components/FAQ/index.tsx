import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const FAQ = () => {
  return (
    <div id="faq-section" className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg">
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">Frequently asked <br /> questions.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
        <div className="mb-5">
          <div className="rounded-2xl bg-white py-8 px-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Best digital marketing company in Dehradun?</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-purple-500 ${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    One of the top digital marketing businesses in Dehradun is Grandeur Net Company. Grandeur Net Company provides a wide range of digital marketing services with its knowledge and commitment to assisting businesses in thriving online. Search engine optimisation (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, and other areas are areas where their team of qualified experts thrives. They provide clients with results-driven solutions that increase website traffic, improve online exposure, and produce high-quality leads by customising their methods to fit each one of their individual demands. Grandeur Net Company is dedicated to helping businesses succeed in the rapidly changing digital landscape through innovation, excellence, and success.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>







        <div className="mb-5">
          <div className="rounded-2xl bg-white py-8 px-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Search engine optimization company in dehradun?</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-purple-500 ${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  A well-known search engine optimisation (SEO) firm in Dehradun is Grandeur Net Company. Grandeur
Net Company specialises at increasing website exposure and generating organic traffic thanks to their
knowledge and customised techniques. Their team of knowledgeable experts concentrates on
performing in-depth keyword research, applying on-page and off-page SEO strategies, and optimising
websites for search engines. Grandeur Net Company works with companies to improve search rankings,
online exposure, and targeted website traffic because it recognises the value of appearing high up on
search engine results pages (SERPs). You can rely on Grandeur Net Company to optimise your website
and help it reach its maximum potential in Dehradun's digital environment.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>






        <div className="mb-5">
          <div className="rounded-2xl bg-white py-8 px-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>What is digital marketing?</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-purple-500 ${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    Digital marketing is the practice of promoting goods and services through online platforms like search engines, social media, email, and websites. Search engine optimisation (SEO), pay-per-click (PPC) advertising, content marketing, social media marketing, email marketing, and other techniques are all included in this strategy. The power of the internet and digital technology are harnessed by digital marketing to reach and interact with target audiences, drive website traffic, raise brand awareness, and produce leads and conversions. It gives companies the chance to communicate with customers in a practical and quantifiable way, maximizing their web presence and company expansion.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="mb-5">
          <div className="rounded-2xl bg-white py-8 px-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Why social media is important?</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-purple-500 ${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    Social networking is crucial for a number of reasons. First off, it gives companies a huge platform on which to interact and engage personally with their target market. Direct contact, connection development, and brand loyalty are all made possible. Second, social media networks contain billions of users who are active, giving businesses a huge audience and potential clientele. It provides a chance to raise brand awareness, enhance website traffic, and produce leads and conversions. Thirdly, social media gives companies the opportunity to collect insightful data and user input via analytics and monitoring tools, enabling data-driven decision-making. Last but not least, social media platforms are more affordable marketing channels than conventional ones, making them available to companies of all sizes. In general, social media is now a crucial component of contemporary marketing plans.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="mb-5">
          <div className="rounded-2xl bg-white py-8 px-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Digital marketing company in Dehradun?</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-purple-500 ${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    In search of the best digital marketing agency in Dehradun? Grandeur Net Company is your only option. Grandeur Net Company specializes in SEO, PPC advertising, social media marketing, and content marketing and offers specialized services to improve your online visibility. They deliver results-driven tactics to increase website traffic, improve exposure, and produce high-quality leads with a team of qualified specialists. Put your trust in Grandeur Net Company to advance your digital marketing initiatives and succeed in the cutthroat online environment.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="mb-5">
          <div className="rounded-2xl bg-white py-8 px-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Why website is important?</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-purple-500 ${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    Any business needs a website since it acts as its online identity and storefront. It offers a stage on which to present goods, services, and brand identity to an international audience. A professionally made and user-friendly website improves credibility, fosters confidence, and draws in potential clients. It serves as a focal point for engagement, communication, and information, providing visitors with convenience and accessibility. A website is necessary for creating an online presence, extending reach, and fostering business success in the digital age due to the growing reliance on the internet.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
