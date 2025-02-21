"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { usePathname } from "next/navigation";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import ForgotPasswordModal from "../ForgotPasswordModal";
import OtpModal from "../OtpModal";
import RegisterSuccessModal from "../RegisterSuccessModal";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import "animate.css"; // Import animate.css

export default function Navbar() {
  const currentUrl = usePathname().split("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [isResetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [isOtpOpen, setOtpOpen] = useState(false);
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isLoginOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoginOpen]);

  return (
    <>
      <section className="nav_landing_page row">
        <div className="nav_main">
          <div className="logo">
            <p className="animate__animated animate__heartBeat">
              <Link href="/"> PlayZone</Link>
            </p>
          </div>

          <button
  className="hamburger"
  onClick={() => {
    if (isMenuOpen) {
      router.push("/"); // Navigate to homepage when closing the menu
    }
    setIsMenuOpen(!isMenuOpen);
  }}
>
  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

          <div className="nav_tab desktop">
            <div className="tabs animate__animated animate__bounceInRight">
              <p>
                <Link href="/components/pages/home/about" className={currentUrl.includes("about") ? "dash_tab_active" : "tab_inactive_home"}>
                  About
                </Link>
              </p>
            </div>
            <div className="tabs animate__animated animate__bounceInRight">
              <p>
                <Link href="/components/pages/home/tournaments" className={currentUrl.includes("tournaments") ? "dash_tab_active" : "tab_inactive_home"}>
                  Tournaments
                </Link>
              </p>
            </div>
            <div className="tabs animate__animated animate__bounceInRight">
              <p>
                <Link href="/components/pages/home/contact" className={currentUrl.includes("contact") ? "dash_tab_active" : "tab_inactive_home"}>
                  Shop
                </Link>
              </p>
            </div>
          </div>
        </div>

        {isMenuOpen && (
  <div className="mobile_menu animate__animated animate__bounceInLeft">
    <div className="menu_item">
      <Link href="/components/pages/home/about" onClick={() => setIsMenuOpen(false)}>About</Link>
      <Link href="/" onClick={() => setIsMenuOpen(false)}>
        <span className="cross_icon bi bi-x"></span>
      </Link>
    </div>
    <Link href="/components/pages/home/faq" onClick={() => setIsMenuOpen(false)}>FAQs</Link>
    <Link href="/components/pages/home/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
    <button onClick={() => setIsLoginOpen(true)} className="login_btn">
      LOG IN
    </button>
  </div>
)}


        <div className="second_nav">
          <div className="nav_hr_line"></div>
          <div className="login_main">
            <button onClick={() => setIsLoginOpen(true)} className="login_btn">
              LOG IN
            </button>

            {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} openSignUp={() => setSignUpOpen(true)} openForgotPassword={() => setForgotPasswordOpen(true)} />}
            {isSignUpOpen && <SignUpModal onClose={() => setSignUpOpen(false)} openLoginModal={() => setIsLoginOpen(true)} openOtpModal={() => setOtpOpen(true)} />}
            {isForgotPasswordOpen && <ForgotPasswordModal onClose={() => setForgotPasswordOpen(false)} openLoginModal={() => setIsLoginOpen(true)} />}
            {isOtpOpen && <OtpModal onClose={() => setOtpOpen(false)} openSignUp={() => setSignUpOpen(true)} openSuccessModal={() => setSuccessOpen(true)} />}
            {isSuccessOpen && <RegisterSuccessModal onClose={() => setSuccessOpen(false)} openOtpModal={() => setOtpOpen(true)} />}
          </div>
        </div>
      </section>
    </>
  );
}
