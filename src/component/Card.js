import "./Card.css"
import {useEffect, useMemo, useRef, useState} from "react";
import TechTag from "./TechTag";
import {animationControls, motion} from "framer-motion";
const Card = (props) => {
    const [hover, setHover] = useState(false)
    const controller = animationControls();
    const ref = useRef(null);
    const isInViewPort = useIsInViewport(ref);


    const imageCover = {
        width: "100%",
        aspectRatio:"16/9",
        objectFit:"cover",
        borderRadius: "20px",
    }
    const techStackStyle = {
        display: "flex",
        flexDirection: "row",
        gap:"0.5rem 0.5rem",
        flexWrap:"wrap",
        maxWidth:"100%",
        wordWrap:"break-word"
    }
    return <motion.div className={"card-element"} style={{...(hover? {cursor:"pointer"}:{})}}
                       onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)}
                       onMouseDown={() => props.linkToRepo?
                           window.open(props.linkToRepo,"_blank"):
                           null}
                       animate={isInViewPort && { opacity:[0,1], transform:["translateX(-10px)","translateX(0)"] }}
                       transition={{ duration: 0.3, delay: props.animationDelay }}
                       ref={ref}>
        <h2>{props.name}</h2>
        <img src={props.imgCover} style={imageCover}
             onDragStart={(event)=> event.preventDefault()}/>
        {props.children}
        <div style={techStackStyle}>
            {
                props.techStack.map(tech => <TechTag tech={tech}/> )
            }
        </div>
    </motion.div>
}


function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ),
        [],
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}
export default Card;