import "./style.scss";
import HoverMenuButton from "../HoverMenuButton";

const SharePortfolio = () => {
    const portfolioUrl = "https://www.mon-portfolio.com";

    const socialLinks = [
        {
            name: <img src="/icons/linkedin.webp" alt="LinkedIn" className="icon" />,
            url: "https://www.linkedin.com/",
            copy: portfolioUrl,
        },
        {
            name: <img src="/icons/instagram.webp" alt="Instagram" className="icon" />,
            url: "https://www.instagram.com/",
            copy: portfolioUrl,
        },
        {
            name: <img src="/icons/facebook.webp" alt="Facebook" className="icon" />,
            url: "https://www.facebook.com/",
            copy: portfolioUrl,
        },
        {
            name: <img src="/icons/X.webp" alt="X" className="icon" />,
            url: "https://x.com/",
            copy: portfolioUrl,
        },
    ];

    return <HoverMenuButton label="Partager mon portfolio" items={socialLinks} />;
};

export default SharePortfolio;
