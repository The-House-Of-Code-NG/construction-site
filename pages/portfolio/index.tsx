import React from 'react';
import { PageWrapper } from '@/components/PageWrapper';
import AnimatedTitle from '@/components/AnimatedTitle';

import homepage from '@/data';
import Image from 'next/image';

const PortfolioPage = () => {
  return (
    <PageWrapper>
      <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
        <div className="container">
          <AnimatedTitle
            title={homepage.portfolio.title}
            className="mb-10 md:mb-20 lg:mb-[192px] text-alphaYellow"
            titleClassName="text-[57px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[95px] md:text-[110px] lg:text-[150px] lg:tracking-[5.59px] xl:text-[132px]"
          />
          <div className="grid grid-cols-1 gap-[50px] lg:gap-20">
            {homepage.portfolio.items.map((item, index) => (
              <div key={index + item}>
                <div className="max-h-[500px] w-full">
                  <Image
                    src={item.gallery[0]}
                    height={500}
                    className="w-full h-[200px] md:h-[500px] aspect-[2] object-contain  rounded-[6px] overflow-hidden mb-4 lg:rounded-3xl lg:mb-12"
                  />
                </div>
                <div>
                  <div className="lg:flex lg:items-start my-10 lg:justify-between">
                    <div>
                      <h3 className="flex text-sm leading-none max-w-[80%] tracking-[-0.41px] text-alphaYellow font-Helvetica mb-3 md:text-2xl md:leading-none lg:text-[32px]">
                        {item.title}
                      </h3>
                      <p className="text-normal leading-[1.4] tracking-[-0.41px]  lg:text-[15px] lg:max-w-[551px]">
                        {item.client}
                      </p>
                    </div>
                    <p className="flex text-sm leading-none tracking-[-0.41px] text-alphaYellow font-Helvetica mb-3 md:text-2xl md:leading-none lg:text-[32px]">
                      {item.contractAmount}
                    </p>
                  </div>
                  <p className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 lg:text-[15px] lg:max-w-[551px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioPage;
