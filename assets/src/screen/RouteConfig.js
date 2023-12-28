import React from "react";
import { Route, Routes } from "react-router-dom";

// Anonymous
import Home from "./Anonymous/Home"
import Overview from "./Anonymous/Overview"
import Feature from "./Anonymous/Feature"
import Blog from "./Anonymous/Blog"
import BlogSingle from "./Anonymous/BlogSingle"
import Contact from "./Anonymous/Contact"

// Admin
import AdminHome from "./Admin/Home"
import AdminProfile from "./Admin/Profile"
import AdminPage from "./Admin/Page"

// Common
import NotFound from "./NotFound"
import Login from "./Anonymous/Login";

export default function RouteConfig() {

    return (
        <>
            <Routes>
                {/* Anonymous */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/overview"} element={<Overview />} />
                <Route path={"/feature"} element={<Feature />} />
                <Route path={"/blog"} element={<Blog />} />
                <Route path={"/blog/:id"} element={<BlogSingle />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/login"} element={<Login />} />
                
                {/* Admin */}
                <Route path={"/admin"} element={<AdminHome />} />
                <Route path={"/admin/profile"} element={<AdminProfile />} />
                <Route path={"/admin/page"} element={<AdminPage />} />

                {/* Common */}
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </>
    )
}