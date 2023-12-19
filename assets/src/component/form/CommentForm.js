import React, { useRef } from "react";

export default function CommentForm() {

    const credentials = useRef({
        fullname: "",
        email: "",
        comment: ""
    })

    const handleChange = (e, fieldName) => {
        credentials.current = {
            ...credentials.current,
            [fieldName]: e.target.value
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field-inline"}>
                <div className={"form-field"}>
                    <input type={"text"} placeholder={"Your Name"} onChange={(e) => handleChange(e, "fullname")} required />
                </div>
                
                <div className={"form-field"}>
                    <input type={"email"} placeholder={"Your Email"} onChange={(e) => handleChange(e, "email")} required />
                </div>
            </div>
            
            <div className={"form-field"}>
                <textarea className={"h-200px"} placeholder={"Your Comment"} onChange={(e) => handleChange(e, "comment")} required></textarea>
            </div>
            
            <div className={"form-button txt-left-important"}>
                <button className={"btn btn-violet fz-16"}>Submit</button>
            </div>
        </form>
    )
}