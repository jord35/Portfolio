import "./style.scss";

const PdfButton = ({
    label = "Télécharger mon CV",
    fileName = "cv.pdf",
    download = true,
    className = "",
}) => {
    const handleClick = () => {
        const fileUrl = `/${fileName}`;

        if (download) {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(fileUrl, "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`pdf-btn ${className}`}
        >
            {label}
        </button>
    );
};

export default PdfButton;
