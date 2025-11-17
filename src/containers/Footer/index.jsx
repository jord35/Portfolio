import SharePortfolio from "../../components/SharePortfolio";
import PdfButton from "../../components/PdfButton";
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Partager */}
                <SharePortfolio />

                {/* Message court */}
                <p className="footer__message">
                    N'hésitez pas à partager mon profil, merci d'avance !
                </p>

                {/* CV */}
                <PdfButton
                    label=""
                    icon={<i className="fa-regular fa-file-pdf"></i>}
                    fileName="CV.pdf"
                    className="footer__btn footer__btn--pdf"
                />
            </div>
        </footer>
    );
};

export default Footer;

