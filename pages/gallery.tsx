import React, { useState } from 'react';
import { PageWrapper } from '@/components/PageWrapper';
import AnimatedTitle from '@/components/AnimatedTitle';

import homepage from '@/data';
import Image from 'next/image';
import classNames from 'classnames';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  return (
    <PageWrapper>
      <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
        <div className="container">
          <AnimatedTitle
            title={homepage.gallery.title}
            className="mb-10 md:mb-20 lg:mb-[192px] text-alphaYellow"
            titleClassName="text-[114px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[190px] md:text-[220px] lg:text-[300px] lg:tracking-[5.59px] xl:text-[464px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(2,1fr)]">
          {homepage.gallery.galleryItems.map((item: any, index: number) => (
              <div
                key={index}
                className={classNames(
                  'relative group h-[25rem] w-full',
                  
                )}
                
              >
              {/* Image */}
              <Image
                src={item.image[0]}
                alt={item.title}
                className="object-cover w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900 bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 rounded-lg">
                <button
                  className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-md"
                  onClick={() => setSelectedImage(item)}
                >
                  Expand
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
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
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;
