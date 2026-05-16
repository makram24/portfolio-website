import { projects } from "./data/projects";

export const config = {
    developer: {
        name: "Makram",
        fullName: "Makram Al Moghrabi",
        title: "Full Stack Software Engineer",
        subtitle: "MSc Computer Science Engineer (BME)",
        description:
            "Analytical Software Engineer pursuing an MSc in Computer Science Engineering at BME. Over 4 years of full-stack experience specializing in React.js, Firebase, and secure system architecture — bridging IoT/sensors and web/mobile software.",
    },
    landing: {
        subtitle1: "Full Stack Software Engineer",
        subtitle2: "MSc Computer Science · BME",
    },
    social: {
        github: "https://github.com/makram24",
        portfolio: "https://makramalmoghrabi.com",
        email: "makramalmoghrabi@gmail.com",
        phone: "+36 30 746 6581",
        phoneHref: "tel:+36307466581",
        location: "Budapest, Hungary",
        address: "Kunigunda útja 25, 1037",
    },
    openTo: {
        headline:
            "All MSc coursework completed — available for immediate full-time employment",
        items: [
            { label: "Engagement", value: "Full-time · Contract · Freelance" },
            { label: "Location", value: "Budapest, Hungary · EU remote" },
            { label: "Focus", value: "React · Firebase · IoT · Secure systems" },
            { label: "Status", value: "Open to hire now" },
        ],
        responseTime: "I typically reply within 24–48 hours.",
    },
    about: {
        title: "About Me",
        description:
            "Analytical Software Engineer currently pursuing an MSc in Computer Science Engineering at the Budapest University of Technology and Economics (BME). Over 4 years of experience in full-stack development, specializing in React.js, Firebase, and secure system architecture.",
        clientNote:
            "Proven expertise in bridging hardware (IoT/sensors) and software (web/mobile). Partnered with agencies including The Social Bang and Brainy Media to deliver high-performance digital solutions under tight deadlines.",
    },
    highlights: [
        { value: "4+", label: "Years experience" },
        { value: "MSc", label: "BME · Software Engineering" },
        { value: "3.56", label: "B.Sc. GPA / 4.0" },
        { value: "CCNA", label: "Routing & security certified" },
    ],
    education: [
        {
            degree: "MSc Computer Science Engineering",
            school: "Budapest University of Technology and Economics (BME)",
            period: "2024 – Feb 2027",
            location: "Budapest, Hungary",
            detail:
                "Specialization: Software Engineering & Smart Cities. Coursework: advanced software architecture, time series analysis for urban environments, cloud-based IoT implementation.",
        },
        {
            degree: "Bachelor of Science in Computer Science",
            school: "Lebanese International University (LIU)",
            period: "2019 – 2022",
            location: "Lebanon",
            detail: "Academic excellence — graduated with a 3.56 GPA.",
        },
    ],
    certifications: [
        {
            name: "CCNA Routing & Switching: Scaling Networks",
            issuer: "Cisco",
            period: "Certified",
        },
        {
            name: "CCNAv7: Switching, Routing, and Wireless Essentials",
            issuer: "Cisco",
            period: "Certified",
        },
        {
            name: "Microsoft Security Fundamentals",
            issuer: "Microsoft",
            period: "Master Level",
        },
        {
            name: "Digital Marketing Fundamentals",
            issuer: "Maharat min Google",
            period: "Certified",
        },
        {
            name: "Cloud Computing Workshop",
            issuer: "IEEE LIU Student Branch",
            period: "Workshop",
        },
    ],
    engineeringProjects: [
        {
            title: "Smart City Agent",
            category: "Full Stack / AI",
            description:
                "React dashboard integrating real-time Budapest city APIs (BKK/public services) with an AI chat interface. Specialized agents parse natural language and visualize live transport routes and service locations on interactive maps.",
            stack: ["React", "AI agents", "Maps", "City APIs"],
        },
        {
            title: "BeatSync HRV Analysis",
            category: "Mobile & HealthTech",
            description:
                "Flutter app processing Heart Rate Variability (HRV) data with hardware sensor integration for real-time health monitoring and visualization.",
            stack: ["Flutter", "Dart", "Sensors", "HealthTech"],
        },
        {
            title: "Collaborative Task Manager",
            category: "Complex UI",
            description:
                "Project management tool with custom drag-and-drop team workflows and pixel-pinned comments on uploaded design assets for precise feedback.",
            stack: ["React", "Custom UI", "Collaboration"],
        },
        {
            title: "Cloud-Based Weather Monitoring",
            category: "IoT",
            description:
                "Dual approach: ThingSpeak/MATLAB for regional Hungarian weather data and ESP8266/AHT10 sensors via MQTT for hardware-based monitoring.",
            stack: ["ThingSpeak", "MATLAB", "MQTT", "ESP8266"],
        },
        {
            title: "Computer Vision Meter Reader",
            category: "Computer Vision",
            description:
                "Utility tool using camera-based image recognition to automate water utility meter readings.",
            stack: ["Computer Vision", "Image recognition"],
        },
    ],
    experiences: [
        {
            position: "Full Stack Developer & Web Designer",
            company: "Carrot Media",
            period: "2022 - 2025",
            location: "Lebanon",
            description:
                "Architected and deployed custom web applications and e-commerce platforms using React.js and Firebase.",
            responsibilities: [
                "Managed end-to-end development of digital card systems for agency clients",
                "Partnered with The Social Bang and Brainy Media on high-performance solutions",
                "Delivered under tight campaign deadlines with scalable frontends and backends",
            ],
            technologies: ["React.js", "Firebase", "WordPress", "Shopify", "Digital cards"],
        },
        {
            position: "Full Stack Developer",
            company: "Freelance",
            period: "2023 - Present",
            location: "Remote / International",
            description:
                "Scalable website development and UI/UX design for international clients with secure PHP/MySQL backends.",
            responsibilities: [
                "Providing full-stack delivery for brands and agencies worldwide",
                "Implementing secure backend infrastructures to ensure data integrity",
                "CMS and custom web application builds",
            ],
            technologies: ["React", "PHP", "MySQL", "WordPress", "UI/UX"],
        },
        {
            position: "Full Stack Developer",
            company: "AWK Development",
            period: "2021 - 2022",
            location: "Lebanon",
            description:
                "Part-time development and optimization of backend systems using PHP, CSS, and JavaScript.",
            responsibilities: [
                "Integrated AJAX calls and MySQL databases for responsiveness",
                "Developed and optimized backend features",
                "Supported production web application workflows",
            ],
            technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "CSS"],
        },
    ],
    projects: [...projects],
    contact: {
        email: "makramalmoghrabi@gmail.com",
        phone: "+36 30 746 6581",
        phoneHref: "tel:+36307466581",
        github: "https://github.com/makram24",
        portfolio: "https://makramalmoghrabi.com",
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
    },
    skills: {
        develop: {
            title: "FULL-STACK DEVELOPMENT",
            description: "Web & mobile applications",
            details:
                "React.js, JavaScript (ES6+), PHP, Flutter (Dart), HTML5, CSS3/Bootstrap. Building production apps with Firebase, MySQL, jQuery, and AJAX.",
            tools: [
                "React.js",
                "JavaScript",
                "PHP",
                "Flutter",
                "Firebase",
                "MySQL",
                "HTML5",
                "CSS3",
                "jQuery",
                "AJAX",
            ],
        },
        iot: {
            title: "IoT & CLOUD",
            description: "Sensors, data & smart systems",
            details:
                "Bridging hardware and software with ThingSpeak, MQTT, ESP8266, and MATLAB for data processing and cloud IoT pipelines.",
            tools: [
                "ThingSpeak",
                "MQTT",
                "ESP8266",
                "MATLAB",
                "IoT",
                "Smart Cities",
            ],
        },
        security: {
            title: "NETWORKING & SECURITY",
            description: "CCNA · secure architecture",
            details:
                "CCNA certified (routing, switching, wireless). Microsoft Security Fundamentals (Master Level). SSL, OAuth, and SQL injection prevention in production systems.",
            tools: [
                "CCNA",
                "Routing & Switching",
                "Wireless",
                "SSL",
                "OAuth",
                "Git/GitHub",
                "WordPress",
                "Shopify",
                "Squarespace",
            ],
        },
    },
};
