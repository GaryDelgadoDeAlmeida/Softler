import React from "react";
import HeaderAdmin from "../../component/part/HeaderAdmin";
import ProfileForm from "../../component/form/ProfileForm";

export default function Profile() {

    return (
        <HeaderAdmin>
            <div className={"page-section"}>
                <div className={"card"}>
                    <div className={"-content"}>
                        <ProfileForm />
                    </div>
                </div>
            </div>
        </HeaderAdmin>
    )
}