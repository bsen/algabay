"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { motion, useAnimation } from "framer-motion";

interface HeaderProps {
  productShow: boolean;
  setProductShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProductIconsProps {
  productShow: boolean;
  setProductShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Landing: React.FC = () => {
  const [productShow, setProductShow] = useState<boolean>(false);

  return (
    <div className="bg-black h-screen overflow-x-hidden">
      <Header productShow={productShow} setProductShow={setProductShow} />
      <GradientBorder />
      <section>
        <ProductsPage
          productShow={productShow}
          setProductShow={setProductShow}
        />
      </section>
      <section>
        <TracksPage />
      </section>
      <Numbers />
      <Partners />
      <Rating />
      <Footer />
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ productShow, setProductShow }) => (
  <header className="fixed top-0 left-0 right-0 h-[10vh] z-50 overflow-hidden">
    <div className="relative h-full bg-black/60 backdrop-filter backdrop-blur-md">
      <div className="flex justify-between items-center h-full px-4 md:px-5">
        <Logo />

        <DesktopMenu
          productShow={productShow}
          setProductShow={setProductShow}
        />
      </div>
    </div>
  </header>
);

const Logo: React.FC = () => (
  <div className="flex gap-2 items-center transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
    <img src="/logo.png" className="h-8 md:h-10" alt="logo" />
    <div className="font-light text-white text-2xl font-lexend">algabay</div>
  </div>
);

const DesktopMenu: React.FC<
  Omit<HeaderProps, "mobileMenuOpen" | "setMobileMenuOpen">
> = ({ productShow, setProductShow }) => (
  <div className="text-sm md:flex gap-10 items-center font-light text-white">
    <MenuDropdown
      title="What We Build"
      isOpen={productShow}
      onClick={() => {
        setProductShow(!productShow);
      }}
    />
  </div>
);

const MenuDropdown: React.FC<{
  title: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, isOpen, onClick }) => (
  <div
    onClick={onClick}
    className={`transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110 ${
      isOpen ? "underline underline-offset-4 scale-110" : ""
    }`}
  >
    {title}
    {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
  </div>
);

const GradientBorder: React.FC = () => (
  <div className="w-full h-2 mt-[9vh] fixed">
    <div className="w-full h-full animate-border bg-gradient-to-r from-purple-500 via-indigo-500 to-orange-500 blur-lg animate-spread"></div>
  </div>
);

const ProductsPage: React.FC<{
  productShow: boolean;
  setProductShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ productShow, setProductShow }) => (
  <div className="pt-[10vh] flex flex-col items-center justify-center h-screen px-4 md:px-0">
    <HeroSection productShow={productShow} />
    <ProductIcons productShow={productShow} setProductShow={setProductShow} />
  </div>
);

const HeroSection: React.FC<{ productShow: boolean }> = ({ productShow }) => (
  <div
    className={`flex flex-col items-center justify-center p-10 transition-transform cursor-pointer duration-1000 ${
      productShow ? "scale-75 opacity-60" : "scale-110"
    }`}
  >
    <h1 className="text-4xl md:text-[3.4rem] font-extralight text-white">
      The Startup for Startups
    </h1>
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-orange-500 font-extralight text-sm md:text-2xl mt-6">
      We turn killer ideas into badass realities.
    </p>
    <CallToActionButton />
  </div>
);

const CallToActionButton: React.FC = () => (
  <div
    onClick={() => window.open("https://wa.me/8116300272", "_blank")}
    className="bg-gradient-to-r from-purple-500 via-indigo-500 to-orange-500 animate-border my-6 md:my-10 flex items-center justify-center md:justify-start gap-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 bg-black text-white md:text-2xl w-full md:w-fit px-4 py-2 md:py-1 font-extralight"
  >
    <div className="text-sm md:text-2xl">Let's Build Your Idea</div>
    <ArrowRightAltIcon sx={{ fontSize: { xs: 24, md: 30 } }} />
  </div>
);

const ProductIcons: React.FC<ProductIconsProps> = ({
  productShow,
  setProductShow,
}) => (
  <div
    onClick={() => {
      setProductShow(!productShow);
    }}
    className={`transition-transform cursor-pointer duration-1000 flex flex-wrap justify-center md:justify-evenly w-full md:w-[80%] text-white font-light ${
      productShow ? "scale-125 " : "scale-90 opacity-80"
    }`}
  >
    {["WEB", "BACKEND", "BLOCKCHAIN"].map((item, index) => (
      <div
        key={index}
        className="text-white flex flex-col gap-2 justify-center items-center m-4 md:m-0"
      >
        <img
          src={`/LightThemeProducts/${item.toLowerCase()}.png`}
          className="h-10 md:h-12"
          alt={item}
        />
        <div className="text-sm md:text-base">{item}</div>
      </div>
    ))}
  </div>
);
const TracksPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  const tracks = [
    { image: "taxi.png", title: "Taxi & Transportation" },
    { image: "education.png", title: "Education" },
    { image: "grocery.png", title: "Delivery" },
    { image: "fitness.png", title: "Fitness" },
    { image: "rental.png", title: "Rental" },
    { image: "consultation.png", title: "Consultation" },
    { image: "ecommerce.png", title: "E-commerce" },
    { image: "healthcare.png", title: "Healthcare" },
    { image: "freelancer.png", title: "Freelancer" },
    { image: "social-media.png", title: "Social Platform" },
    { image: "pickup-delivery.png", title: "Supply Chain" },
    { image: "real-estate.png", title: "Real Estate" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div
      ref={ref}
      className="bg-black py-10 flex flex-col items-center justify-center px-4  text-white"
    >
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-4xl font-extralight text-center mb-6 max-w-3xl text-white"
      >
        Our On Demand Industries
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-sm md:text-2xl font-extralight text-center mb-16 max-w-3xl text-white"
      >
        We build tomorrow's tech for every industry. Your game changing idea?
        We'll make it real.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {tracks.map((track, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: (i) => ({
                opacity: 1,
                scale: 1,
                transition: { delay: 0.15 * i, duration: 0.5 },
              }),
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="hover:bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-600 animate-border bg-neutral-900 text-white shadow-md rounded-lg p-4 hover:shadow-xl hover:scale-105 hover:bg-shadow-xl cursor-pointer flex flex-col items-center transition duration-300 ease-in-out"
          >
            <img
              src={`/DarkThemeIndustries/${track.image}`}
              alt={track.title}
              className="w-8 h-8 mb-2 object-contain"
            />
            <h3 className="text-lg font-extralight text-center">
              {track.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Numbers: React.FC = () => {
  function useIntersectionObserver(ref: any, options: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, options]);

    return isIntersecting;
  }
  function useCountAnimation(end: any, duration = 2000, isInView: any) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const startTime = Date.now();

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);

        setCount(currentCount);

        if (progress === 1) {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }, [end, duration, isInView]);

    return count;
  }

  const countSectionRef = useRef(null);
  const isCountSectionInView = useIntersectionObserver(countSectionRef, {
    threshold: 0.1,
  });
  const countryCount = useCountAnimation(4, 2000, isCountSectionInView);
  const customersCount = useCountAnimation(1200, 2000, isCountSectionInView);
  const globalOutReachCount = useCountAnimation(
    15000,
    2000,
    isCountSectionInView
  );
  const industriesCount = useCountAnimation(24, 2000, isCountSectionInView);
  const NumbersData = [
    {
      count: globalOutReachCount,
      image: "globaloutreach.png",
      title: "Global Outreach",
    },
    {
      count: industriesCount,
      image: "industries.png",
      title: "Industries",
    },
    {
      count: countryCount,
      image: "country.png",
      title: "Countries Served",
    },
  ];
  return (
    <div
      className="bg-black pt-20 pb-10 flex flex-col md:flex-row gap-12 items-center justify-evenly"
      ref={countSectionRef}
    >
      {NumbersData.map((data) => (
        <div className="flex flex-col items-center justify-center w-full text-center text-white text-2xl font-medium font-sans mb-8 md:mb-0">
          <div className="text-2xl font-lexend font-extralight text-white">
            {data.count}+
          </div>
          <img
            src={`/Numbers/${data.image}`}
            className="w-10 h-10 my-6"
            alt="Athlete Icon"
          />
          <div className="text-xl font-extralight font-lexend">
            {data.title}
          </div>
        </div>
      ))}
    </div>
  );
};

