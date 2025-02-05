import { Suspense } from 'react'
import UserLeftSidebar from "../dashboard/UserLeftSidebar";
import UserNavbar from "../dashboard/UserNavbar";
import UserRightSidebar from './UserRightSidebar';
import "../style/dashboard.css";


export default function RootLayout({ children }) {
    return (
        <div className="root_wrapper">
            <Suspense>
                <UserNavbar />
                <UserLeftSidebar />
                <div className="routes_view">
                    {children}
                </div>
                <UserRightSidebar/>
            </Suspense>
        </div>
    );
}