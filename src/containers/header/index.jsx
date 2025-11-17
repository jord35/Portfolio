
import { useEffect, useState } from "react";
import PdfButton from "../../components/PdfButton";
import ActionButton from "../../components/ActionButton";
import "./style.scss";

export default function Header() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Bienvenue sur mon espace professionnel — découvrez mes projets, mon parcours et contactez-moi facilement.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const handleScrollToContact = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <h1>Mon Portfolio</h1>
                <p>{typedText}</p>

                <div className="header-buttons">
                    <PdfButton label="Télécharger mon CV" className="btn-primary" />
                    <ActionButton
                        label="GitHub"
                        url="https://github.com/jord35"
                        className="btn-primary"
                    />

                </div>
            </div>
        </header>
    );
}
