import profilePic from "../assets/profilPic.png"
import TechTag from "../component/TechTag";
import { motion } from "framer-motion";
import techStacks from "../TechStacks";
import TextTag from "../component/TechTag";
const AboutMe = () => {

    const aboutMeContainerStyle = {
        margin:"auto",
        width:"85vw",
        height:"100vh",
        display:"flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems:"center"
    }
    const textContainerStyle = {
        textAlign:"left",
        width:"50%",
    }
    const titleStyle = {
        margin: 0,
        opacity:0
    }
    const subtitleStyle ={
        color:"rgba(255,255,255,0.5)",
        margin:"0 0 2rem 0",
        opacity:0
    }
    const paragraphStyle = {
        textAlign: "justify",
        textJustify:"inter-word",
        opacity:0
    }
    const imgContainer = {
        width:"50%"
    }
    const imgStyle = {
        width:"70%",
        borderRadius:"100%",
        opacity:0
    }
    const techStackStyle = {
        display: "flex",
        flexDirection: "row",
        gap:"0.5rem 1rem",
        flexWrap:"wrap",
        maxWidth:"100%",
        wordWrap:"break-word",
    }
    const myStack = [
        techStacks.spring,
        techStacks.docker,
        techStacks.react,
        techStacks.unity,
        techStacks.java,
        techStacks.nodeJs,
        techStacks.python,
        techStacks.cSharp
    ]
    const animationDelay = 0.25;
    const popDelay = 0.25;
    var tagDelay = 0;
    return <div style={aboutMeContainerStyle} id={"aboutMe"}>
        <div style={textContainerStyle}>
            <motion.h1 style={titleStyle}
                animate={{ opacity:[0,1], transform:["translateX(-20px)","translateX(0)"] }}
                transition={{ duration: 1 }} >ALAMI IBN JAMAA HAMZA</motion.h1>
            <motion.h2 style={subtitleStyle}
                animate={{ opacity:[0,1], transform:["translateX(-20px)","translateX(0)"] }}
                transition={{ duration: 1, delay:animationDelay }}>Software Engineer Student @ ENSIAS</motion.h2>
            <motion.p style={paragraphStyle}
                animate={{ opacity:[0,1],transform:["translateX(-20px)","translateX(0)"] }}
                transition={{ duration: 1, delay:animationDelay*2}}>I am a passionate first year software engineer student at ENSIAS who's goal is to learn
                about the evergrowing technologies that exists and will be discorvered ! Below this section
                lies other sections describing my overall hard and soft skills.</motion.p>
            <div style={techStackStyle}>
                {
                    myStack.map(tech => {
                        tagDelay += popDelay;
                        return <TextTag tech={tech} popDelay={animationDelay*3 + tagDelay}/>;
                    })
                }
            </div>
        </div>
        <div style={imgContainer}>
            <motion.img src={profilePic} style={imgStyle}
                        animate={{ opacity:[0,1] }}
                        transition={{ duration:1 }}/>
        </div>
    </div>
}

export default AboutMe;