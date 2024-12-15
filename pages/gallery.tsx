import React, { useState, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { PageWrapper } from '@/components/PageWrapper';
import AnimatedTitle from '@/components/AnimatedTitle';
import homepage from '@/data';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const handleImageClick = useCallback((item: any) => {
    setSelectedImage(item);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
      <PageWrapper>
        <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
          <div className="container">
            <AnimatedTitle
                title={homepage.gallery.title}
                className="mb-10 md:mb-20 lg:mb-[192px] text-alphaYellow"
                titleClassName="text-[114px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[190px] md:text-[220px] lg:text-[300px] lg:tracking-[5.59px] xl:text-[464px]"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {homepage.gallery.galleryItems.map((item, index) => {
                const aspectRatio = item.image[0].height / item.image[0].width;

                return (
                    <div
                        key={index}
                        className={`
                    group relative overflow-hidden  
                    transform transition duration-300 
                    ${index % 3 === 0 ? 'md:col-span-1' : 'md:col-span-1'}
                    cursor-pointer flex
                  `}
                        style={{
                          gridRow: `span ${Math.ceil(aspectRatio * 2)}`,
                          height: '100%' // Ensure full height
                        }}
                        onClick={() => handleImageClick(item)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                            src={item.image[0]}
                            alt={item.title}
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg">
                        View Details
                      </span>
                        </div>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>

            {selectedImage && (
                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                  <div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="bg-white rounded-xl shadow-2xl max-w-4xl w-full relative"
                      onClick={(e) => e.stopPropagation()}
                  >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black z-10 p-2 rounded-full bg-white/50 hover:bg-white/80 transition"
                        onClick={closeModal}
                    >
                      ✕
                    </button>

                    <div className="grid md:grid-cols-2 gap-6 p-6">
                      <div className="relative aspect-square">
                        <Image
                            src={selectedImage.image[0]}
                            alt={selectedImage.title}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">
                          {selectedImage.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {selectedImage.description || 'No description available'}
                        </p>
                        <div className="flex space-x-4">
                          <button
                              className="px-4 py-2 bg-alphaYellow text-black rounded-md hover:bg-opacity-90 transition"
                              onClick={closeModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}
        </div>
      </PageWrapper>
  );
};

export default GalleryPage;
