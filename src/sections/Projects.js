import Card from "../component/Card";
import { useState} from "react";
import projectData from "../projectsData/ProjectData";
import "./Projects.css"
const Projects = () => {
    const [slide, setSlide] = useState(0)

    let cardNumber = 0;
    const projectsContainerStyle = {
        margin:"auto",
        width:"85vw",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        textAlign: "left"
    }
    const projectCarousel={
        overflow:"scrollable",
        display:"flex",
        flexDirection:"row",
        gap:"2rem",
        marginTop:"2rem",
        width:"fit-content",
        transition:"200ms ease-in-out",
        transform:"translateX("+ slide +"px)"
    }
    const projectCarouselWrapperStyle = {
        overflowX: "scroll",

    }
    const textStyle = {
        textAlign: "center",
        margin: "5rem"
    }

    return <div style={projectsContainerStyle} id={"projects"} >
        <h1>Projects</h1>
        <div style={projectCarouselWrapperStyle} className={"carousel-parent"}>
            <div style={projectCarousel}>
                {
                    projectData.map((project) => {
                        return <Card name={project.name}
                                     imgCover={project.image}
                                     techStack={project.techStack}
                                     linkToRepo={project.url}
                                     animationDelay={0.25*cardNumber++}>
                            <p>{project.description}</p>
                        </Card>
                    })
                }
            </div>
        </div>

        <p style={textStyle}>Want to check more ? visit my <u><a href={"https://github.com/Schrodingdong"}>github</a></u> :^)</p>
    </div>
}

export default Projects;