import React from "react";
import Logo from "./assets/globe.png"

export default function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="" />
            <p>my travel journal.</p>
        </div>
    )
}