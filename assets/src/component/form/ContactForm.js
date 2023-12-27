import React, { useRef } from "react"

export default function ContactForm() {

    let credentials = useRef({
        fullname: "",
        email: "",
        phone: "",
        website: "",
        message: ""
    })

    const handleChange = (e, fieldName) => {
        let fieldValue = e.target.value

        credentials.current = {
            ...credentials.current,
            [fieldName]: fieldValue
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field-inline"}>
                <div className={"form-field"}>
                    <input 
                        type={"text"} 
                        maxLength={255} 
                        placeholder={"Your Full Name"}
                        onChange={(e) => handleChange(e, "fullname")} 
                        required
                    />
                </div>
                
                <div className={"form-field"}>
                    <input
                        type={"email"}
                        maxLength={255}
                        placeholder={"Your Email Address"}
                        onChange={(e) => handleChange(e, "email")}
                        required
                    />
                </div>
            </div>
            <div className={"form-field-inline"}>
                <div className={"form-field"}>
                    <input 
                        type={"tel"} 
                        maxLength={20}
                        placeholder={"Phone number"}
                        onChange={(e) => handleChange(e, "phone")}
                        required={false}
                    />
                </div>
                
                <div className={"form-field"}>
                    <input 
                        type={"url"} 
                        maxLength={255}
                        placeholder={"Your Website Link"}
                        onChange={(e) => handleChange(e, "website")}
                        required={false}
                    />
                </div>
            </div>

            <div className={"form-field"}>
                <textarea className={"h-150px"} maxLength={1000} placeholder={"Your Message..."} onChange={(e) => handleChange(e, "message")}></textarea>
            </div>
            
            <div className={"form-button"}>
                <button type={"submit"} className={"btn btn-violet-blue -inline-flex -g-10 fz-18 h-50px"}>
                    <span>Send Message</span>
                    <img src={`${window.location.origin}/content/svg/chevron-right.svg`} alt={""} />
                </button>
            </div>
        </form>
    )
}