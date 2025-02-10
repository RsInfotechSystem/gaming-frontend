"use client";
import React, { useEffect } from 'react';
import HeroSection from './components/pages/home/HeroSection';
import Navbar from './components/pages/home/Navbar';
import GamesAvailable from './components/pages/home/GamesAvailable';
import GameLead from './components/pages/home/GameLead';
import RecentNews from './components/pages/home/RecentNews';
import HrLineRight from './components/pages/HrLineRight';
import Footer from './components/pages/home/Footer';
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import HrLineLeft from './components/pages/home/HrLineLeft';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FaQ from './components/pages/home/FaQ';



const Page = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <GamesAvailable />
      <GameLead />
      <RecentNews />
      <HrLineRight />
      <Footer />
      <HrLineLeft />
      {/* <FaQ/> */}
    </>
  );
};

export default Page;
