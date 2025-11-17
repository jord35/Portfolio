// src/components/HoverMenuButton/index.jsx
import { useState, useRef } from "react";
import ActionButton from "../ActionButton";
import "./style.scss";

const HoverMenuButton = ({ label, icon, items = [], position = "right", className = "" }) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setOpen(true);
    };

    const handleMouseLeave = () => {
        // Délai avant fermeture 
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 1000);
    };

    return (
        <div
            className={`hover-menu hover-menu--${position} ${open ? "hover-menu--open" : ""} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="hover-menu__trigger">
                {icon ? icon : label}
            </button>

            <div className="hover-menu__panel">
                {items.map((item, i) => (
                    <ActionButton
                        key={i}
                        label={item.name}
                        url={item.url}
                        copy={item.copy}
                        className={`hover-menu__item ${item.className || ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HoverMenuButton;
