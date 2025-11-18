
import "./style.scss";

export default function MyLanguageCarousel() {

    const languages = [
        { name: "HTML", img: "imagesLanguage/html.webp" },
        { name: "CSS", img: "imagesLanguage/css.webp" },
        { name: "JavaScript", img: "imagesLanguage/js.webp" },
        { name: "React", img: "imagesLanguage/react.svg" },
        { name: "Python", img: "imagesLanguage/python.webp" },
        { name: "Django", img: "imagesLanguage/django.webp" },
        { name: "PineScript", img: "imagesLanguage/pine_script.webp" },
    ];

    const repeated = Array.from({ length: 4 }, () => languages).flat();

    return (
        <div id="skills" className="language-carousel">
            <div className="carousel-track">
                {repeated.map((lang, index) => (
                    <div key={index} className="carousel-item">
                        <img
                            src={lang.img}
                            alt={lang.name}
                            className="language-icon"
                        />
                        <span>{lang.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}