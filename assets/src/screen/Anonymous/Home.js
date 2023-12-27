import React from "react";
import Header from "../../component/part/Header";
import Carrousel from "../../component/part/Carrousel";
import ContactForm from "../../component/form/ContactForm";
import SubscribeForm from "../../component/form/SubscribeForm";
import CollapseList from "../../component/part/CollapseList";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <Header>
            {/* Header home */}
            <div className={"page-home-hero"}>
                <div className={"hero-wrapper page-wrapper"}>
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
                    <div className={"trust-banner"}>
                        <div className={"trust-banner-wrapper"}>
                            <div className={"-text"}>
                                <h3>We're Trusted By</h3>
                                <p>Join the <span className={"-number"}>200500+</span> Apps Trusting Landy</p>
                            </div>
                            <div className={"-bands"}>
                                <img src={`${window.location.origin}/content/img/client-1.png`} alt={""} />
                                <img src={`${window.location.origin}/content/img/client-2.png`} alt={""} />
                                <img src={`${window.location.origin}/content/img/client-3.png`} alt={""} />
                                <img src={`${window.location.origin}/content/img/client-4.png`} alt={""} />
                                <img src={`${window.location.origin}/content/img/client-5.png`} alt={""} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature */}
            <div className={"page-section page-feature"}>
                <div className={"feature"}>
                    <div className={"page-wrapper feature-wrapper"}>
                        <img className={"feature-left"} src={`${window.location.origin}/content/img/feature-left.png`} alt={""} />
                        
                        <div className={"feature-right"}>
                            <span className={"feature-suptitle"}>Our Features</span>
                            <h3 className={"feature-title"}>Landu Providing You The Best Features</h3>

                            <div className={"d-grid -col-2 -t-col-1"}>
                                <div className={"feature-card"}>
                                    <div className={"-header"}>
                                        <div className={"-bubble"}>
                                            <img src={`${window.location.origin}/content/svg/cloud-upload-white.svg`} alt={""} />
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <h3>Data In Cloud</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className={"feature-card"}>
                                    <div className={"-header"}>
                                        <div className={"-bubble"}>
                                            <img src={`${window.location.origin}/content/svg/id-card-white.svg`} alt={""} />
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <h3>Exclusive Design</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className={"feature-card"}>
                                    <div className={"-header"}>
                                        <div className={"-bubble"}>
                                            <img src={`${window.location.origin}/content/svg/support-white.svg`} alt={""} />
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <h3>Live Chat</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className={"feature-card"}>
                                    <div className={"-header"}>
                                        <div className={"-bubble"}>
                                            <img src={`${window.location.origin}/content/svg/comments-white.svg`} alt={""} />
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <h3>24/7 Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* App work / app demo */}
            <div className={"app-banner"}>
                <div className={"page-wrapper"}>
                    <div className={"app-banner-wrapper"}>
                        <span>80 +</span>
                        <span>500 +</span>
                        <span>1098 +</span>
                        <span>25 +</span>
                    </div>
                </div>
            </div>
            <div className={"page-section"}>
                <div className={"page-wrapper"}>
                    <div className={"app"}>
                        <div className={"app-img"}>
                            <img className={"app-logo"} src={`${window.location.origin}/content/img/wp-1.png`} alt={""} />
                            <img className={"rotation"} src={`${window.location.origin}/content/img/w-p.png`} alt={""} />
                        </div>
                        <div className={"app-intro"}>
                            <span className={"app-suptitle"}>Working progress</span>
                            <h3 className={"app-title"}>How Does This App Work?</h3>

                            <div className={"d-col -g-15"}>
                                <div className={"work-card"}>
                                    <div className={"-header"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/svg/file-lines.svg`} alt={""} />
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <h3>1. Download Free Trial!</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>
                                </div>
                                <div className={"work-card"}>
                                    <div className={"-header"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/svg/user-white.svg`} alt={""} />
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <h3>2. Make A Profile</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>
                                </div>
                                <div className={"work-card"}>
                                    <div className={"-header"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/svg/mobile_graphs-white.svg`} alt={""} />
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <h3>3. Enjoy The App</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Witness */}
            <div className={"page-section bg-lightBlue"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>What our client says ?</h2>
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={"carrousel"}>
                        <div className={"carrousel-wrapper"}>
                            <div className={"-items"}>
                                <div className={"client-card"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/img/user-1.png`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <h4>Jason Momoya</h4>
                                        <span>Developer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit, quos laboriosam nostrum. Autem, natus.</p>
                                    </div>
                                </div>
                                
                                <div className={"client-card"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/img/user-2.png`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <h4>Shaila Khanom</h4>
                                        <span>Designer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit, quos laboriosam nostrum. Autem, natus.</p>
                                    </div>
                                </div>
                                
                                <div className={"client-card"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/img/user-3.png`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <h4>Philt Jordan</h4>
                                        <span>Designer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit, quos laboriosam nostrum. Autem, natus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"-pagination"}>
                                <button className={"-button -active"}></button>
                                <button className={"-button"}></button>
                                <button className={"-button"}></button>
                            </div>
                        </div>
                    </div>

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

                    <Carrousel />
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
                    <small className={"page-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>

                    <div className={"d-grid -col-3 -t-col-2 -m-col-1"}>
                        <div className={"item"}>
                            <div className={"price"}>
                                <div className={"-sup-header"}>
                                    <span>Basic</span>
                                </div>
                                <div className={"-header"}>
                                    <div className={"-icon"}>
                                        <img src={`${window.location.origin}/content/svg/server-white.svg`} alt={""} />
                                    </div>
                                </div>
                                <div className={"-content"}>
                                    <div className={"-amount"}>
                                        <span>$130</span>
                                        <span>per month</span>
                                    </div>
                                    <div className={"-description"}>
                                        <li>Business Analyzing</li>
                                        <li>24/7 Tech Suport</li>
                                        <li>Operational Excellence</li>
                                        <li>Knowledge Management</li>
                                        <li>Business Idea Ready</li>
                                    </div>
                                </div>
                                <div className={"-footer"}>
                                    <Link className={"btn btn-outline-white fz-16 f-bold"} to={"#"}>Choice Plan</Link>
                                </div>
                            </div>
                        </div>
                        <div className={"item"}>
                            <div className={"price -even"}>
                                <div className={"-sup-header"}>
                                    <span>Standard</span>
                                </div>
                                <div className={"-header"}>
                                    <div className={"-icon -even"}>
                                        <img src={`${window.location.origin}/content/svg/gearwheel-white.svg`} alt={""} />
                                    </div>
                                </div>
                                <div className={"-content"}>
                                    <div className={"-amount"}>
                                        <span>$150</span>
                                        <span>per month</span>
                                    </div>
                                    <div className={"-description"}>
                                        <li>Business Analyzing</li>
                                        <li>24/7 Tech Suport</li>
                                        <li>Next Generation Accounting</li>
                                        <li>Online Staff Training Sessions</li>
                                        <li>Business Idea Ready</li>
                                        <li>20 Database</li>
                                    </div>
                                </div>
                                <div className={"-footer"}>
                                    <Link className={"btn btn-outline-white fz-16 f-bold"} to={"#"}>Choice Plan</Link>
                                </div>
                            </div>
                        </div>
                        <div className={"item"}>
                            <div className={"price"}>
                                <div className={"-sup-header"}>
                                    <span>Premium</span>
                                </div>
                                <div className={"-header"}>
                                    <div className={"-icon"}>
                                        <img src={`${window.location.origin}/content/svg/settings-white.svg`} alt={""} />
                                    </div>
                                </div>
                                <div className={"-content"}>
                                    <div className={"-amount"}>
                                        <span>$180</span>
                                        <span>per month</span>
                                    </div>
                                    <div className={"-description"}>
                                        <li>Digital Transformation</li>
                                        <li>24/7 Tech Suport</li>
                                        <li>Supply Chain Optimization</li>
                                        <li>E-mail support</li>
                                        <li>Business Idea Ready</li>
                                        <li>Unlimited Database</li>
                                        <li>Customer Support</li>
                                    </div>
                                </div>
                                <div className={"-footer"}>
                                    <Link className={"btn btn-outline-white fz-16 f-bold"} to={"#"}>Choice Plan</Link>
                                </div>
                            </div>
                        </div>
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

                    <div className={"d-grid -col-3"}>
                        <div className={"news-card"}>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/img/1(1).jpg`} alt={""} />
                            </div>
                            <div className={"-content"}>
                                <div className={"d-flex -row"}>
                                    <div className={"item d-flex -row -g-10"}>
                                        <img src={`${window.location.origin}/content/svg/calendar-days.svg`} alt={""} />
                                        <span>April 06, 2023</span>
                                    </div>
                                    <div className={"item d-flex -row -g-10"}>
                                        <img src={`${window.location.origin}/content/svg/comments.svg`} alt={""} />
                                        <span>26 Comments</span>
                                    </div>
                                </div>
                                <h4 className={"-title"}>Cotton Candy Muffin Marzipan Carrot</h4>
                                <div className={"-author"}>
                                    <img src={`${window.location.origin}/content/img/user-1.png`} alt={""} />
                                    <div className={"-name"}>
                                        <span>Claive Moore</span>
                                        <span>Admin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"news-card"}>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/img/2(1).jpg`} alt={""} />
                            </div>
                            <div className={"-content"}>
                                <div className={"d-flex -row"}>
                                    <div className={"item d-flex -row -g-10"}>
                                        <img src={`${window.location.origin}/content/svg/calendar-days.svg`} alt={""} />
                                        <span>April 06, 2023</span>
                                    </div>
                                    <div className={"item d-flex -row -g-10"}>
                                        <img src={`${window.location.origin}/content/svg/comments.svg`} alt={""} />
                                        <span>26 Comments</span>
                                    </div>
                                </div>
                                <h4 className={"-title"}>Cake Lemon Drops Chocolate Cake Icing</h4>
                                <div className={"-author"}>
                                    <img src={`${window.location.origin}/content/img/user-2.png`} alt={""} />
                                    <div className={"-name"}>
                                        <span>Claive Moore</span>
                                        <span>Admin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"news-card"}>
                            <div className={"-header"}>
                                <img src={`${window.location.origin}/content/img/3(1).jpg`} alt={""} />
                            </div>
                            <div className={"-content"}>
                                <div className={"d-flex -row"}>
                                    <div className={"item d-flex -row -g-10"}>
                                        <img src={`${window.location.origin}/content/svg/calendar-days.svg`} alt={""} />
                                        <span>April 06, 2023</span>
                                    </div>
                                    <div className={"item d-flex -row -g-10"}>
                                        <img src={`${window.location.origin}/content/svg/comments.svg`} alt={""} />
                                        <span>26 Comments</span>
                                    </div>
                                </div>
                                <h4 className={"-title"}>Jujubes Tart Fruitcake Tart Bonbon Chocolate Cake</h4>
                                <div className={"-author"}>
                                    <img src={`${window.location.origin}/content/img/user-3.png`} alt={""} />
                                    <div className={"-name"}>
                                        <span>Claive Moore</span>
                                        <span>Admin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact form */}
            <div className={"page-section page-contact"}>
                <div className={"page-wrapper"}>
                    <div className={"contact-card"}>
                        <div className={"-left"}>
                            <span className={"-suptitle"}>Contact us</span>
                            <h3 className={"-title"}>Have Any Query?</h3>
                            
                            <ContactForm />
                        </div>
                        <div className={"-right"}>
                            <img src={`${window.location.origin}/content/img/contact-pic.png`} alt={""} />
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}