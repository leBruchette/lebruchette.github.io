import { ContentData } from './types';

export const content: ContentData = {
    personal: {
        name: "Michael Bruzina",
        title: "Backend-leaning Full Stack Engineer",
        bio: ["Writes code. ", "Rides bikes. ", "Herds cats. "],
        profileImage: "/profile.jpg",
        email: "michael.bruzina@gmail.com",
        location: "Hartsburg, MO"
    },
    experience: {
        title: "Professional Experience",
        subtitle: "Key achievements and technical expertise from my career journey",
        items: [
            {
                id: "new-relic",
                company: "New Relic",
                position: "Lead Software Engineer",
                duration: "09/21 - 11/24",
                location: "Remote",
                description: [
                    "Designed and implemented an AWS-based deployment platform that modernized Docker deployer infrastructure, enabling seamless E2E and regression testing across development teams",
                    "Implemented a zero-configuration Java Agent installation within 4 months, enhancing customer experience by enabling seamless dynamic re-attachment to application servers",
                    "Reduced MTTD/MTTR by 40% within 3 months by implementing an intelligent alerting system with New Relic Synthetics and AWS Lambda, enhancing customer onboarding efficiency.",
                    "Drove Growth Engineering initiatives including newrelic-cli development, Infrastructure-as-Code solutions (Puppet modules), and UI-to-YAML migration for onboarding framework",
                    "Individual contributor on greenfield workflow product leveraging Temporal.io's distributed systems architecture"
                ],
                technologies: ["Go", "Java", "TypeScript", "React", "Node.js", "REST", "GraphQL", "AWS", "Terraform", "PostgreSQL", "Redis", "Docker", "Ruby", "K8S"],
                logo: "./logos/new-relic.png",
                companyUrl: "https://newrelic.com/"
            },
            {
                id: "carfax-two",
                company: "Carfax",
                position: "Senior Software Engineer",
                duration: "7/17 - 9/21",
                location: "Columbia, MO",
                description: [
                    "Built SMS alerting microservice from ground up, processing dealer notifications for buyer leads with 99.9% uptime serving 10K+ dealers",
                    "Architected cloud-native Dealer Account Management application using TypeScript/Node.js frontend with Serverless Framework backend, reducing infrastructure costs by 30%",
                ],
                technologies: ["Java", "Kotlin", "Spring Boot", "React", "Node.js", "REST", "GraphQL", "AWS", "MySql", "Oracle", "Terraform", "CDK", "Serverless Framework"],
                logo: "/logos/carfax.png",
                companyUrl: "https://carfax.com"
            },
            {
                id: "equipment-share",
                company: "EquipmentShare",
                position: "Senior Software Engineer",
                duration: "2/17 - 7/17",
                location: "Columbia, MO",
                description: [
                    "Enhanced telematics rule engine with partitioned database architecture, improving data consistency and reducing blast radius for multi-tenant customers",
                    "Integrated multi-vendor tracking APIs (John Deere, Komatsu, Hyundai) providing unified asset visibility across manufacturer platforms",
                ],
                technologies: ["Python", "Flask", "Pyramid", "REST", "PostgreSQL", "AWS"],
                logo: "/logos/es.png",
                companyUrl: "https://equipmentshare.com"
            },
            {
                id: "carfax-one",
                company: "Carfax",
                position: "Product Developer",
                duration: "3/11 - 2/17",
                location: "Columbia, MO",
                description: [
                    "Re-architected consumer business domain using microservices principles, enabling unified experience across web, mobile web, and native applications",
                    "Increased consumer revenue by 15% through PayPal and Amazon Pay integration in purchase flow",
                ],
                technologies: ["Groovy", "Java", "Spring Boot", "MySql", "Oracle"],
                logo: "/logos/carfax.png",
                companyUrl: "https://carfax.com"
            },
            {
                id: "Enterprise",
                company: "Enterprise Holdings",
                position: "Senior Software Engineer",
                duration: "12/04 - 2/11",
                location: "St. Louis, MO",
                description: [
                    "Integrated multi-brand reservation system consolidating Alamo, National, and Enterprise web services into unified customer experience",
                    "Developed OpenTravelAlliance-compliant SOAP service exposing reservation functionality to third-party travel sites (Orbitz, Kayak)",
                ],
                technologies: ["Java", "Struts", "Spring Framework", "REST", "Apache Axis", "Oracle"],
                logo: "/logos/erac.png",
                companyUrl: "https://www.enterprisemobility.com/en/index.html"
            },
        ]
    },
    skills: {
        title: "Skills & Expertise",
        subtitle: "Technologies and tools I work with to bring ideas to life",
        categories: [
            {
                name: "Frontend Development",
                color: "purple",
                skills: [
                    { name: "React", level: 95, category: "frontend" },
                    { name: "TypeScript", level: 90, category: "frontend" },
                    { name: "Next.js", level: 85, category: "frontend" },
                    { name: "Tailwind CSS", level: 90, category: "frontend" },
                    { name: "JavaScript", level: 95, category: "frontend" },
                    { name: "HTML5 & CSS3", level: 95, category: "frontend" }
                ]
            },
            {
                name: "Backend Development",
                color: "blue",
                skills: [
                    { name: "Node.js", level: 90, category: "backend" },
                    { name: "Express.js", level: 85, category: "backend" },
                    { name: "PostgreSQL", level: 80, category: "backend" },
                    { name: "MongoDB", level: 85, category: "backend" },
                    { name: "REST APIs", level: 90, category: "backend" },
                    { name: "GraphQL", level: 70, category: "backend" }
                ]
            },
            {
                name: "Tools & Technologies",
                color: "green",
                skills: [
                    { name: "Git & GitHub", level: 95, category: "tools" },
                    { name: "Docker", level: 75, category: "tools" },
                    { name: "AWS", level: 70, category: "tools" },
                    { name: "Jest", level: 80, category: "tools" },
                    { name: "Figma", level: 85, category: "tools" },
                    { name: "VS Code", level: 95, category: "tools" }
                ]
            },
            {
                name: "Soft Skills",
                color: "orange",
                skills: [
                    { name: "Problem Solving", level: 95, category: "soft" },
                    { name: "Team Leadership", level: 85, category: "soft" },
                    { name: "Communication", level: 90, category: "soft" },
                    { name: "Project Management", level: 80, category: "soft" },
                    { name: "Mentoring", level: 85, category: "soft" },
                    { name: "Agile/Scrum", level: 90, category: "soft" }
                ]
            }
        ]
    },
    social: {
        github: "https://github.com/lebruchette",
        linkedin: "https://linkedin.com/in/mpbruzina"
    },
    resume: {
        downloadUrl: "/resume.pdf",
        viewWorkUrl: "#experience"
    },
    hero: {
        subtitle: "Building the future, one line of code at a time",
        cta: {
            primary: "View Professional Experience",
            secondary: "Download Resume"
        }
    }
};