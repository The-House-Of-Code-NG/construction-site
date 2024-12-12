import { FiFacebook, FiInstagram, FiX } from 'react-icons/fi';
import ImagyneLogo from '@/assets/media/imagyne.jpg';
import homepage from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/media/logo.png';
import React from 'react';
interface FooterProps {
  data?: any;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

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
  return (
    <footer className="pb-10">
      <div className="container">
        <div className="pb-6 border-b border-appGray-100 mb-6 md:flex md:items-end md:justify-between md:pb-8 md:mb-8">
          <div className="text-lg leading-[1.2] tracking-[-0.41px] font-Helvetica max-w-[174px] max-md:mb-6 md:text-3xl md:leading-[1.2] md:max-w-[300px] lg:text-[40px] lg:max-w-[394px]">
            <Link href="/">
              <a className=" flex md:flex-1" aria-label="Home page">
                <Image src={Logo} width={250} height={50} />
              </a>
            </Link>
          </div>
          <nav>
            <ul className="grid grid-cols-[repeat(2,auto)] gap-4 md:flex md:items-center md:gap-6">
              {homepage.headerLinks.map((item, index) => (
                <li className="cursor-pointer" key={index}>
                  <Link href={item.path}>
                    <p className="text-sm leading-none tracking-[-0.41px] lg:text-base lg:leading-none">
                      {item.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="sm:grid sm:grid-cols-2 lg:flex lg:items-center lg:justify-between">
          <div className="pb-6 border-b border-appGray-100 mb-6 sm:col-span-2 md:pb-8 md:mb-8 lg:col-span-1 lg:order-2 lg:border-none lg:pb-0 lg:mb-0">
            <ul className="grid grid-cols-2 gap-3 max-w-max sm:grid-cols-4">
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
          <a
            href="https://imagyne.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center max-md:mb-4 lg:order-1"
          >
            <span className="text-sm leading-none tracking-[-0.41px] text-appGray-500 lg:text-base lg:leading-none lg:mr-3">
              This site is powered by
            </span>
            <Image src={ImagyneLogo} width={100} height={100} />
          </a>
          <div className="text-sm leading-none tracking-[-0.41px] sm:text-right lg:order-3 lg:text-base lg:leading-none">
            &copy; {currentYear} Alpha Zeta. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
