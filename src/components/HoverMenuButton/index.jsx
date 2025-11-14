import { useState } from "react";
import "./style.scss";
import ActionButton from "../ActionButton";

const HoverMenuButton = ({ label, items }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="hover-menu"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="hover-menu__trigger">
                {label}
            </button>

            {open && (
                <div className="hover-menu__panel">
                    {items.map((item) => (
                        <ActionButton
                            key={item.name}
                            label={item.name}
                            url={item.url}
                            copy={item.copy}
                            className="hover-menu__item"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HoverMenuButton;

