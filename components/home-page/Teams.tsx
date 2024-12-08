import avatar from '@/assets/media/profile2.jpg'
import Image from 'next/image';

const HomepageTeam = ({ data }: { data?: any }) => {
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
          <p
            className="homeServices--description text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 md:max-w-[761px] lg:text-base lg:leading-[1.4]"
          >{data.description}</p>
        </div>
            <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
               {data.items.map((item: any, index: number) => (
                 <div key={index} className="bg-white shadow-md rounded-lg text-center">
                 <div className="mb-4">
                     <Image
                     src={avatar as any}
                     alt="Team Member" 
                     className="w-32 h-32 mx-auto object-cover grayscale"
                     />
                 </div>
                     <div className="p-4">
                         <h3 className="text-lg font-semibold">{item.name}</h3>
                 <p className="text-gray-500">{item.role}</p>
                 </div>
                     </div>
               ))}
               </div>
               </div>
            </div>
        </section>
    );
  };
  
  export default HomepageTeam;
  