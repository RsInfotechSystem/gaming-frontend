import { Suspense } from 'react'
import UserNavbar from "../dashboard/UserNavbar";
import "../style/admin.css";
import Sidenav from './Sidenav';


export default function RootLayout({ children }) {
    return (
        <div className="root_wrapper">
            <Suspense>
                <UserNavbar />
                <Sidenav />
                <div className="routes_view">
                    {children}
                </div>
            </Suspense>
        </div>
    );
}