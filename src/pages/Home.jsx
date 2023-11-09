import React, { Component, useContext } from "react";
import { AppContext } from "../context/Context";
import { TbSend } from "react-icons/tb";
import Image1 from "../assets/image-1.jpg";
import Image2 from "../assets/image-2.jpg";
import Image3 from "../assets/image-3.jpg";
import Image4 from "../assets/image-4.jpg";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TourType } from "../components/TourType";
import { GiCheckMark } from "react-icons/gi";
import { BsArrowRightShort } from "react-icons/bs";
import { CarouselItem } from "../components/CarouselItem";
import { TourDetailCarousel } from "../components/TourDetailCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Home = () => {
  const { someInfo, setSomeInfo } = useContext(AppContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Hero Section 1 - START */}
      <div className=" bg-blue-900 text-white">
        <div className="flex justify-around mx-32">
          <div className="flex flex-col justify-center gap-3">
            <p className="text-5xl font-allura text-yellow-400 font-semibold">
              Explore the
            </p>
            <p className="text-6xl font-bold flex flex-col">
              Travel & <span>Adventures</span>
            </p>
            <p>Find awesome hotel, tour, car and activities in London</p>
          </div>
          <div className="flex gap-10 pt-20">
            <img src={Image1} alt="" className="h-[350px]" />
            <img src={Image2} alt="" className="w-[400px]" />
          </div>
        </div>
        {/* <div className="flex bg-white text-gray-800">
        <div className="flex gap-10 p-4">
          <div>
            <p>Destination</p>
            <div className="flex gap-2 items-center border-2 border-gray-500 rounded-lg bg-white px-2 py-2">
              <TbSend />
              <input
                type="text"
                placeholder="Where to go ?"
                className="outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <p>Type</p>
            <div className="flex gap-2 items-center border-2 border-gray-500 rounded-lg bg-white px-2 py-2">
              <CiFlag1 />
              <input
                type="text"
                placeholder="Activity"
                className="outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <p>When</p>
            <div className="flex gap-2 items-center border-2 border-gray-500 rounded-lg bg-white px-2 py-2">
              <MdOutlineDateRange />
              <input
                type="text"
                placeholder="When"
                className="outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <p>Guest</p>
            <div className="flex gap-2 items-center border-2 border-gray-500 rounded-lg bg-white px-2 py-2">
              <MdOutlinePeopleAlt />
              <input
                type="text"
                placeholder="0"
                className="outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
        <div>
          <button>Search</button>
        </div>
      </div> */}
      </div>
      {/* Hero Section 1 - End */}

      {/* Hero Section 2 - Browse By Category START*/}
      <div className="flex flex-col justify-center items-center  bg-gray-100 py-28 gap-14">
        <div className="flex flex-col gap-2">
          <p className="font-allura text-4xl text-blue-900 font-semibold">
            Browse By Category
          </p>
          <p className="font-bold text-5xl  text-blue-950">Pick A Tour Type</p>
        </div>
        <div className="flex gap-20">
          <TourType />
          <TourType />
          <TourType />
          <TourType />
          <TourType />
          <TourType />
        </div>
        <div className="flex gap-48 mt-24">
          <div className="w-[500px]">
            <img src={Image3} alt="" />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="font-allura text-4xl text-blue-900 font-semibold">
              Why Choose Us
            </p>
            <div className="font-bold text-5xl  text-blue-950">
              <p>Plan Your Trip</p>
              <p>with trisog</p>
            </div>
            <div className="flex flex-col gap-1 font-semibold">
              <p>Holisticly optimize proactive strategic theme</p>
              <p>areas rather than effective manufactured</p>
              <p> products create</p>
            </div>
            <div className="flex gap-10 font-bold">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-blue-950">
                  <GiCheckMark />
                  <p>Travel Plan</p>
                </div>
                <div className="flex items-center gap-3 text-blue-950">
                  <GiCheckMark />
                  <p>Cheap Rates</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-blue-950">
                  <GiCheckMark />
                  <p>Hand-Picked Tour</p>
                </div>
                <div className="flex items-center gap-3  text-blue-950">
                  <GiCheckMark />
                  <p>Private Guide</p>
                </div>
              </div>
            </div>
            <button className="border-2 border-gray-300 rounded-xl flex w-40 h-16 justify-center items-center text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* Hero Section 2 - Browse By Category END */}

      {/* Hero Section 3 - Top Destinations START */}
      <div>
        <div className="flex flex-col gap-10 justify-center items-center py-20">
          <div className="flex justify-between w-[80%]">
            <div>
              <p className="font-allura text-4xl text-blue-900 font-semibold">
                Destination
              </p>
              <p className="font-bold text-5xl text-blue-950">
                Top Destinations
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">See All</p>
              <BsArrowRightShort className="text-2xl" />
            </div>
          </div>
          {/* CAROUSEL */}
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
          {/* CAROUSEL */}
        </div>
      </div>
      {/* Hero Section 3 - Top Destinations END */}

      {/* Hero Section 4 - Featured Tours START */}
      <div className="bg-blue-900 text-white">
        <div className="flex flex-col py-24 px-40 gap-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="font-allura text-5xl font-bold">Tours</p>
            <p className="text-5xl font-bold">Featured Tours</p>
          </div>
          <div>
            <Slider {...settings}>
              <TourDetailCarousel />
              <TourDetailCarousel />
              <TourDetailCarousel />
              <TourDetailCarousel />
              <TourDetailCarousel />
              <TourDetailCarousel />
              <TourDetailCarousel />
              <TourDetailCarousel />
            </Slider>
          </div>
        </div>
      </div>
      {/* Hero Section 4 - Featured Tours END */}

      {/* Hero Section 5 -Why We Are The Best Start */}
      <div className="flex  bg-gray-200 justify-around items-center py-20 px-10">
        <div className="flex flex-col gap-12 justify-center">
          <div className="flex flex-col gap-2 p-6">
            <div className="font-allura text-4xl text-blue-950 font-bold">
              <p>Why We Are The Best</p>
            </div>
            <div className="font-bold text-5xl text-blue-950 mb-10 flex flex-col gap-4">
              <p>Keep Things</p>
              <p>Flexible</p>
            </div>
            <div className="flex border-2 border-gray-400 rounded-lg py-4 w-[160px] items-center justify-center font-semibold text-blue-950">
              <button>Contact Us</button>
            </div>
          </div>
          <div className="flex gap-20 ml-6">
            <div className="flex flex-col gap-6 p-2">
              <div>
                <p className="font-allura text-5xl font-bold text-blue-950">
                  120+
                </p>
                <p className="font-bold text-gray-500">Total Destination</p>
              </div>
              <div>
                <p className="font-allura text-5xl font-bold text-blue-950">
                  12k+
                </p>
                <p className="font-bold text-gray-500">Total Travelers</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-2">
              <div>
                <p className="font-allura text-5xl font-bold text-blue-950">
                  500+
                </p>
                <p className="font-bold text-gray-500">Travel Packages</p>
              </div>
              <div>
                <p className="font-allura text-5xl font-bold text-blue-950">
                  7k+
                </p>
                <p className="font-bold text-gray-500">Positive Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Image4} alt="" className="w-[600px]" />
        </div>
      </div>
      {/* Hero Section 5 -Why We Are The Best Start  */}
    </div>
  );
};
