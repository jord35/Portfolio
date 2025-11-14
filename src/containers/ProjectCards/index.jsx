import Card from "../../components/Card";

const ProjectCards = () => {
    const projects = [
        {
            image: "public/imagesProject/Frontend.png",
            title: "test_a",
            buttons: [
                {
                    label: "GitHub",
                    url: "https://github.com/",
                    className: "bg-gray-800 hover:bg-gray-700",
                },
                {
                    label: "Voir le site",
                    url: "https://example.com",
                    className: "bg-blue-500 hover:bg-blue-600",
                },
            ],
        },
        {
            image: "public/imagesProject/Backend.png",
            title: "test_b",
            buttons: [
                {
                    label: "GitHub",
                    url: "https://github.com/",
                    className: "bg-gray-800 hover:bg-gray-700",
                },
                {
                    label: "Voir la démo",
                    url: "https://example.com/demo",
                    className: "bg-green-500 hover:bg-green-600",
                },
            ],
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {projects.map((p, i) => (
                <Card key={i} title={p.title} image={p.image} buttons={p.buttons} />
            ))}
        </div>
    );
};

export default ProjectCards;
