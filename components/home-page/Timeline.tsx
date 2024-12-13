import Image from 'next/image';
import React from 'react';

const HompageTimeline = ({ data }: { data?: any }) => {
  return (
    <section className="pb-10 lg:pb-14">
      <div className="relative container">
        <div className="relative z-10 mb-8 md:flex md:items-start md:justify-between md:gap-16 lg:gap-20 lg:mb-10">
          <div className="flex items-center mb-[14px] md:mt-4">
            <div className="w-1.5 h-1.5 bg-alphaBlue rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-1" />
            <h2 className="text-lg text-alphaYellow leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] lg:leading-none">
              {data.title}
            </h2>
          </div>
          <div className="md:max-w-[761px]">
            <p className="homeTestimonials--description text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 pb-6 border-b border-appGray-100 mb-6 lg:text-base lg:leading-[1.4] lg:pb-8 lg:mb-8">
              {data.description}
            </p>
            {data.steps.map((step: any, index: number) => (
              <div
                key={index}
                className={`flex items-center gap-6 ${
                  index % 2 === 0 ? '' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2">
                  <Image
                    src={step.image[0]}
                    alt={step.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-appGray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-[50%] -left-[10%] w-[296px] h-[296px] rounded-full opacity-20 blur-[120px] bg-blend-overlay bg-[#FFBF4B] pointer-events-none max-md:hidden" />
        <div className="absolute top-[30%] left-0 w-[296px] h-[296px] rounded-full opacity-20 blur-[120px] bg-blend-overlay bg-[#3A437E] pointer-events-none max-md:hidden" />
      </div>
    </section>
  );
};

export default HompageTimeline;
