import PortfolioImage from '@/assets/media/portofolio.jpg'
import PortfolioImage2 from '@/assets/media/portofolio-2.jpg'
import PortfolioImage3 from '@/assets/media/portofolio-3.jpg'

// Members
import MohdShehu from '@/assets/media/mohammad-shehu.jpg'
import AdamAbubakar from '@/assets/media/adma-abubakar.jpg'
import BashirAbubakar from '@/assets/media/bashir-abubakar.jpg'
import UmarSaid from '@/assets/media/umar-said.jpg'
function generateRandomLightColor() {
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
            label: "Contact",
            path: "/contact"
        },
    ],
    hero: {
        title: "Transforming Visions, Building Nigeria",
        description: "At Alpha Zeta Global Technical Services Ltd, we transform visions into reality through innovative engineering and sustainable solutions. From groundbreaking infrastructure projects to agricultural advancements, our expertise drives progress across Nigeria. Join us in shaping a future built on quality, integrity, and commitment.",
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
        title: "Who we are",
        description: "Alpha Zeta Global Technical Services Ltd: A leading indigenous engineering firm dedicated to transforming Nigeria's infrastructure landscape through comprehensive civil, electrical, mechanical, and water resources engineering solutions. With our strategic headquarters in Kano and a robust nationwide presence, we deliver exceptional project management and technical expertise that drives sustainable development and meets the most demanding engineering challenges across the country.",
        categories: ["Engineering Services", "Agricultural Services"]
    },
    team: {
        title: "Our Team Members",
        description: "Our team comprises experienced professionals who bring dedication, expertise, and innovation to every project. Meet the core members of Alpha Zeta, who ensure the success and excellence of our services.",
        items: [
            {
              name: "Engr. Mohd Shehu Yahaya",
              role: "Chairman",
                color: generateRandomLightColor(),
              image: MohdShehu
            },
            {
              name: "Engr. Adam Abubakar",
              role: "Executive Director",
                color: generateRandomLightColor(),

              image: AdamAbubakar
            },
            {
              name: "Bashir Aliu Abubakar MBA, PMP",
              role: "Managing Director",
                color: generateRandomLightColor(),

                image: BashirAbubakar
            },
            {
              name: "Umar Said",
              role: "Admin Office",
                color: generateRandomLightColor(),
                image: UmarSaid
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
    engineering_services: {
        title: "Engineering Services",
        description: "We offer services primarily in Civil, Electrical, Mechanical and Buildin Construction Engineering Project, as well as specialist services to select clients.",
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
    agricultural_services: {
        title: "Agricultural Service",
        description: "Empowering agriculture through expert input supplies, advanced seed solutions, and innovative agricultural chemicals to maximize farming potential.",
        items: [
            {
                abbreviation: "AFS",
                color: generateRandomLightColor(),
                title: "Agricultural Feasibility Studies",
                description: "Comprehensive analysis and assessment to determine the viability of your projects, ensuring informed decision-making.",
                start_price: "10M"
            },
            {
                abbreviation: "SSS",
                color: generateRandomLightColor(),
                title: "Seed Supply Solutions",
                description: "Providing high-quality, carefully selected seeds tailored to diverse agricultural needs, ensuring farmers get the best genetic potential for their crops",
                start_price: "8M"
            },
            {
                abbreviation: "PFD",
                color: generateRandomLightColor(),
                title: "Precision Fertilizer Distribution",
                description: "Expert supply of advanced fertilizer products designed to enhance soil nutrition, improve crop health, and boost agricultural productivity",
                start_price: "5M"
            },
            {
                title: "Dam Design & Engineering",
                color: generateRandomLightColor(),
                  abbreviation: "DDE",
                description:"Comprehensive dam design and construction services, integrating cutting-edge engineering techniques with environmental sustainability and water resource",
                start_price: "15M"
            },
            {
                abbreviation: "ISN",
                color: generateRandomLightColor(),
                title: "Irrigation System Engineering",
                description: "End-to-end irrigation system design and construction, delivering efficient water management solutions that maximize agricultural output while conserving",
                start_price: "20M"
            },
            {
                abbreviation: "MAS",
                color: generateRandomLightColor(),
                title: "Mechanical Agricultural Services",
                description: "Professional tractor supply and mechanical services, providing top-tier agricultural machinery to enhance farming efficiency and operational capabilities.",
                start_price: "12M"
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
                    title: "Construction of 16 Units of 5 Bedrooms Duplexes",
                    client: "Silverworld Integrated Development Company Limited",
                    location: "Sokoto Road, Kano",
                    color: generateRandomLightColor(),
                    contractAmount: "₦232,084,800",
                    gallery: [
                        PortfolioImage
                    ],
                    description: "A comprehensive residential development project featuring 16 sophisticated 5-bedroom duplex units, demonstrating our expertise in high-end residential construction and architectural design."
                },
                {
                    title: "Rehabilitation of Lamido Road",
                    client: "Ministry of Land and Physical Planning, Kano",
                    location: "Kano",
                    color: generateRandomLightColor(),
                    contractAmount: "₦249,307,263.01",
                    gallery: [
                        PortfolioImage2
                    ],
                    description: "A critical urban infrastructure rehabilitation project enhancing road connectivity and transportation infrastructure in the heart of Kano."
                },
            {
                "title": "Contract for the Completion of Small Irrigation in Kano, Jigawa, and Bauchi States",
                "client": "Hadejia-Jaamare River Basin Development Authority, Kano",
                "location": "Kano, Jigawa, Bauchi States",
                "color": generateRandomLightColor(),
                "contractAmount": "₦8,820,105.00",
                "gallery": [
                    PortfolioImage3
                ],
                "description": "A strategic irrigation project aimed at enhancing water management and agricultural productivity in key areas of Kano, Jigawa, and Bauchi States."
            },
            {
                "title": "Renovation/Rehabilitation of Maigatari Export Processing Zone",
                "client": "Ministry of Commerce, Industry, Co-operatives and Tourism, Jigawa State",
                "location": "Maigatari, Jigawa State",
                "color": generateRandomLightColor(),
                "contractAmount": "₦21,482,985.00",
                "gallery": [
                    PortfolioImage
                ],
                "description": "A significant project to revitalize the Maigatari Export Processing Zone, improving infrastructure and boosting economic activities in the region."
            },
            {
                "title": "Rehabilitation of 2 No. of Classroom for Senior Secondary Section LOT W1 2017 Capital Project",
                "client": "Federal Ministry of Education, Federal Government College Kano",
                "location": "Federal Government College Kano",
                "color": generateRandomLightColor(),
                "contractAmount": "₦6,442,360.00",
                "gallery": [
                    PortfolioImage2
                ],
                "description": "A focused educational infrastructure project aimed at enhancing learning environments for senior secondary school students in Kano."
            },
            {
                "title": "Rehabilitation of Wudi I, Old Tamburawa, and Gari, Regional Works",
                "client": "Ministry of Water Resources, Kano",
                "location": "Wudi I, Old Tamburawa, and Gari, Kano",
                "color": generateRandomLightColor(),
                "contractAmount": "₦223,176,048.62",
                "gallery": [
                    PortfolioImage
                ],
                "description": "An extensive regional project focused on improving critical water infrastructure and resource management in Kano."
            },
                {
                    title: "Supply of Fertilizer NPK",
                    client: "Hadejia-Jaamare River Basin Development Authority, Kano",
                    location: "Kano",
                    color: generateRandomLightColor(),
                    contractAmount: "₦200,162,055.00",
                    gallery: [
                        PortfolioImage3
                    ],
                    description: "Strategic agricultural input supply project supporting local farming communities with high-quality NPK fertilizer to boost agricultural productivity."
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
