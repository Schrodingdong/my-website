import springLogo from "./assets/logo/spring-boot.svg"
import dockerLogo from "./assets/logo/docker.svg"
import reactLogo from "./assets/logo/react.svg"
import unityLogo from "./assets/logo/unity.svg"
import androidLogo from "./assets/logo/android.svg"

import javaLogo from "./assets/logo/java.svg"
import nodeLogo from "./assets/logo/nodedotjs.svg"
import cSharpLogo from "./assets/logo/c-sharp.svg"
import pythonLogo from "./assets/logo/python.svg"

import colors from "./colors";
const techStacks = {
    spring:  {
        name : "Spring",
        logo : springLogo,
        color : colors.green
    },
    docker: {
        name : "Docker",
        logo : dockerLogo,
        color : colors.lightBlue
    },
    react: {
        name : "React",
        logo : reactLogo,
        color : colors.blue
    },
    unity: {
        name: "Unity",
        logo : unityLogo,
        color : colors.gray
    },
    android: {
        name: "Android",
        logo: androidLogo,
        color: colors.green
    },
    java: {
        name:"Java",
        logo: javaLogo,
        color: colors.red
    },
    python: {
        name: "Python",
        logo: pythonLogo,
        color: colors.lightBlue
    },
    cSharp: {
        name:"C#",
        logo: cSharpLogo,
        color: colors.green
    },
    nodeJs: {
        name:"NodeJs",
        logo: nodeLogo,
        color: colors.green
    }
}

export default techStacks;