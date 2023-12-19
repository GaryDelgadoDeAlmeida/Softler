import React from "react";
import { Route, Routes } from "react-router-dom";

// Anonymous
import Home from "./Anonymous/Home"
import Overview from "./Anonymous/Overview"
import Feature from "./Anonymous/Feature"
import Blog from "./Anonymous/Blog"
import BlogSingle from "./Anonymous/BlogSingle"
import Contact from "./Anonymous/Contact"

// Common
import NotFound from "./NotFound"

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
                
                {/* Admin */}

                {/* Common */}
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </>
    )
}