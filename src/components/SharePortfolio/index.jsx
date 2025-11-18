import HoverMenuButton from "../HoverMenuButton";
import { socialLinks } from "./shareData";

const SharePortfolio = () => {
    return (
        <HoverMenuButton
            label=""
            aria_label=" Ouverture du menu Pour les différents Réseaux sociaux disponibles"
            icon={<i className="fa-solid fa-share"></i>}
            className="  footer__btn footer__btn--share"
            items={socialLinks.map(s => ({
                name: <img src={s.icon} alt={s.alt} width={26} height={26} />,
                url: s.url,
                copy: s.copy,
            }))}
        />
    );
};

export default SharePortfolio;
