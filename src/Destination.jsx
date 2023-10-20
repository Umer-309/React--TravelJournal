import React from "react";

export default function Destination() {
    const destinationData = [
        {
            src: "https://source.unsplash.com/WLxQvbMyfas",
            country: "JAPAN",
            place: "Mount Fuji",
            date: "12 Jan, 2021 - 24 Jan, 2021",
            description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        }
    ]

    return (
        <div>
            <iframe 
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Sydney%20Opera%20House&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed" 
            width="600" 
            height="450"
            allowFullScreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
            </div>
    )
}