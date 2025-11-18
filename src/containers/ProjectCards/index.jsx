// src/containers/ProjectCards/index.jsx

import Cards from "../../components/Cards";
import { projects } from "./data";
import "./style.scss";

const ProjectCards = () => {
    return (
        <section id="projects" className="projects-section">
            <Cards list={projects} />
        </section>
    );
};

export default ProjectCards;