import nexhubCover from "./images/NexHub.png"
import colorisCover from "./images/Coloris.png"
import eitcWebsiteCover from "./images/EITCWebsite.png"
import instalyticsCover from "./images/instalytics.png"
import TechStacks from "../TechStacks";

const ProjectData = [
    {
        name: "NexHub",
        description: "Centralized ressource collector and a learning hub for students and club members",
        url: "https://github.com/Schrodingdong/NexHub",
        techStack: [
            TechStacks.spring,
            TechStacks.docker,
            TechStacks.react,
            TechStacks.nodeJs,
            TechStacks.java
        ],
        image: nexhubCover
    },
    {
        name: "Coloris",
        description: "Coloris is an android app with the goal of helping colorblind people.",
        url: "https://github.com/Schrodingdong/coloris",
        techStack: [
            TechStacks.android,
            TechStacks.java
        ],
        image: colorisCover
    },
    {
        name:"Instalytics",
        description: "a sample app to analyse and get information from analytics using statistics and Machine Learning",
        url: "https://github.com/Schrodingdong/InstalyticsJavaApp",
        techStack: [
            TechStacks.android,
            TechStacks.java
        ],
        image: instalyticsCover
    },
    {
        name:"EITC Website",
        description: "React website for the ENSIAS IT CLUB",
        url: "https://github.com/Schrodingdong/it-website",
        techStack: [
            TechStacks.react,
            TechStacks.nodeJs
        ],
        image: eitcWebsiteCover
    }
]

export default ProjectData;