import { Suspense } from 'react'
import UserNavbar from "../dashboard/UserNavbar";
import "../style/admin.css";
import Sidenav from './Sidenav';
import TopHeader from './TopHeader';


export default function RootLayout({ children }) {
    return (
        <div className="root_wrapper">
            <Suspense>
                <TopHeader />
                <Sidenav />
                <div className="routes_view">
                    {children}
                </div>
            </Suspense>
        </div>
    );
}