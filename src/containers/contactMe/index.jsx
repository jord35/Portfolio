

import HoverMenuButton from "../../components/HoverMenuButton";

const ContactMe = () => {
    const email = "jordan.gillouaye@gmail.com";

    const mailServices = [
        {
            name: <img src="public/icons/gmail.webp" alt="Gmail" className="w-6 h-6" />,
            url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
            copy: email,
        },
        {
            name: <img src="/icons/outlook.webp" alt="Outlook" className="w-6 h-6" />,
            url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
            copy: email,
        },
        {
            name: <img src="/icons/yahoo.webp" alt="Yahoo Mail" className="w-6 h-6" />,
            url: `https://compose.mail.yahoo.com/?to=${email}`,
            copy: email,
        },
    ];

    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Contactez-moi</h2>
            <HoverMenuButton label="Contacter moi" items={mailServices} />
        </section>
    );
};

export default ContactMe;
