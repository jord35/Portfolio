import { useState } from "react";
import "./style.scss";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const scrollTo = (target) => {
        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
        }
    };

    const handleKeyPress = (e, target) => {
        if (e.key === "Enter") scrollTo(target);
    };

    return (
        <nav className="navbar">
            {/* Hamburger Menu Button */}
            <button
                className={`navbar__toggle ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label="Menu"
            >
                ☰
            </button>

            {/* Navigation Links */}
            <ul className={`navbar__menu ${open ? "open" : ""}`}>
                <li tabIndex="0" onClick={() => scrollTo("about-me")} onKeyDown={(e) => handleKeyPress(e, "about-me")}>
                    À propos de moi
                </li>

                <li tabIndex="0" onClick={() => scrollTo("skills")} onKeyDown={(e) => handleKeyPress(e, "skills")}>
                    Langages connus
                </li>

                <li tabIndex="0" onClick={() => scrollTo("projects")} onKeyDown={(e) => handleKeyPress(e, "projects")}>
                    Projets
                </li>

                <li tabIndex="0" onClick={() => scrollTo("contact")} onKeyDown={(e) => handleKeyPress(e, "contact")}>
                    Me contacter
                </li>

                <li tabIndex="0" onClick={() => scrollTo("footer")} onKeyDown={(e) => handleKeyPress(e, "footer")}>
                    Bas de page
                </li>
            </ul>
        </nav>
    );
}
