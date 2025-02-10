"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function FaQ() {
  return (
    <>
    <Navbar />
    <div className="main_faq">
        <div className="FAQ_section">
            <div>
                <p className="FAQ_Head">HELP & FAQ's</p>
            </div>
            <div>
                <p className="FAQ_Head_main">Help & FAQ’s</p>
            </div>
            <div>
                <p className="FAQ_Content">Galactic is a thrilling adventure game set on a mysterious island.
                will transport you to a universe full of possibilities!</p>
            </div>
        </div>

        <div className="row">
            <div className="col-8" style={{color:"red"}}>
                   dadsf
            </div>

            <div className="col-4" style={{color:"red"}}>
fcasdfs
            </div>
        </div>
    </div>
    {/* <Footer /> */}
    </>
  );
}
