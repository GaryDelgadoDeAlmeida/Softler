import React from "react";
import Collapse from "./Collapse";

export default function CollapseList() {

    const collapses = [
        {
            label: "1. How much it will cost For Web Design ?",
            content: "In business, time is money. So, when you have a problem that is putting your business on hold, a quick response rate is critical. It’s actually one of the main criteria when it comes to IT support, if not the deal-breaker. It’s better to know what to expect upfront than to find out in the middle of an IT crisis."
        },
        {
            label: "2. How long does it takes to complete the Web Design ?",
            content: "In business, time is money. So, when you have a problem that is putting your business on hold, a quick response rate is critical. It’s actually one of the main criteria when it comes to IT support, if not the deal-breaker. It’s better to know what to expect upfront than to find out in the middle of an IT crisis."
        },
        {
            label: "3. How should I proceed to engage your web design services ?",
            content: "In business, time is money. So, when you have a problem that is putting your business on hold, a quick response rate is critical. It’s actually one of the main criteria when it comes to IT support, if not the deal-breaker. It’s better to know what to expect upfront than to find out in the middle of an IT crisis."
        },
        {
            label: "4. What if I want to customize additional function for my website ?",
            content: "In business, time is money. So, when you have a problem that is putting your business on hold, a quick response rate is critical. It’s actually one of the main criteria when it comes to IT support, if not the deal-breaker. It’s better to know what to expect upfront than to find out in the middle of an IT crisis."
        },
        {
            label: "5. What if I want additional section for my website ?",
            content: "In business, time is money. So, when you have a problem that is putting your business on hold, a quick response rate is critical. It’s actually one of the main criteria when it comes to IT support, if not the deal-breaker. It’s better to know what to expect upfront than to find out in the middle of an IT crisis."
        }
    ]

    return (
        <>
            {collapses.map((item, index) => (
                <Collapse key={index} item={item} />
            ))}
        </>
    )
}