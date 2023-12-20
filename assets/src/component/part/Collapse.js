import React from "react";
import { findParent } from "../hook/DomElement";

export default function Collapse({item}) {

    const handleCollapse = (e) => {
        let parent = e.currentTarget
        if(!parent.classList.contains("collapse")) {
            parent = findParent(parent, "collapse")
        }

        if(!parent) {
            return
        }

        if(parent.className.includes("-active")) {
            parent.classList.toggle("-active")
        } else {
            let collapseParent = parent.parentNode
            for(let i = 0; i < collapseParent.children.length; i++) {
                collapseParent.children[i].classList.remove("-active")
            }

            parent.classList.toggle("-active")
        }
    }

    return (
        <div className={"collapse"}>
            <div className={"-header"} onClick={(e) => handleCollapse(e)}>
                <label>{item.label}</label>
                <img src={`${window.location.origin}/content/svg/plus.svg`} alt={""} />
            </div>
            <div className={"-content"}>
                <div className={"-content-widget"}>
                    <p>{item.content}</p>
                </div>
            </div>
        </div>
    )
}