import React from "react";

export default function ProfileForm() {

    const handleChange = (e, fieldName) => {}

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field-inline"}>
                <div className={"form-field"}>
                    <input type={"text"} maxLength={255} placeholder={"Firstname"} onChange={(e) => handleChange(e, "firstname")} />
                </div>
                
                <div className={"form-field"}>
                    <input type={"text"} maxLength={255} placeholder={"Lastname"} onChange={(e) => handleChange(e, "lastname")} />
                </div>
            </div>
            
            <div className={"form-field"}>
                <input type={"email"} maxLength={255} placeholder={"Email"} disabled />
            </div>
            
            <div className={"form-field"}>
                <input type={"password"} maxLength={255} minLength={8} placeholder={"Password"} />
            </div>
            
            <div className={"form-button"}>
                <button type={"submit"} className={"btn btn-blue fz-16"}>Submit</button>
            </div>
        </form>
    )
}