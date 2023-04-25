import {motion} from "framer-motion";

const TextTag = ({ tech, popDelay}) => {
    const tagStyle = {
        borderRadius:"10px",
        padding: "0.3rem 0.75rem",
        backgroundColor: tech.color,
        display:"inline-flex",
        flexDirection:"row",
        gap:"0.5rem",
        justifyContent:"center",
        scale:0
    }
    return <motion.span style={tagStyle}
                        animate={{ scale:[0,1.1,1] }}
                        transition={{ duration: 0.3, delay:popDelay, bounce:true}}>
            <img src={tech.logo}/>
            <p style={{margin:0}}>{tech.name}</p>
    </motion.span>
}

export default TextTag;