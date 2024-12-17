import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const MasonryGallery = ({ data }: { data: any }) => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  return (
    <section className="py-10">
      <div className="container">
        <div className="mb-8 md:flex md:items-start md:justify-between md:gap-16 lg:gap-20 lg:mb-10">
          <div className="flex items-center mb-[.875rem] md:mt-4">
            <div className="w-1.5 h-1.5 bg-appText rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-1" />
            <h2 className="text-lg leading-none tracking-[-0.0256rem] font-Helvetica lg:text-[2rem] lg:leading-none">
              {data.title}
            </h2>
          </div>
          <div>
            <p className="homeAbout--description text-sm leading-[1.4] tracking-[-0.0256rem] text-appGray-400 md:max-w-[47.5625rem] lg:text-base lg:leading-[1.4]">
              {data.description}
            </p>
          </div>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(2,1fr)]">
          {data.galleryItems.slice(0, 6).map((item: any, index: number) => (
            <div
              key={index}
              className={classNames('relative group h-[25rem] w-full')}
            >
              {/* Image */}
              <Image
                src={item.image[0]}
                alt={item.title}
                className="object-cover w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-alphaYellow bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 rounded-lg">
                <button
                  className="bg-white text-alphaYbg-alphaYellow font-semibold px-4 py-2 rounded-md"
                  onClick={() => setSelectedImage(item)}
                >
                  Expand
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center my-10">
          <a
            href="/gallery"
            className="flex items-center justify-center px-4 py-[9px] border rounded-[32px] text-white border-alphaYellow bg-alphaYellow max-w-max lg:px-7 lg:py-3"
          >
            View all photos
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal on backdrop click
        >
          <div
            className="bg-white rounded-lg p-6 w-[60%] relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setSelectedImage(null)} // Close modal
            >
              ✕
            </button>
            <Image
              width={1100}
              height={700}
              src={selectedImage.image[0]}
              alt={selectedImage.title}
              className="rounded-lg mb-4 mx-auto w-[11rem]"
            />
            <h3 className="text-lg font-bold text-center mb-2">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default MasonryGallery;
