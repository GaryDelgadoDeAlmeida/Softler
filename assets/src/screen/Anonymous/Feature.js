import React from "react";
import Header from "../../component/part/Header";
import { Link } from "react-router-dom";
import SubscribeForm from "../../component/form/SubscribeForm";
import CollapseList from "../../component/part/CollapseList";

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
            
            {/* Features */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>OUR FEATURES</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                    
                    <div className={"d-flex -g-25"}>
                        <div className={"card item"}>
                            <div className={"-banner"}></div>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/svg/dashboard-monitoring.svg`} alt={""} />
                            </div>
                            <div className={"-content"}>
                                <h3 className={"-title"}>Exclusive Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, incidunt.</p>
                            </div>
                            <div className={"-shape"}>
                                <img src={`${window.location.origin}/content/img/shape-3.png`} alt={""} />
                            </div>
                        </div>
                        
                        <div className={"card item"}>
                            <div className={"-banner"}></div>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/svg/web.svg`} alt={""} />
                            </div>
                            <div className={"-content"}>
                                <h3 className={"-title"}>Cloud Data</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, incidunt.</p>
                            </div>
                            <div className={"-shape"}>
                                <img src={`${window.location.origin}/content/img/shape-3.png`} alt={""} />
                            </div>
                        </div>
                        
                        <div className={"card item"}>
                            <div className={"-banner"}></div>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/svg/user-male.svg`} alt={""} />
                            </div>
                            <div className={"-content"}>
                                <h3 className={"-title"}>24/7 Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, incidunt.</p>
                            </div>
                            <div className={"-shape"}>
                                <img src={`${window.location.origin}/content/img/shape-3.png`} alt={""} />
                            </div>
                        </div>
                    </div>
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

            {/* FAQ */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>FAQ</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={"faq"}>
                        <div className={"-left"}>
                            <CollapseList />
                        </div>
                        <div className={"-right"}>
                            <img src={`${window.location.origin}/content/img/FAQs-amico.png`} alt={""} />
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}