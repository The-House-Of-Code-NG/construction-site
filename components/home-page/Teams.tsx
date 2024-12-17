import React, { useState } from 'react';
import Image from 'next/image';

const HomepageTeam = ({ data }: { data?: any }) => {
  // State for modal visibility and selected team member
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  return (
    <section className="pb-10 lg:pb-14">
      <div className="container">
        <div className="mb-5 md:flex md:items-start md:justify-between md:gap-16 md:mb-10 lg:gap-20">
          <div className="flex items-center mb-[14px] md:mt-4">
            <div className="w-1.5 h-1.5 bg-appText rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-1" />
            <h2 className="text-lg text-alphaYellow leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] text-alphaYellowlg:leading-none">
              {data.title}
            </h2>
          </div>
          <p className="homeServices--description text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 md:max-w-[761px] lg:text-base lg:leading-[1.4]">
            {data.description}
          </p>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.items.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg text-center"
              >
                <Image
                  width={300}
                  height={300}
                  src={item.image}
                  alt={item.name}
                  className="rounded-t-lg w-full mx-auto object-cover grayscale"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-alphaYellow">{item.name}</h3>
                  <p className="text-gray-500">{item.role}</p>
                  {item?.description && (
                    <span
                      className="font-bold text-base mt-3 cursor-pointer text-appText"
                      onClick={() => setSelectedMember(item)} // Set selected member
                    >
                      View More
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center my-10">
        <a
          href="/about"
          className="flex items-center justify-center px-4 py-[9px] border rounded-[32px] text-white border-alphaYellow bg-alphaYellow max-w-max lg:px-7 lg:py-3"
        >
          View all members
        </a>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedMember(null)} // Close modal on backdrop click
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setSelectedMember(null)} // Close modal
            >
              ✕
            </button>
            <div className="h-[300px] overflow-hidden mb-5">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                className="rounded-lg h-[100px] object-top mx-auto mb-4 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              {selectedMember.name}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-4">
              {selectedMember.role}
            </p>
            <p className="text-gray-700 text-center">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomepageTeam;
