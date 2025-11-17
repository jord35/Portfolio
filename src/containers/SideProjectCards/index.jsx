// src/containers/SideProjectCards/index.jsx

import Cards from "../../components/Cards";
import { sideProjects } from "./data";

const SideProjectCards = () => {
    return (
        <section className="side-projects-section">
            <Cards list={sideProjects} />
        </section>
    );
};

export default SideProjectCards;
