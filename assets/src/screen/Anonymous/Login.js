import React from "react";
import Header from "../../component/part/Header";
import LoginForm from "../../component/form/LoginForm";

export default function Login() {

    console.log(
        localStorage.getItem("token"),
        localStorage.getItem("token").length
    )

    return (
        <Header>
            <div className={"page-wrapper"}>
                <div className={"page-section"}>
                    <div className={"card"}>
                        <div className={"-content"}>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}