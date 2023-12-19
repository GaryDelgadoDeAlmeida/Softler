import React from "react";
import Header from "../../component/part/Header";
import { Link } from "react-router-dom";

export default function Feature() {

    return (
        <Header>
            <div className={"page-hero"}>
                <div className={"page-wrapper"}>
                    <div className={"hero-wrapper"}>
                        <h1>Our Features</h1>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li className={"current-page"}>Our Features</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>OUR FEATURES</h2>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                    <div className={"d-flex -g-25"}>
                        <div className={"card"}></div>
                        <div className={"card"}></div>
                        <div className={"card"}></div>
                    </div>
                </div>
            </div>

            <div className={"page-section bg-lightBlue"}>
                <div className={"page-wrapper"}>
                    <div className={"d-flex"}>
                        <img src={`${window.location.origin}/content/img/newsletter.png`} alt={""} />
                        <div className={""}>
                            <h2>Subscribe To Our Newsletter</h2>
                            
                            <form className={"form"}>
                                <div className={"form-field"}>
                                    <input type={"text"} />
                                </div>
                                <div className={"form-button"}>
                                    <button className={"btn btn-violet-blue -inline-flex -g-10 fz-18 h-50px"} type={"submit"}>
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>FAQ</h2>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={"d-flex"}>
                        <div className={""}></div>
                        <img src={`${window.location.origin}/content/img/logo.png`} alt={""} />
                    </div>
                </div>
            </div>
        </Header>
    )
}