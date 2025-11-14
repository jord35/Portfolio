
import "./style.scss";

const ActionButton = ({ label, url, copy, className = "" }) => {
    const handleClick = () => {
        if (copy) {
            navigator.clipboard.writeText(copy);
        }
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`action-btn ${className}`}
        >
            {label}
        </button>
    );
};

export default ActionButton;
