import { useState, useRef } from "react";
import ActionButton from "../ActionButton";
import "./style.scss";

const HoverMenuButton = ({ label, items, position = "right" }) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setOpen(true);
    };

    const handleMouseLeave = () => {
        // Délai avant fermeture (1000ms = 1s)
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 1000);
    };

    return (
        <div
            className={`hover-menu hover-menu--${position} ${open ? "hover-menu--open" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="hover-menu__trigger">{label}</button>

            <div className="hover-menu__panel">
                {items.map((item, i) => (
                    < ActionButton
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
