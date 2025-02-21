"use client"
import { Suspense, useState } from 'react'
import UserLeftSidebar from "../dashboard/UserLeftSidebar";
import UserNavbar from "../dashboard/UserNavbar";
import UserRightSidebar from './UserRightSidebar';
import "../style/dashboard.css";


export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);
    return (
        <div className="root_wrapper">
            <Suspense>
                <UserNavbar openNav={openNav} />
                <UserLeftSidebar isOpen={isOpen} closeNav={closeNav} />
                <div className="tournament_main">
                    {children}
                </div>
                <UserRightSidebar/>
            </Suspense>
        </div>
    );
}