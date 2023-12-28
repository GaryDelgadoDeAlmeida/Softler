import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function HeaderAdmin(props) {

    const [isLogged, setIsLogged] = useState(localStorage.getItem("token").length > 0 ?? false)
    const handleLogout = (e) => {
        localStorage.setItem("token", "")
        setIsLogged(false)
    }

    return (
        <>
            {!isLogged && (
                <Navigate to={"/"} />
            )}

            <div className={"page"}>
                <div className={"page-header"}>
                    <nav className={"menu"}>
                        <li className={"-item"}><Link to={"/admin"}>Home</Link></li>
                        <li className={"-item"}><Link to={"/admin/profile"}>Profile</Link></li>
                        <li className={"-item"}><Link to={"/admin/page"}>Pages</Link></li>
                        <li className={"-item"}>
                            <button className={"btn btn-red"} onClick={(e) => handleLogout(e)}>Logout</button>
                        </li>
                    </nav>
                </div>
                <div className={"page-content"}>
                    <div className={"page-content-header desktop-hidden"}>
                        <div className={"-wrapper"}>
                            <input id={"bars"} type={"checkbox"} hidden />
                            <label className={"d-flex"} htmlFor={"bars"}>
                                <img src={`${window.location.origin}/content/svg/bars-staggered.svg`} alt={""} />
                            </label>
                            <nav className={"mobile-menu"}>
                                <li className={"-item"}><Link to={"/admin"}>Home</Link></li>
                                <li className={"-item"}><Link to={"/admin/profile"}>Profile</Link></li>
                                <li className={"-item"}><Link to={"/admin/page"}>Pages</Link></li>
                                <li className={"-item"}>
                                    <button className={"btn btn-red"} onClick={(e) => handleLogout(e)}>Logout</button>
                                </li>
                            </nav>
                        </div>
                    </div>
                    
                    <div className={"page-wrapper"}>{props.children}</div>
                    
                    <div className={"page-footer"}>
                        <div className={"footer-wrapper"}>
                            <div className={"footer-copyright"}>
                                <p>Copyright &copy; 2023 &minus; All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}