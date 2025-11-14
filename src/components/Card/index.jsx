import "./style.scss";
import ActionButton from "../ActionButton";

const Card = ({ image, title, buttons = [] }) => {
    return (
        <div className="card">

            {/* Titre */}
            {title && <h2 className="card__title">{title}</h2>}

            {/* Image */}
            {image && (
                <img
                    src={image}
                    alt={`Aperçu de ${title}`}
                    className="card__image"
                />
            )}

            {/* Boutons */}
            {buttons.length > 0 && (
                <div
                    className={`card__buttons ${buttons.length === 1 ? "card__buttons--single" : ""
                        }`}
                >
                    {buttons.map((btn, i) => (
                        <ActionButton
                            key={i}
                            label={btn.label}
                            url={btn.url}
                            copy={btn.copy}
                            className={btn.className}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;
