// src/components/PdfButton/index.jsx
import "./style.scss";

const PdfButton = ({
    ariaLabel = "",
    label = "Télécharger mon CV",
    fileName = "CV_JGillouaye.pdf",
    download = true,
    icon = null,
    className = "",
}) => {
    const handleClick = () => {
        const fileUrl = `/${fileName}`;
        if (download) {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName;
            link.click();
        } else {
            window.open(fileUrl, "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`pdf-btn ${className}`}
            aria-label={ariaLabel || label}
        >
            {icon && <span className="pdf-btn__icon">{icon}</span>}
            {label && <span className="sr-only">{label}</span>}
        </button>
    );
};


export default PdfButton;

