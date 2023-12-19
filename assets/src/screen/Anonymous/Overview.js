import React from "react";
import Header from "../../component/part/Header";
import { Link } from "react-router-dom";

export default function Overview() {

    return (
        <Header>
            <div className={"page-hero"}>
                <div className={"page-wrapper"}>
                    <div className={"hero-wrapper"}>
                        <h1>Overview</h1>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li className={"current-page"}>Overview</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"page-wrapper"}>
                Content
            </div>
        </Header>
    )
}