import React from "react";
import Header from "../../component/part/Header";
import ContactForm from "../../component/form/ContactForm";
import { Link } from "react-router-dom";

export default function Contact() {

    return (
        <Header>
            <div className={"page-hero"}>
                <div className={"page-wrapper"}>
                    <div className={"hero-wrapper"}>
                        <h1>Contact Us</h1>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li className={"current-page"}>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"page-wrapper"}>
                <div className={"page-section"}>
                    <div className={"d-flex -g-25"}>
                        <div className={"item contact-page"}>
                            <div className={"address-box"}>
                                <div className={"address-card"}>
                                    <img src={`${window.location.origin}/content/svg/location-pointer.svg`} alt={""} />
                                    <div className={"-content w-100"}>
                                        <h4 className={"-title"}>Office Address</h4>
                                        <p className={"-details"}>
                                            3812 Lena Lane City Jackson<br/>
                                            Mississippi
                                        </p>
                                    </div>
                                </div>
                                <div className={"address-card"}>
                                    <img src={`${window.location.origin}/content/svg/phone-volume.svg`} alt={""} />
                                    <div className={"-content w-100"}>
                                        <h4 className={"-title"}>Phone Number</h4>
                                        <p className={"-details"}>601-594-3504</p>
                                    </div>
                                </div>
                                <div className={"address-card"}>
                                    <img src={`${window.location.origin}/content/svg/envelope.svg`} alt={""} />
                                    <div className={"-content w-100"}>
                                        <h4 className={"-title"}>Email</h4>
                                        <p className={"-details"}>support@example.net</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={"item"}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}