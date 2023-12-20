import axios from "axios";
import React, { useRef } from "react";

export default function SubscribeForm() {

    let credentials = useRef({
        email: ""
    })

    const handleChange = (e) => {
        credentials.current = {
            ...credentials.current,
            email: e.target.value
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${window.location.origin}/api/subscribe`, credentials, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        ;
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field"}>
                <input className={"bg-transparent"} type={"email"} maxLength={255} onChange={(e) => handleChange(e)} required />
            </div>
            <div className={"form-button txt-left-important"}>
                <button type={"submit"} className={"btn btn-violet-blue fz-18 h-50px"}>Subscribe</button>
            </div>
        </form>
    )
}