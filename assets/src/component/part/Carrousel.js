import React from "react";
import { findChildren, findParent } from "../hook/DomElement";

export default function Carrousel() {

    const carrousels = [
        `${window.location.origin}/content/img/11.jpg`,
        `${window.location.origin}/content/img/12.jpg`,
        `${window.location.origin}/content/img/22.jpg`
    ]
    
    const handleClick = (e) => {
        let currentButton = e.currentTarget
        let carrouselid = currentButton.getAttribute("data-carrouselid")
        
        let parent = findParent(currentButton, "carrousel-wrapper")
        if(!parent) {
            console.error("Carrousel parent couldn't be found")
            return
        }

        let itemTarget
        let itemsChildren = findChildren(parent, "-items")
        if(!itemsChildren) {
            console.error("The class '-items' couldn't be found")
            return
        }

        for(let i = 0; i < itemsChildren.children.length; i++) {
            let item = itemsChildren.children[i]
            let key = item.id
            
            if(item.className.includes("-active") && key !== carrouselid) {
                item.classList.remove("-active")
            }

            if(key == carrouselid) {
                itemTarget = item
            }
        }

        if(itemTarget) {
            itemTarget.classList.add("-active")
        }
    }

    return (
        <div className={"carrousel"}>
            <div className={"carrousel-wrapper"}>
                <div className={"-items"}>
                    {carrousels.map((item, index) => (
                        <img key={index} id={index} className={`-item ${index == 0 ? "-active" : ""}`} src={item} alt={""} />
                    ))}
                </div>
                <div className={"-pagination"}>
                    {carrousels.map((item, index) => (
                        <button 
                            key={index} 
                            className={`-button ${index == 0 ? "-active" : ""}`}
                            data-carrouselid={index} 
                            onClick={(e) => handleClick(e)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}