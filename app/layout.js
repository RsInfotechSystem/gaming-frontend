import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/dashboard.css";
import { Providers } from "./provider";
import ScrollToTop from "./ScrollToTop";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gaming web",
  description: "Play For Skill  ",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <ScrollToTop/>
            {children}
          
          </Providers>
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> */}
      </body>
    </html>
  );
}
