import Image from 'next/image';
import React from 'react';

const HompageFeatured = ({ data }: { data?: any }) => {
  return (
    <section className="pb-10 lg:pb-14">
      <div className="relative container">
        <div className="mb-8 md:flex md:items-start md:justify-between md:gap-16 lg:gap-20 lg:mb-10">
          <div className="flex items-center mb-[14px] md:mt-4">
            <div className="w-1.5 h-1.5 bg-appText rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-1" />
            <h2 className="text-lg leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] lg:leading-none">
              {data.title}
            </h2>
          </div>
          <div>
            <p className="homeAbout--description text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 md:max-w-[761px] lg:text-base lg:leading-[1.4]">
              {data.description}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((project: any, index: number) => (
            <li
              key={index}
              className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={project.image[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-medium mb-2 group-hover:text-appPrimary transition">
                  {project.title}
                </h3>
                <p className="text-sm text-appGray-300">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="absolute top-[50%] -left-[10%] w-[296px] h-[296px] rounded-full opacity-20 blur-[120px] bg-blend-overlay bg-[#FFBF4B] pointer-events-none max-md:hidden" />
        <div className="absolute top-[30%] left-0 w-[296px] h-[296px] rounded-full opacity-20 blur-[120px] bg-blend-overlay bg-[#3A437E] pointer-events-none max-md:hidden" />
      </div>
    </section>
  );
};

export default HompageFeatured;
