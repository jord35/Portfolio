// src/components/Cards/index.jsx
import "./style.scss";
import Card from "../Card";

const Cards = ({ list = [] }) => {
    return (
        <div className="cards-container">
            {list.map((item, i) => (
                <Card
                    key={i}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    buttons={item.buttons}
                />
            ))}
        </div>
    );
};

export default Cards;
