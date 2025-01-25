"use client"
import React from 'react'
import HeroSection from './components/pages/home/HeroSection';
import Navbar from './components/pages/home/Navbar';
import GamesAvailable from './components/pages/home/GamesAvailable';
import GameLead from './components/pages/home/GameLead';
import RecentNews from './components/pages/home/RecentNews';
import Footer from './components/pages/home/Footer';
import "./style/main.css";
import  "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const page = () => {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <GamesAvailable/>
      <GameLead/>
      <RecentNews/>
      <Footer/>
      
    </>
  )
}

export default page