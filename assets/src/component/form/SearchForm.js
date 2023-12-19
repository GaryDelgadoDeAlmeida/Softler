import React, { useState } from "react"

export default function SearchForm() {

    const [search, setSearch] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={"form"} onSubmit={e => handleSubmit(e)}>
            <div className={"form-field -inline"}>
                <input type={"text"} placeholder={"Search"} onChange={(e) => handleChange(e)} />
                <button type={"submit"} className={"btn btn-violet -inline-flex"}>
                    <img src={`${window.location.origin}/content/svg/magnifying-glass-white.svg`} alt={""} />
                </button>
            </div>
        </form>
    )
}