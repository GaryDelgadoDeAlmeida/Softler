import React from "react";
import Header from "../../component/part/Header";
import { Link } from "react-router-dom";

export default function Blog() {

    return (
        <Header>
            <div className={"page-hero"}>
                <div className={"page-wrapper"}>
                    <div className={"hero-wrapper"}>
                        <h1>Blog</h1>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li className={"current-page"}>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"page-section bg-lightBlue"}>
                <div className={"page-wrapper"}>
                    <div className={"w-100 m-auto"}>
                        <div className={"blog-card"}>
                            <div className={"blog-wrapper"}>
                                <div className={"-header"}>
                                    <img className={"blog-img"} src={`${window.location.origin}/content/img/proj.jpeg`} alt={""} />
                                    <h3 className={"-title"}>Sesame snaps cake marzipan chocolate bar dessert.</h3>
                                    
                                    <div className={"-blog-intro"}>
                                        <div className={"-profile item"}>
                                            <img src={`${window.location.origin}/content/img/user-1-s.png`} alt={""} />
                                            <div className={"d-col -g-5"}>
                                                <span className={"-fullname"}>Christian Bale</span>
                                                <span className={"-role"}>Admin</span>
                                            </div>
                                        </div>
                                        
                                        <div className={"-reactions item"}>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/calendar-days.svg`} alt={""} />
                                                <span>28 February 2023</span>
                                            </div>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/comments.svg`} alt={""} />
                                                <span>23</span>
                                            </div>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/thumbs-up.svg`} alt={""} />
                                                <span>25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"-content"}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aspernatur voluptates quasi accusantium minima magni officia dolores possimus in dolorum deserunt quas, qui culpa, praesentium, saepe iste debitis exercitationem! Ipsa!</p>
                                    
                                    <div className={"-links"}>
                                        <Link className={"btn btn-violet-blue fz-16"} to={"/blog/1"}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={"blog-card"}>
                            <div className={"blog-wrapper"}>
                                <div className={"-header"}>
                                    <img className={"blog-img"} src={`${window.location.origin}/content/img/serv.jpeg`} alt={""} />
                                    <h3 className={"-title"}>Sesame snaps cake marzipan chocolate bar dessert.</h3>
                                    
                                    <div className={"-blog-intro"}>
                                        <div className={"-profile item"}>
                                            <img src={`${window.location.origin}/content/img/user-1-s.png`} alt={""} />
                                            <div className={"d-col -g-5"}>
                                                <span className={"-fullname"}>Christian Bale</span>
                                                <span className={"-role"}>Admin</span>
                                            </div>
                                        </div>
                                        
                                        <div className={"-reactions"}>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/calendar-days.svg`} alt={""} />
                                                <span>28 February 2023</span>
                                            </div>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/comments.svg`} alt={""} />
                                                <span>23</span>
                                            </div>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/thumbs-up.svg`} alt={""} />
                                                <span>25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"-content"}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aspernatur voluptates quasi accusantium minima magni officia dolores possimus in dolorum deserunt quas, qui culpa, praesentium, saepe iste debitis exercitationem! Ipsa!</p>
                                    
                                    <div className={"-links"}>
                                        <Link className={"btn btn-violet-blue fz-16"} to={"/blog/1"}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={"blog-card"}>
                            <div className={"blog-wrapper"}>
                                <div className={"-header"}>
                                    <img className={"blog-img"} src={`${window.location.origin}/content/img/single-content-img.jpeg`} alt={""} />
                                    <h3 className={"-title"}>Sesame snaps cake marzipan chocolate bar dessert.</h3>
                                    
                                    <div className={"-blog-intro"}>
                                        <div className={"-profile item"}>
                                            <img src={`${window.location.origin}/content/img/user-1-s.png`} alt={""} />
                                            <div className={"d-col -g-5"}>
                                                <span className={"-fullname"}>Christian Bale</span>
                                                <span className={"-role"}>Admin</span>
                                            </div>
                                        </div>
                                        
                                        <div className={"-reactions"}>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/calendar-days.svg`} alt={""} />
                                                <span>28 February 2023</span>
                                            </div>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/comments.svg`} alt={""} />
                                                <span>23</span>
                                            </div>
                                            <div className={"-item"}>
                                                <img src={`${window.location.origin}/content/svg/thumbs-up.svg`} alt={""} />
                                                <span>25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"-content"}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aspernatur voluptates quasi accusantium minima magni officia dolores possimus in dolorum deserunt quas, qui culpa, praesentium, saepe iste debitis exercitationem! Ipsa!</p>
                                    
                                    <div className={"-links"}>
                                        <Link className={"btn btn-violet-blue fz-16"} to={"/blog/1"}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}