import React from 'react';
import { PageWrapper } from '@/components/PageWrapper';
import AnimatedTitle from '@/components/AnimatedTitle';
import homepage from '@/data';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
        <div className="container engineering_selector">
          <AnimatedTitle
            selector=".engineering_selector"
            title={homepage.engineering_services.title}
            className="mb-10 md:mb-20 lg:mb-[192px] text-alphaYellow"
            titleClassName="text-[57px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[95px] md:text-[110px] lg:text-[150px] lg:tracking-[5.59px] xl:text-[132px]"
          />
          <div className="grid grid-cols-1 gap-10 lg:gap-[72px]">
            {homepage.engineering_services &&
              homepage.engineering_services.items.map((service, index) => (
                <div
                  key={index}
                  className="lg:grid lg:grid-cols-[1fr,378px,minmax(auto,1fr)] lg:items-start lg:gap-10"
                >
                  <div className="flex items-center max-lg:mb-[14px]">
                    <div className="w-1.5 h-1.5 bg-appText rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-2" />
                    <h2 className="text-lg leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] text-alphaYellow lg:leading-none">
                      {service.title}
                    </h2>
                  </div>
                  <div className="max-lg:mb-6 lg:max-w-[378px]">
                    <p className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 mb-[14px] lg:text-base lg:leading-[1.4] lg:mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex lg:justify-end">
                    <Link href="/contact#start" target="#start">
                      <button className="flex justify-center items-center w-full px-6 py-[13px] border-2 border-alphaYellow rounded-[32px] text-appGray-500 transition-colors duration-300 hover:border-alphaYellow hover:bg-alphaYellow hover:text-white lg:px-10 lg:py-5 lg:w-auto">
                        <span className="text-sm leading-none tracking-[-0.41px] font-medium lg:text-2xl lg:leading-none">
                          Start project
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="container mt-10 agricultural_selector">
          <h2 className="mb-10 md:mb-20 lg:mb-[192px] text-alphaYellow text-[57px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[95px] md:text-[110px] lg:text-[150px] lg:tracking-[5.59px] xl:text-[132px]">{homepage.agricultural_services.title}</h2>
          <div className="grid grid-cols-1 gap-10 lg:gap-[72px]">
            {homepage.agricultural_services &&
              homepage.agricultural_services.items.map((service, index) => (
                <div
                  key={index}
                  className="lg:grid lg:grid-cols-[1fr,378px,minmax(auto,1fr)] lg:items-start lg:gap-10"
                >
                  <div className="flex items-center max-lg:mb-[14px]">
                    <div className="w-1.5 h-1.5 bg-appText rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-2" />
                    <h2 className="text-lg leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] text-alphaYellow lg:leading-none">
                      {service.title}
                    </h2>
                  </div>
                  <div className="max-lg:mb-6 lg:max-w-[378px]">
                    <p className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 mb-[14px] lg:text-base lg:leading-[1.4] lg:mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex lg:justify-end">
                    <Link href="/contact#start" target="#start">
                      <button className="flex justify-center items-center w-full px-6 py-[13px] border-2 border-alphaYellow rounded-[32px] text-appGray-500 transition-colors duration-300 hover:border-appText hover:bg-appText hover:text-white lg:px-10 lg:py-5 lg:w-auto">
                        <span className="text-sm leading-none tracking-[-0.41px] font-medium lg:text-2xl lg:leading-none">
                          Start project
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;
