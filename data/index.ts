function generateRandomLightColor() {
    // Generate random values for R, G, B within the range of 200-255
    const r = Math.floor(Math.random() * 56) + 200;
    const g = Math.floor(Math.random() * 56) + 200;
    const b = Math.floor(Math.random() * 56) + 200;

    // Convert RGB values to a hexadecimal string
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
const homepage = {
    hero: {
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora consequuntur velit eaque iste culpa voluptas? Aperiam incidunt tenetur molestiae. Maiores, totam in? Ipsa earum ad eveniet cumque laborum nam.",
        social: [
            {
                icon: "/facebook.svg",
                label: "Facebook"
            },
            {
                icon: "/twitter.svg",
                label: "Twitter"
            },
            {
                icon: "/instagram.svg",
                label: "Instagam"
            }
        ]
    },
    about: {
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora consequuntur velit eaque iste culpa voluptas? Aperiam incidunt tenetur molestiae. Maiores, totam in? Ipsa earum ad eveniet cumque laborum nam.",
        history: ["Buildings", "Boreholes", "Road", "Dam"]
    },
    services: {
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora consequuntur velit eaque iste culpa voluptas? Aperiam incidunt tenetur molestiae. Maiores, totam in? Ipsa earum ad eveniet cumque laborum nam.",
        items: [
            {
                abreviation: "ABM",
                title: "Construction Of Building",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aliquam dolores animi temporibus possimus!"
            },
            {
                abreviation: "COD",
                title: "Construction Of Dam",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aliquam dolores animi temporibus possimus!"
            },
            {
                abreviation: "COR",
                title: "Construction Of Road",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aliquam dolores animi temporibus possimus!"
            },
        ]
    },
    testimonials: {
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora consequuntur velit eaque iste culpa voluptas? Aperiam incidunt tenetur molestiae. Maiores, totam in? Ipsa earum ad eveniet cumque laborum nam.",
        items: [
            {
                author: {
                    name: "John Doe"
                },
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aliquam dolores animi temporibus possimus!"
            },
            {
                author: {
                    name: "Jane Doe"
                },
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aliquam dolores animi temporibus possimus!"
            },
            {
                author: {
                    name: "Mick Doe"
                },
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aliquam dolores animi temporibus possimus!"
            },
        ]
    },
    portfolio: {
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora consequuntur velit eaque iste culpa voluptas? Aperiam incidunt tenetur molestiae. Maiores, totam in? Ipsa earum ad eveniet cumque laborum nam.",
        items: [
            {
                title: "Construction Of Central Mosque",
                color: generateRandomLightColor(),
                gallery: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
            },
            {
                title: "Abuja to Kaduna Road",
                color: generateRandomLightColor(),
                gallery: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
            },
            {
                title: "Gwarimpa Estate Construction",
                color: generateRandomLightColor(),
                gallery: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
            },
            {
                title: "Boreholes In Kamfa Village",
                color: generateRandomLightColor(),
                gallery: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
            },
        ]
    },

}

export default homepage