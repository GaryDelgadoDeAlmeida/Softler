import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/part/Header";
import SearchForm from "../../component/form/SearchForm";
import CommentForm from "../../component/form/CommentForm";

export default function BlogSingle() {

    return (
        <Header>
            <div className={"page-hero"}>
                <div className={"page-wrapper"}>
                    <div className={"hero-wrapper"}>
                        <h1>Blog Details</h1>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                            <li className={"current-page"}>Blog Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={"page-section bg-lightBlue"}>
                <div className={"page-wrapper"}>
                    <div className={"d-flex -g-25"}>
                        
                        {/* Left column */}
                        <div className={"w-100"}>
                            
                            {/* Blog article */}
                            <div className={"blog-card"}>
                                <div className={"blog-wrapper"}>
                                    <div className={"-header"}>
                                        <img className={"blog-img"} src={`${window.location.origin}/content/img/proj.jpeg`} alt={""} />
                                        <h3 className={"-title"}>Sesame snaps cake marzipan chocolate bar dessert.</h3>
                                        <div className={"-blog-intro"}>
                                            <div className={"-reactions item"}>
                                                <div className={"-item"}>
                                                    <img src={`${window.location.origin}/content/svg/calendar-days.svg`} alt={""} />
                                                    <span>28 February 2023</span>
                                                </div>
                                                <div className={"-item"}>
                                                    <img src={`${window.location.origin}/content/svg/comments.svg`} alt={""} />
                                                    <span>23 comments</span>
                                                </div>
                                                <div className={"-item"}>
                                                    <img src={`${window.location.origin}/content/svg/thumbs-up.svg`} alt={""} />
                                                    <span>25 likes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"-content"}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        <div className={"-tags d-flex"}>
                                            <h4>Tags</h4>
                                            <div className={"d-flex -wrap -g-15 mobile-m-t-15"}>
                                                <div className={"badge"}><span>Themes</span></div>
                                                <div className={"badge"}><span>Business</span></div>
                                                <div className={"badge"}><span>Consult</span></div>
                                                <div className={"badge"}><span>Organic</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className={"widget-card"}>
                                <div className={"-header"}>
                                    <h3 className={"-title"}>Comments</h3>
                                    <hr />
                                </div>
                                <div className={"-content"}>
                                    <div className={"comment"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/img/user-1.png`} alt={""} />
                                        </div>
                                        <div className={"-user-message"}>
                                            <h4 className={"-name"}>Andrew R. Huskey</h4>
                                            <p className={"-message"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        </div>
                                    </div>
                                    
                                    <div className={"comment"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/img/user-2.png`} alt={""} />
                                        </div>
                                        <div className={"-user-message"}>
                                            <h4 className={"-name"}>Andrew R. Huskey</h4>
                                            <p className={"-message"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        </div>
                                    </div>
                                    
                                    <div className={"comment"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/img/user-3.png`} alt={""} />
                                        </div>
                                        <div className={"-user-message"}>
                                            <h4 className={"-name"}>Andrew R. Huskey</h4>
                                            <p className={"-message"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        </div>
                                    </div>
                                    
                                    <div className={""}>
                                        <h4>Leave a reply</h4>
                                        <CommentForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right column */}
                        <div className={"w-40 mobile-w-100"}>
                            
                            {/* Search Form */}
                            <div className={"widget-card"}>
                                <div className={"-header"}>
                                    <h3 className={"-title"}>Search</h3>
                                    <hr />
                                </div>
                                <div className={"-content"}>
                                    <SearchForm />
                                </div>
                            </div>

                            {/* Category */}
                            <div className={"widget-card"}>
                                <div className={"-header"}>
                                    <h3 className={"-title"}>Category</h3>
                                    <hr />
                                </div>
                                <div className={"-content"}>
                                    <div className={"category"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/svg/file-lines.svg`} alt={""} />
                                        </div>
                                        <label>Wordpress</label>
                                    </div>
                                    <div className={"category"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/svg/file-lines.svg`} alt={""} />
                                        </div>
                                        <label>HTML / CSS / SASS</label>
                                    </div>
                                    <div className={"category"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/svg/file-lines.svg`} alt={""} />
                                        </div>
                                        <label>Laravel</label>
                                    </div>
                                    <div className={"category"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/svg/file-lines.svg`} alt={""} />
                                        </div>
                                        <label>Graphic Design</label>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Recent posts */}
                            <div className={"widget-card"}>
                                <div className={"-header"}>
                                    <h3 className={"-title"}>Recent posts</h3>
                                    <hr />
                                </div>
                                <div className={"-content"}>
                                    <div className={"recent-post"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/img/de-1.jpeg`} alt={""} />
                                        </div>
                                        <div className={"-post-bio"}>
                                            <label className={"-title"}>Expressive, beautiful UI Design</label>
                                            <div className={"-publish-date"}>
                                                <img className={"-img"} src={`${window.location.origin}/content/svg/user.svg`} alt={""} />
                                                <span className={"-date"}>01 March, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"recent-post"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/img/de-2.jpeg`} alt={""} />
                                        </div>
                                        <div className={"-post-bio"}>
                                            <label className={"-title"}>Expressive, beautiful UI Design</label>
                                            <div className={"-publish-date"}>
                                                <img className={"-img"} src={`${window.location.origin}/content/svg/user.svg`} alt={""} />
                                                <span className={"-date"}>01 March, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"recent-post"}>
                                        <div className={"-image"}>
                                            <img src={`${window.location.origin}/content/img/de-1.jpeg`} alt={""} />
                                        </div>
                                        <div className={"-post-bio"}>
                                            <label className={"-title"}>Expressive, beautiful UI Design</label>
                                            <div className={"-publish-date"}>
                                                <img className={"-img"} src={`${window.location.origin}/content/svg/user.svg`} alt={""} />
                                                <span className={"-date"}>01 March, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tags */}
                            <div className={"widget-card"}>
                                <div className={"-header"}>
                                    <h3 className={"-title"}>Tags</h3>
                                    <hr />
                                </div>
                                <div className={"-content"}>
                                    <div className={"d-flex -wrap -g-15"}>
                                        <div className={"badge"}><span>Web development</span></div>
                                        <div className={"badge"}><span>React</span></div>
                                        <div className={"badge"}><span>Mobile Apps</span></div>
                                        <div className={"badge"}><span>Admin Pannel</span></div>
                                        <div className={"badge"}><span>HTML / CSS / SASS</span></div>
                                        <div className={"badge"}><span>Symfony</span></div>
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