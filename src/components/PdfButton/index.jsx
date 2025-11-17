// src/components/PdfButton/index.jsx
import "./style.scss";

const PdfButton = ({
    label = "Télécharger mon CV",
    fileName = "cv.pdf",
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
        <button onClick={handleClick} className={`pdf-btn ${className}`}>
            {icon && <img src={icon} alt="pdf icon" className="pdf-btn__icon" />}
            {label && <span>{label}</span>}
        </button>
    );
};

export default PdfButton;
