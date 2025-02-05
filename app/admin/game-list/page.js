"use client"
import Image from 'next/image';
import React from 'react';
import coin_img from '../../../public/dashboard/coin_img.png';
import network from '../../../public/dashboard/network.png';
import all_games from '../../../public/dashboard/all_games.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../../public/dashboard/freefire_game_rd.png';
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const page = () => {
    const settings = {
        dots: false, // Hide dots
        infinite: true, // Infinite scroll
        speed: 1000, // Slide speed
        slidesToShow: 2, // Number of visible slides
        slidesToScroll: 1, // Slide 1 at a time
        autoplay: true, // Auto-slide enabled
        autoplaySpeed: 2000, // Auto-slide every 2 seconds
        arrows: true, // Show previous/next buttons
        swipeToSlide: true, // Enable swipe-to-slide movement
        touchThreshold: 10, // Adjust touch sensitivity (default: 5)
        swipe: true, // Ensure swipe is enabled
        draggable: true, // Allow dragging on desktop
        touchMove: true, // Allow touch gestures
        pauseOnHover: true, // Pause autoplay when hovered
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show only 1 card on small screens
                },
            },
        ],
    };

    return (
        <div style={{ width: "90%", margin: "0px auto" }}>
         
          
        </div>
    )
}

export default page
