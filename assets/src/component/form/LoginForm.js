import axios from "axios";
import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginForm() {
    
    const [isLogged, setIsLogged] = useState(localStorage.getItem("token").length > 0 ?? false)
    let credentials = useRef({
        email: "",
        password: ""
    })

    const handleChange = (e, fieldName) => {
        credentials.current = {
            ...credentials.current,
            [fieldName]: e.target.value
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${window.location.origin}/api/login_check`, credentials.current, {
                headers: {
                    "Accept": "application/json+ld",
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                console.log(
                    response,
                    response.data,
                    response.data.token,
                )

                localStorage.setItem("token", response.data.token)
                setIsLogged(true)
            })
            .catch((error) => {
                console.log(
                    error,
                    error.response,
                    error.response.data
                )
            })
        ;
    }

    return (
        <>
            {isLogged && (
                <Navigate to={"/admin"} />
            )}
            <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
                <div className={"form-field"}>
                    <input type={"email"} maxLength={255} placeholder={"Username"} onChange={(e) => handleChange(e, "email")} required />
                </div>
                <div className={"form-field"}>
                    <input type={"password"} placeholder={"Password"} onChange={(e) => handleChange(e, "password")} required />
                </div>
                <div className={"form-buttom"}>
                    <button className={"btn btn-blue fz-16"} type={"submit"}>Submit</button>
                </div>
            </form>
        </>
    )
}