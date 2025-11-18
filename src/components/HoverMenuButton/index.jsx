
import { useState, useRef, useEffect } from "react";
import ActionButton from "../ActionButton";
import "./style.scss";

const HoverMenuButton = ({ label, icon, items = [], position = "right", className = "" }) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef(null);
    const panelRef = useRef(null);

    const openMenu = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const closeMenu = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 1500);
    };

    const toggleMenu = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(prev => !prev);
    };

    // Fermeture si on appuie sur Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Navigation clavier dans le menu
    const handleKeyDownMenu = (e) => {
        if (!open) return;
        const focusableItems = panelRef.current?.querySelectorAll("a, button") || [];
        const currentIndex = Array.from(focusableItems).indexOf(document.activeElement);

        if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = focusableItems[currentIndex + 1] || focusableItems[0];
            next.focus();
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            const prev = focusableItems[currentIndex - 1] || focusableItems[focusableItems.length - 1];
            prev.focus();
        }
    };

    return (
        <div
            className={`hover-menu hover-menu--${position} ${open ? "hover-menu--open" : ""} ${className}`}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
        >
            <button
                className="hover-menu__trigger"
                onClick={toggleMenu}
                onFocus={openMenu}
                onBlur={closeMenu}
                aria-haspopup="true"
                aria-expanded={open}
                aria-controls="menu-panel"
            >
                {icon ? icon : label}
            </button>

            {open && (
                <div
                    id="menu-panel"
                    className="hover-menu__panel"
                    role="menu"
                    ref={panelRef}
                    onKeyDown={handleKeyDownMenu}
                >
                    {items.map((item, i) => (
                        <ActionButton
                            key={i}
                            label={item.name}
                            url={item.url}
                            copy={item.copy}
                            className={`hover-menu__item ${item.className || ""}`}
                            role="menuitem"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HoverMenuButton;
