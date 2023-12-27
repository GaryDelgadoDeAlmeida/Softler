import React from "react";
import Header from "../component/part/Header";
import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <Header>
            <div className={"page-wrapper"}>
                <div className={"page-section"}>
                    <h1 className={"page-title txt-left-important"}>PAGE NOT FOUND</h1>
                    <p>The page you are looking don't exist</p>
                    <Link className={"btn btn-violet fz-16"} to={"/"}>Home</Link>
                </div>
            </div>
        </Header>
    )
}