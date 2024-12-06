import type { AppProps } from 'next/app';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import '@/assets/css/main.css';
import '@/assets/css/reset.css';
import '@/assets/css/transition.css';
import '@/assets/css/fonts.css';

import 'swiper/css';
import 'swiper/css/pagination';


gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
