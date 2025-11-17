// src/containers/contactMe/index.jsx
import HoverMenuButton from "../../components/HoverMenuButton";
import { mailServices } from "./contactData.js";
import "./style.scss";

const ContactMe = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="contact__title">Entrons en contact</h2>

            <p className="contact__text">
                Mon profil vous intéresse ? Je serais ravi d’échanger avec vous à propos d’une
                opportunité professionnelle, d’un projet ou tout simplement de discuter.
            </p>

            <HoverMenuButton
                label="Me contacter"
                items={mailServices.map(service => ({
                    name: (
                        <img
                            src={service.icon}
                            alt={service.alt}
                            width={28}
                            height={28}
                        />
                    ),
                    url: service.url,
                    copy: service.copy,
                }))}
                position="bottom"
            />
        </section>
    );
};

export default ContactMe;
