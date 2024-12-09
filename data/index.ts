function generateRandomLightColor() {
    // Generate random values for R, G, B within the range of 200-255
    const r = Math.floor(Math.random() * 56) + 200;
    const g = Math.floor(Math.random() * 56) + 200;
    const b = Math.floor(Math.random() * 56) + 200;

    // Convert RGB values to a hexadecimal string
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
const homepage = {
    headerLinks: [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Portfolio",
            path: "/portfolio"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Testimonials",
            path: "/testimonials"
        },
        {
            label: "Contact",
            path: "/contact"
        },
    ],
    hero: {
        title: "Building Tomorrow, Engineering Excellence",
        description: "At Alpha Zeta Global Technical Services Ltd., we transform visions into reality through innovative engineering and sustainable solutions. From groundbreaking infrastructure projects to agricultural advancements, our expertise drives progress across Nigeria. Join us in shaping a future built on quality, integrity, and commitment.",
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
        title: "About",
        description: "Alpha Zeta Global Technical Services Ltd. is a renowned indigenous firm of project engineers, registered as a limited liability company. Our professional expertise spans an extensive range of activities in Civil, Electrical, Mechanical, and Water Resources Engineering, as well as Community Development and Project Management. With our head office located in Kano, we are strategically positioned to operate and manage projects across Nigeria. Our team is well-organized and mobilized to offer premium services nationwide, ensuring the successful execution of each assignment. Alpha Zeta has established a proven track record of success in major engineering projects, driven by our unwavering commitment to quality and professionalism. This dedication is evident in the satisfaction of our clients and our resolve to continuously enhance professional standards in the industry.",
        categories: ["Buildings", "Boreholes", "Road", "Dam"]
    },
    team: {
        title: "Our Team Members",
        description: "Our team comprises experienced professionals who bring dedication, expertise, and innovation to every project. Meet the core members of Alpha Zeta, who ensure the success and excellence of our services.",
        items: [
            {
              name: "Engr. Mohd Shehu Yahaya",
              role: "CEO",
              imageSrc: "@/assets/images/mohd-yahaya.png"
            },
            {
              name: "Engr. Amina Bello",
              role: "Head of Civil Engineering",
              imageSrc: "@/assets/images/amina-bello.png"
            },
            {
              name: "Dr. Ibrahim Musa",
              role: "Lead Consultant, Water Resources",
              imageSrc: "@/assets/images/ibrahim-musa.png"
            },
            {
              name: "Engr. Fatima Abdullahi",
              role: "Manager, Mechanical and Electrical Services",
              imageSrc: "@/assets/images/fatima-abdullahi.png"
            },
            {
              name: "Mr. Usman Aliyu",
              role: "Project Manager",
              imageSrc: "@/assets/images/usman-aliyu.png"
            },
            {
              name: "Mrs. Zainab Yusuf",
              role: "Agricultural Services Coordinator",
              imageSrc: "@/assets/images/zainab-yusuf.png"
            }
        ]
    
    },
    services: {
        title: "Services",
        description: "Discover our range of services designed to deliver excellence in engineering, project management, and agriculture. With each service, we bring expertise, innovation, and dedication to meet your unique needs.",
        items: [
            {
              abbreviation: "FS",
              color: generateRandomLightColor(),
              title: "Feasibility Studies",
              description: "Comprehensive analysis and assessment to determine the viability of your projects, ensuring informed decision-making.",
              start_price: "10M"
            },
            {
              abbreviation: "SI",
              color: generateRandomLightColor(),
              title: "Site Investigations",
              description: "Thorough on-site evaluations to assess conditions, risks, and resources, ensuring successful project execution.",
              start_price: "8M"
            },
            {
              abbreviation: "SR",
              color: generateRandomLightColor(),
              title: "Surveys and Reports",
              description: "Detailed surveys and professional reporting for accurate planning and informed project management.",
              start_price: "5M"
            },
            {
              abbreviation: "PDED",
              color: generateRandomLightColor(),
              title: "Preliminary and Detailed Engineering Design",
              description: "Innovative and precise engineering designs tailored to meet project-specific requirements.",
              start_price: "15M"
            },
            {
              abbreviation: "PMCS",
              color: generateRandomLightColor(),
              title: "Project Management and Construction Supervision",
              description: "Expert management and supervision ensuring projects are delivered on time, within budget, and to the highest standards.",
              start_price: "20M"
            },
            {
              abbreviation: "MES",
              color: generateRandomLightColor(),
              title: "Mechanical and Electrical Services",
              description: "State-of-the-art mechanical and electrical solutions designed for efficiency and reliability.",
              start_price: "12M"
            },
            {
              abbreviation: "CSIN",
              color: generateRandomLightColor(),
              title: "Computer Supply, Installation, and Networking",
              description: "Comprehensive IT solutions, including supply, installation, and networking services, for seamless connectivity.",
              start_price: "7M"
            }
        ]
    },
    testimonials: {
        title: "What Our Clients Are Saying",
        description: "Hear from our satisfied clients and partners who have experienced our dedication to excellence and professionalism firsthand.",
 items: [
        {
     author: {
         companyName: "Hadeja Jama'are",
         executiveRole: "Managing Director"
            },
     testimony: "Alpha Zeta delivered exceptional engineering solutions for our irrigation projects. Their professionalism and technical expertise exceeded our expectations."
        },
        {
     author: {
         companyName: "Kano State University",
         executiveRole: "Vice Chancellor"
            },
     testimony: "The renovation and upgrading of our campus facilities by Alpha Zeta were remarkable. They demonstrated great attention to detail and efficiency."
        },
        {
     author: {
         companyName: "Abuja Environmental Agency",
         executiveRole: "Project Coordinator"
            },
     testimony: "Alpha Zeta's wastewater treatment plant design was both innovative and environmentally conscious. We are incredibly pleased with the outcome."
        },
        {
     author: {
         companyName: "Rural Solar Initiative",
         executiveRole: "Program Director"
            },
     testimony: "The solar street lighting installation in rural communities was a transformative project, and Alpha Zeta executed it flawlessly."
        },
        {
     author: {
         companyName: "Northern Construction Co.",
         executiveRole: "CEO"
            },
     testimony: "Our road and bridge construction projects were completed on time and within budget, thanks to Alpha Zeta's outstanding project management skills."
        },
        {
     author: {
         companyName: "Green Harvest Farms",
         executiveRole: "Operations Manager"
            },
     testimony: "Alpha Zeta's agricultural services, particularly their irrigation system designs, have significantly boosted our farm's productivity."
        }
    ]
    },
    portfolio: {
        title: "Portfolio",
        description: "Our extensive portfolio showcases the expertise and dedication we bring to every project. From engineering marvels to agricultural innovations, these projects highlight our commitment to excellence and sustainability.",
        items: [
            {
                title: "Construction of Central Mosque",
                color: "generateRandomLightColor()",
                gallery: [
                    "https://source.unsplash.com/featured/?mosque,construction",
                    "https://source.unsplash.com/featured/?architecture,mosque",
                    "https://source.unsplash.com/featured/?civil-engineering,mosque",
                    "https://source.unsplash.com/featured/?religious-building"
                ],
                description: "A landmark project showcasing exceptional craftsmanship and engineering precision in constructing a central place of worship."
            },
            {
                title: "Development of Irrigation Systems in Kano",
                color: "generateRandomLightColor()",
                gallery: [
                    "https://source.unsplash.com/featured/?irrigation,agriculture",
                    "https://source.unsplash.com/featured/?engineering,irrigation",
                    "https://source.unsplash.com/featured/?farm,irrigation",
                    "https://source.unsplash.com/featured/?dams,agriculture"
                ],
                description: "Innovative irrigation solutions enhancing agricultural productivity and water resource management in Kano."
            },
            {
                title: "Road and Bridge Construction in Northern Nigeria",
                color: "generateRandomLightColor()",
                gallery: [
                    "https://source.unsplash.com/featured/?bridge,construction",
                    "https://source.unsplash.com/featured/?road,engineering",
                    "https://source.unsplash.com/featured/?civil-projects,bridge",
                    "https://source.unsplash.com/featured/?transport-infrastructure"
                ],
                description: "Pioneering infrastructure development with durable roads and bridges, enhancing connectivity and regional growth."
            },
            {
                title: "Renovation and Upgrading of Kano State University Complex",
                color: "generateRandomLightColor()",
                gallery: [
                    "https://source.unsplash.com/featured/?university,renovation",
                    "https://source.unsplash.com/featured/?building-renovation,education",
                    "https://source.unsplash.com/featured/?campus,construction",
                    "https://source.unsplash.com/featured/?educational-infrastructure"
                ],
                description: "Transforming educational spaces with cutting-edge renovations and modern infrastructure improvements."
            }
        ]
    },

}

export const pagesData = {
    about: {
        title: "Lorem ipsum dolor sit elit.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora consequuntur velit eaque iste culpa voluptas? Aperiam incidunt tenetur molestiae. Maiores, totam in? Ipsa earum ad eveniet cumque laborum nam.",
        categories: ["Buildings", "Boreholes", "Road", "Dam"]
    }
}

export default homepage