const Partners: React.FC = () => {
  const PartnersData = [
    {
      image: "google.png",
      title: "Google",
    },
    {
      image: "aws.png",
      title: "AWS",
    },
    {
      image: "microsoft.png",
      title: "Microsoft",
    },
  ];
  return (
    <div className="bg-black flex flex-col py-10 gap-12 items-center justify-evenly text-white">
      <div className="text-2xl font-extralight font-lexend">Backed By</div>
      <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-evenly">
        {PartnersData.map((data) => (
          <div className="flex flex-col gap-4 items-center justify-center text-2xl font-extralight">
            <img src={`/Partners/${data.image}`} className="h-14" />
            <div className="font-extralight font-lexend text-xl">
              {data.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Rating: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-8 items-center">
      <div className="max-w-sm w-full">
        <div className="text-center">
          <div className="flex justify-center space-x-1 mb-2">
            {[1, 2, 3, 4].map((star) => (
              <svg
                key={star}
                className="w-10 h-10 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg
              className="w-10 h-10 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient id="partial-fill">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
              <path
                fill="url(#partial-fill)"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <p className="text-2xl font-extralight text-white">4.5 out of 5</p>
        </div>
      </div>
    </div>
  );
};
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center text-center text-xs text-neutral-600 py-10 px-4 md:px-20">
      <div className="w-fit">
        <div className="w-full h-1 animate-border  bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 blur-md"></div>
        <div className="py-4">
          <p className="mt-2">Contact: +91 8116300272 | info@algabay.com</p>
          <p>
            &copy; {currentYear} Algabay Private Limited. All rights reserved.
          </p>
        </div>
        <div className="w-full h-1 animate-border bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 blur-md"></div>
      </div>
    </footer>
  );
};
export default Landing;
