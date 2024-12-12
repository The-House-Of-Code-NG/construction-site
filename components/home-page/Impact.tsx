import Image from 'next/image';
import React from 'react';

const HompageImpact = ({ data }: { data?: any }) => {
  return (
    <section className="pb-10 lg:pb-14">
        <div className="container">
            <div className="mb-5 md:flex md:items-start md:justify-between md:gap-16 md:mb-10 lg:gap-20">
            <div className="flex items-center mb-[14px] md:mt-4">
                <div className="w-1.5 h-1.5 bg-appText rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-1" />
                <h2 className="text-lg leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] lg:leading-none">
                {data.title}
                </h2>
            </div>
            <p className="homeServices--description text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 md:max-w-[761px] lg:text-base lg:leading-[1.4]">
                {data.description}
            </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.items.map((stat: any, index: number) => (
                <div
                key={index}
                className="bg-[#F7F7F7] p-8 rounded-2xl text-center flex flex-col items-center"
                >
                <stat.image className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold text-appText mb-2">{stat.value}</h3>
                <p className="text-sm text-appGray-300">{stat.title}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

  );
};

export default HompageImpact;
