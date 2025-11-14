
import Card from "../../components/Card";

const SideProjectCards = () => {
    const miniProjects = [
        {
            image: "public/imagesProject/Veille.png",
            title: "Veille",
            buttons: [
                {
                    label: "Voir le site",
                    url: "https://www.pearltrees.com/lajord2468/developpement-informatique/id99367689",
                    className: "bg-blue-500 hover:bg-blue-600",
                },
            ],
        },

    ];

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {miniProjects.map((p, i) => (
                <Card key={i} image={p.image} title={p.title} buttons={p.buttons} />
            ))}
        </div>
    );
};

export default SideProjectCards;
