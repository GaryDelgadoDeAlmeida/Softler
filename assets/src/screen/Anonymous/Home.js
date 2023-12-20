import React from "react";
import Header from "../../component/part/Header";
import ContactForm from "../../component/form/ContactForm";
import SubscribeForm from "../../component/form/SubscribeForm";
import CollapseList from "../../component/part/CollapseList";

export default function Home() {

    return (
        <Header>
            <div className={"hero"}>
                <div className={"hero-wrapper"}>
                    <div className={"-left"}>
                        <h1 className={"-title"}>World Famous App<br />Service Provider.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        
                        <div className={"d-flex -g-25"}>
                            <a className={"btn btn-violet-blue -inline-flex -g-10 h-50px w-150px"} href={"#"} target={"_blank"}>
                                <img src={`${window.location.origin}/content/img/icon/apple-logo.png`} />
                                <div className={"d-col -g-5 w-100 txt-left"}>
                                    <small className={"fz-10"}>Download on The</small>
                                    <h6 className={"fz-16 m-0"}>App Store</h6>
                                </div>
                            </a>
                            
                            <a className={"btn btn-violet-blue -inline-flex -g-10 h-50px w-150px"} href={"#"} target={"_blank"}>
                                <img src={`${window.location.origin}/content/img/icon/google-logo.png`} />
                                <div className={"d-col -g-5 w-100 txt-left"}>
                                    <small className={"fz-10"}>Download on The</small>
                                    <h6 className={"fz-16 m-0"}>Google Play</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className={"-right"}>
                        <img src={`${window.location.origin}/content/img/hdr-right.png`} alt={""} />
                    </div>
                </div>
            </div>
            
            {/* Trust banner */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <div className={"trust-banner"}></div>
                </div>
            </div>

            {/* Feature */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <div className={"d-flex"}>
                        <div className={"item"}></div>
                        <div className={"item"}></div>
                    </div>
                </div>
            </div>

            {/* App work / app demo */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}></div>
            </div>

            {/* Witness */}
            <div className={"page-section bg-lightBlue"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>What our client says ?</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={""}></div>

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

            {/* Software overview */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>Software overview</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={"carrousel"}></div>
                </div>
            </div>

            {/* FAQ */}
            <div className={"page-section bg-lightBlue"}>
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

            {/* Pricing table */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>Pricing table</h2>
                    <small className={"page-subtitle"}></small>

                    <div className={"d-col -col-3"}>
                        <div className={"price"}></div>
                        <div className={"price"}></div>
                        <div className={"price"}></div>
                    </div>
                </div>
            </div>

            {/* Members */}
            <div className={"page-section bg-lightBlue"}>
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

            {/* Latest news */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>Latest news</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={"d-col -col-3"}>
                        <div className={"news-card"}>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/img/1(1).jpg`} alt={""} />
                            </div>
                            <div className={"-content"}></div>
                        </div>
                        <div className={"news-card"}>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/img/2(1).jpg`} alt={""} />
                            </div>
                            <div className={"-content"}></div>
                        </div>
                        <div className={"news-card"}>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/img/3(1).jpg`} alt={""} />
                            </div>
                            <div className={"-content"}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact form */}
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <div className={"card"}>
                        <div className={"d-flex -g-25"}>
                            <div className={"item"}>
                                <ContactForm />
                            </div>
                            
                            <div className={"item"}>
                                <img src={`${window.location.origin}/content/img/contact-pic.png`} alt={""} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}