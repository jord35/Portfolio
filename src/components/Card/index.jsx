import "./style.scss";
import ActionButton from "../ActionButton";

const Card = ({ image, title, description, buttons = [] }) => (
    <div className="card">
        {image && <img src={image} alt={title} className="card__image" />}
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        <div className="card__buttons">
            {buttons.map((btn, i) => (
                <ActionButton
                    key={i}
                    label={btn.label}
                    url={btn.url}
                    className={`btn-primary ${btn.className || ""}`}
                />
            ))}
        </div>
    </div>
);

export default Card;


