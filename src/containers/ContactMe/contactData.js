// src/data/contactData.js

export const email = "jordan.gillouaye@gmail.com";

export const mailServices = [
    {
        icon: "/icons/gmail.webp",
        alt: "Gmail",
        url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        copy: email,
    },
    {
        icon: "/icons/outlook.webp",
        alt: "Outlook",
        url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
        copy: email,
    },
    {
        icon: "/icons/yahoo.webp",
        alt: "Yahoo Mail",
        url: `https://compose.mail.yahoo.com/?to=${email}`,
        copy: email,
    },
];
