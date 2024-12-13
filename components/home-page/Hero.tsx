import Link from 'next/link';
import Image from 'next/image';
import HomePageBg2 from '@/assets/media/hero.jpg';
import { FiFacebook, FiInstagram, FiX } from 'react-icons/fi';
import ConstructionHero from '@/assets/media/construction-layout.jpg';
import { Particles } from '@/components/Particle';
const social = [
  {
    icon: <FiFacebook className="w-[14px] h-[14px] mr-2 lg:w-4 lg:h-4" />,
    label: 'Facebook',
    path: 'https://facebook.com',
  },
  {
    icon: <FiX className="w-[14px] h-[14px] mr-2 lg:w-4 lg:h-4" />,
    label: 'Twitter',
    path: 'https://x.com',
  },
  {
    icon: <FiInstagram className="w-[14px] h-[14px] mr-2 lg:w-4 lg:h-4" />,
    label: 'Instagam',
    path: 'https://instagram.com',
  },
];

const HomepageHero = ({ data }: { data: any }) => {
  return (
    <section className="relative py-10 lg:pb-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 auto-rows-fr md:grid-cols-[2fr,3fr] lg:grid-cols-[500px,1fr] xl:grid-cols-[615px,1fr]">
          <div className="relative bg-[#FAFAFA] rounded-3xl p-6 overflow-hidden xl:p-10">
            <div className="relative z-10 h-full flex flex-col items-start">
              <h1 className="leading-[1.2] tracking-[-0.41px] mb-2.5 lg:text-[34px] lg:leading-[1.2] lg:mb-4">
                {data.title}
              </h1>
              <p className="text-xs leading-[1.4] tracking-[-0.41px] text-appGray-400 pr-[70px] mb-8 lg:text-base lg:leading-[1.4] lg:mb-8">
                {data.description}
              </p>
              <Link href="/contact">
                <a className="flex px-[18px] py-[14px] rounded-[32px] border border-appGray-200 text-xs leading-none tracking-[-0.41px] font-medium text-appGray-500 uppercase mb-14 lg:px-6 lg:py-4 lg:text-sm lg:leading-none">
                  Contact Us
                </a>
              </Link>
              <ul className="flex items-center gap-3 mt-auto lg:gap-5">
                {social.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center px-4 py-[9px] border rounded-[32px] lg:py-3 ${
                        item.icon
                          ? 'text-appGray-500 border-appGray-200'
                          : 'text-white border-appText bg-appText'
                      }`}
                    >
                      {item.icon && <>{item.icon}</>}
                      <span className="text-sm leading-none font-medium tracking-[-0.41px] uppercase lg:text-base lg:leading-none">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-[244px] h-[244px] translate-x-1/2 -translate-y-1/2 bg-[#3A437E] bg-blend-overlay rounded-full opacity-50 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[244px] h-[244px] -translate-x-1/2 translate-y-1/2 bg-[#FFBF4B] bg-blend-overlay rounded-full opacity-50 blur-[100px] xl:-translate-y-1/3" />
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto xl:aspect-[1.3]">
            <Image
              src={ConstructionHero as any}
              className="absolute top-0 left-0 w-full h-full cover"
              width={800}
              height={612}
            />
          </div>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={300}
          ease={10}
          color="#052162"
          refresh
          size={3}
        />

        <div></div>
      </div>
      <div className="relative my-14">
        <picture>
          <Image
            src={HomePageBg2}
            className="size-full  w-full object-cover position-top"
          />
        </picture>
        <div className="absolute z-50 shadow-2xl p-2 top-1/3  left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
          <h1 className="w-full text-alphaYellow text-center leading-[1.2] tracking-[-0.41px] mb-2.5 lg:text-[70px] lg:leading-[1.2] lg:mb-4">
            Our Mission is to construct a better feature
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-black/30" />
      </div>
    </section>
  );
};

export default HomepageHero;
