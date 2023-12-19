import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

    const handleScroll = (e) => {
        console.log("HI")

        if(window.scrollY == 0){
        //user scrolled to the top of the page
        }
        
        if(window.scrollX == 0){
        //user scrolled to the leftmost part of the page
        }
        
        if(window.scrollY == 0 && window.scrollX == 0){
            //user scrolled to the leftmost part of the top of the page—i.e., they are at position (0, 0)
        }
    }

    return (
        <div className={"page"}>
            <div className={"page-header"}>
                <div className={"header-wrapper"}>
                    <div className={"logo"}>
                        <img src={`${window.location.origin}/content/img/logo.png`} alt={"logo"} />
                    </div>
                    <nav className={"menu"}>
                        <li className={"-item"}><Link to={"/"}>Home</Link></li>
                        <li className={"-item"}><Link to={"/overview"}>Overview</Link></li>
                        <li className={"-item"}><Link to={"/feature"}>Features</Link></li>
                        <li className={"-item"}><Link to={"/blog"}>Blog</Link></li>
                        <li className={"-item"}><Link to={"/contact"}>Contact</Link></li>
                    </nav>
                </div>
            </div>
            
            <div className={"page-content"} onScroll={(e) => handleScroll(e)}>
                {props.children}
            </div>
            
            <div className={"page-footer"}>
                <div className={"footer-wrapper"}>
                    <div className={"footer-widget"}>
                        <div className={"footer-links"}>
                            <div className={"footer-group"}>
                                <div className={"-title txt-left"}>
                                    <img src={`${window.location.origin}/content/img/logo-white.png`} alt={""} />
                                </div>
                                
                                <p className={"txt-left"}>Affronting discretion as do is announcing. Now months esteem oppose nearer.</p>
                                
                                <div className={"social-links"}>
                                    <a className={"-link"} href={"#"} target={"_blank"}>
                                        <img src={`${window.location.origin}/content/svg/facebook.svg`} alt={""} />
                                    </a>
                                    <a className={"-link"} href={"#"} target={"_blank"}>
                                        <img src={`${window.location.origin}/content/svg/instagram.svg`} alt={""} />
                                    </a>
                                    <a className={"-link"} href={"#"} target={"_blank"}>
                                        <img src={`${window.location.origin}/content/svg/twitter.svg`} alt={""} />
                                    </a>
                                    <a className={"-link"} href={"#"} target={"_blank"}>
                                        <img src={`${window.location.origin}/content/svg/youtube.svg`} alt={""} />
                                    </a>
                                </div>
                            </div>
                            <div className={"footer-group"}>
                                <h4 className={"-title"}>Usefull Links</h4>
                                <div className={"links"}>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>About Us</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Our Product</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Our Blog</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Contact Us</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Become a Member</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={"footer-group"}>
                                <h4 className={"-title"}>Help & Support</h4>
                                <div className={"links"}>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>About Us</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Our Product</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Our Blog</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Contact Us</span>
                                    </Link>
                                    <Link className={"-link"} to={"/about"}>
                                        <img src={`${window.location.origin}/content/svg/arrow-right-long.svg`} alt={""} />
                                        <span>Become a Member</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={"footer-group"}>
                                <h4 className={"-title"}>Download App</h4>
                                <div className={"download-links"}>
                                    <a className={"btn btn-outland-white -inline-flex -g-10 h-50px w-150px"} href={"#"} target={"_blank"}>
                                        <img src={`${window.location.origin}/content/img/icon/apple-logo.png`} />
                                        <div className={"d-col -g-5 w-100 txt-left"}>
                                            <small className={"fz-10"}>Download on The</small>
                                            <h6 className={"fz-16 m-0"}>App Store</h6>
                                        </div>
                                    </a>
                                    
                                    <a className={"btn btn-outland-white -inline-flex -g-10 h-50px w-150px"} href={"#"} target={"_blank"}>
                                        <img src={`${window.location.origin}/content/img/icon/google-logo.png`} />
                                        <div className={"d-col -g-5 w-100 txt-left"}>
                                            <small className={"fz-10"}>Download on The</small>
                                            <h6 className={"fz-16 m-0"}>Google Play</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={"footer-copyright"}>
                            <p>Copyright &copy; 2023 &minus; All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}