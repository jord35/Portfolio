import { useEffect, useState } from "react";
import "./style.scss";

const AboutMe = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className={`about-me ${visible ? "visible" : ""}`}>
            <h2>À propos de moi</h2>
            <p>
                Passionné par le développement web, j’ai choisi de me spécialiser dans la création d’interfaces modernes, accessibles et performantes.
                Autonome et curieux, j’aime concevoir des expériences utilisateur fluides tout en veillant à la qualité du code et à la cohérence visuelle de chaque projet.

                Mon parcours m’a permis d’acquérir une solide maîtrise des technologies HTML, CSS (et Sass) et JavaScript, ainsi qu’une réelle aisance avec la bibliothèque React.
                J’accorde une attention particulière à la structure sémantique du code, à la réactivité des interfaces et à l’optimisation des performances front-end.

                Créatif et rigoureux, je prends plaisir à transformer une idée ou une maquette en un produit concret, intuitif et responsive.
                Mon objectif : développer des solutions web à la fois esthétiques, efficaces et maintenables, qui reflètent le professionnalisme et l’identité de chaque projet.
            </p>
        </section>
    );
};

export default AboutMe;
