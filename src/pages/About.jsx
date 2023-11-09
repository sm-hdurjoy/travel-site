import React from "react";
import Image5 from "../assets/image-5.jpg";
import CarouselImage3 from "../assets/carousel-image-3.jpg";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FeatureCard } from "../components/FeatureCard";
import { CarouselItem } from "../components/CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Hero Section 1 ABOUT START */}
      <div className="relative h-[350px] w-full">
        <div className="absolute inset-0">
          <img
            src={Image5}
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4">
          <p className="text-7xl font-bold text-gray-800">About Us</p>
          <p className="text-xl text-gray-800 font-bold">
            Home / <span>About</span>
          </p>
        </div>
      </div>
      {/* Hero Section 1 ABOUT END */}

      {/* Hero Section 2 ABOUT US START */}
      <div className="flex flex-col pt-28 pb-14 items-center">
        <div className="flex justify-center items-center gap-52">
          <div>
            <img src={CarouselImage3} alt="" className="w-[400px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-allura text-5xl font-bold text-red-500 flex items-center gap-4">
              <p>About Us</p>
              <span className="border-[1px] border-gray-300 w-[200px] h-0 rounded-full"></span>
            </div>
            <div className="text-5xl font-bold text-blue-950">
              <p>Why Select Us for</p>
              <p>Your Vacation</p>
            </div>
            <div className="flex flex-col w-96 text-gray-500 gap-3">
              <p className="mb-6">
                Intrinsically myocardial standards compliant solutions rather
                than multidisciplinary solutions. Phosphorescently re-engineer
                goal-oriented resources whereas distributed strategic theme
                areas. Authoritatively coordinate 24/365 process improvements
                after out-of-the-box mind share.
              </p>
              <p className="mb-6">
                Appropriately extend user-eccentric partnerships before
                interactive e-trailers. Efficiently plagiarise superior services
                after adaptive web-readiness
              </p>
              <p>
                Dynamically whiteboard team building processes rather than
                long-term high-impact infrastructures.
              </p>
            </div>
          </div>
        </div>
        <span className=" border-b-2 border-gray-300 flex items-center justify-center w-[85%] my-14"></span>
        <div className="flex gap-32">
          <div className="flex gap-2 items-center">
            <p className="text-6xl font-bold font-allura">120+</p>
            <p className="text-lg font-semibold text-gray-600">
              Total Destinations
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-6xl font-bold font-allura">500+</p>
            <p className="text-lg font-semibold text-gray-600">
              Travel Packages
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-6xl font-bold font-allura">12k+</p>
            <p className="text-lg font-semibold text-gray-600">
              Total Travelers
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-6xl font-bold font-allura">7k+</p>
            <p className="text-lg font-semibold text-gray-600">
              Positive Reviews
            </p>
          </div>
        </div>
      </div>
      {/* Hero Section 2 ABOUT US END */}

      {/* Hero Section 3 Why Choose Us START */}
      <div className="flex flex-col gap-10 justify-center items-center bg-gray-200 py-28">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center w-full gap-3">
            <span className=" border-b-2 border-gray-300 flex items-center justify-center w-[85%]"></span>
            <p className="font-allura text-4xl font-bold text-red-600">
              Features
            </p>
            <span className=" border-b-2 border-gray-300 flex items-center justify-center w-[85%]"></span>
          </div>
          <p className="text-5xl font-bold px-6">Why Choose Us</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <FeatureCard title="Cheap Rates" />
            <FeatureCard title="Beest Travel Plan" />
            <FeatureCard title="Easy & Quick Booking" />
          </div>
          <div className="flex gap-10">
            <FeatureCard title="Hand-picked Tour" />
            <FeatureCard title="Orivate Guide" />
            <FeatureCard title="Customer Care 24/7" />
          </div>
        </div>
      </div>
      {/* Hero Section 3 Why Choose Us END */}

      {/* Hero Section 4 Team START */}
      <div className="flex flex-col gap-10 justify-center items-center bg-white py-28">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center w-full gap-3">
            <span className=" border-b-2 border-gray-300 flex items-center justify-center w-[85%]"></span>
            <p className="font-allura text-4xl font-bold text-red-600">Team</p>
            <span className=" border-b-2 border-gray-300 flex items-center justify-center w-[85%]"></span>
          </div>
          <p className="text-5xl font-bold px-6">Our Amazing Team</p>
        </div>
        <div className="w-[80%]">
          <Slider {...settings}>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Slider>
        </div>
      </div>
      {/* Hero Section 4 Team  END */}
    </div>
  );
};
