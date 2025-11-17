import HoverMenuButton from "../HoverMenuButton";
import { socialLinks } from "./shareData";

const SharePortfolio = () => {
    return (
        <HoverMenuButton
            label="Partager"

            items={socialLinks.map(s => ({
                name: <img src={s.icon} alt={s.alt} width={26} height={26} />,
                url: s.url,
                copy: s.copy,
            }))}
        />
    );
};

export default SharePortfolio;
