import React from "react";
import Header from "../../component/part/Header";
import { Link } from "react-router-dom";
import SubscribeForm from "../../component/form/SubscribeForm";
import Carrousel from "../../component/part/Carrousel";

export default function Overview() {

    return (
        <Header>
            {/* Page Header */}
            <div className={"page-hero"}>
                <div className={"page-wrapper"}>
                    <div className={"hero-wrapper"}>
                        <h1>Software Overview</h1>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li className={"current-page"}>Software Overview</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Software overview */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>Software overview</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                    
                    <Carrousel />
                </div>
            </div>

            {/* Subscribe */}
            <div className={"page-section bg-lightBlue"}>
                <div className={"page-wrapper"}>
                    <div className={"subscribe"}>
                        <div className={"-left"}>
                            <img src={`${window.location.origin}/content/img/newsletter.png`} alt={""} />
                        </div>
                        <div className={"-right"}>
                            <h2>Subscribe To Our Newsletter</h2>
                            <SubscribeForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* Members */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>Our experts</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={"d-grid -col-3"}>
                        <div className={"member"}>
                            <div className={"-member-photo"}>
                                <img className={"-photo"} src={`${window.location.origin}/content/img/1.jpg`} alt={""} />
                                
                                <div className={"social-links"}>
                                    <div className={"-links"}>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/facebook.svg`} alt={""} />
                                        </a>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/twitter.svg`} alt={""} />
                                        </a>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/instagram.svg`} alt={""} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={"-member-info"}>
                                <h4 className={"-name"}>Pabelo Twin</h4>
                                <span className={"-job"}>Visual Designer</span>
                            </div>
                        </div>
                        <div className={"member"}>
                            <div className={"-member-photo"}>
                                <img className={"-photo"} src={`${window.location.origin}/content/img/2.jpg`} alt={""} />
                                
                                <div className={"social-links"}>
                                    <div className={"-links"}>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/facebook.svg`} alt={""} />
                                        </a>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/twitter.svg`} alt={""} />
                                        </a>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/instagram.svg`} alt={""} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={"-member-info"}>
                                <h4 className={"-name"}>Angel Noore</h4>
                                <span className={"-job"}>Iso Developer</span>
                            </div>
                        </div>
                        <div className={"member"}>
                            <div className={"-member-photo"}>
                                <img className={"-photo"} src={`${window.location.origin}/content/img/3.jpg`} alt={""} />
                                
                                <div className={"social-links"}>
                                    <div className={"-links"}>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/facebook.svg`} alt={""} />
                                        </a>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/twitter.svg`} alt={""} />
                                        </a>
                                        <a className={"-link"} href={"#"}>
                                            <img src={`${window.location.origin}/content/svg/instagram.svg`} alt={""} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={"-member-info"}>
                                <h4 className={"-name"}>Jhon Smith</h4>
                                <span className={"-job"}>Android Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}