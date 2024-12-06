import React, { useState } from 'react';
import { PageWrapper } from '@/components/PageWrapper';
import AnimatedTitle from '@/components/AnimatedTitle';


const TestimonialsPage: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // const activeItem = page.items[activeItemIndex];

  return (
    <PageWrapper>
      <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[4.5rem] lg:pb-[7.5rem]">
        <div className="container">
          <AnimatedTitle
            title="The Testimonials"
            className="mb-10 md:mb-20 lg:mb-[7.75rem]"
            titleClassName="text-[7.125rem] flex-shrink-0 leading-none font-Helvetica tracking-[.0994rem] sm:text-[11.875rem] md:text-[13.75rem] lg:text-[18.75rem] lg:tracking-[.3494rem] xl:text-[29rem]"
          />
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-[53.5rem] mx-auto lg:gap-6 lg:mb-[10.625rem]">
            {/* {page.items.map((item, index) => (
              <button
                key={index}
                className="flex"
                onClick={() => setActiveItemIndex(index)}
              >
                <BCMSImage
                  media={item.author.avatar}
                  options={{
                    sizes: {
                      exec: [
                        {
                          width: 100,
                          height: 100,
                        },
                      ],
                    },
                  }}
                  className={`w-10 h-10 rounded-full overflow-hidden cover transition-all duration-300 lg:w-16 lg:h-16 ${
                    activeItemIndex === index ? 'scale-125' : 'opacity-20'
                  }`}
                />
              </button>
            ))} */}
          </div>
          <div className="flex flex-col items-center text-center max-w-[74.625rem] mx-auto mb-6 lg:mb-12">
            <h3 className="text-xl leading-none tracking-[-0.0256rem] font-Helvetica mb-[.875rem] lg:text-[2rem] lg:mb-10">
              {/* {activeItem?.author.name} */}
              Just a title
            </h3>
            {/* <ContentManager
              item={activeItem?.content || []}
              className="text-sm leading-[1.4] tracking-[-0.0256rem] text-appGray-500 lg:text-[2rem]"
            /> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui tempora repudiandae error quibusdam vel vero libero delectus, quasi eveniet itaque. Distinctio repellendus, voluptates vero adipisci inventore reprehenderit maxime reiciendis.</p>
          </div>
          <div className="flex items-center gap-2 lg:gap-6">
            {/* {page.items.map((_, index) => (
              <button
                key={index}
                className={`relative h-0.5 transition-all duration-300 after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-full after:h-5 lg:h-1 ${
                  activeItemIndex === index
                    ? 'flex-[3] bg-[#2B261E]'
                    : 'flex-1 bg-[#F0F0F0]'
                }`}
                onClick={() => setActiveItemIndex(index)}
              />
            ))} */}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TestimonialsPage;
