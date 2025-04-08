// components/layout/AdminLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./layout.scss";

export default function AdminLayout() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
