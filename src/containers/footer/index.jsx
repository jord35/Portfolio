import SharePortfolio from "../../components/SharePortfolio";
import PdfButton from "../../components/PdfButton";
import PDF from "/icons/PDF.webp";
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <SharePortfolio />

                <span className="footer__version">v0.1</span>

                <PdfButton
                    label=""
                    icon={PDF}
                    fileName="CV.pdf"
                    className="footer__btn footer__btn--pdf"
                />
            </div>
        </footer>
    );
};

export default Footer;
