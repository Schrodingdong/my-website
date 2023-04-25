import dimens from "../dimens";
import Link from "./Link";
import ButtonOutlined from "./ButtonOutlined";


const MyNavBar = () => {
    const headerStyle = {
        // backgroundColor:"red",
        width:"100vw",
        position:"absolute",
        top:0,
        padding: dimens.paddingS + " " + dimens.paddingL,
        display:"flex",
        flexDirection: "horizontal",
        justifyContent:" right",
        boxSizing:"border-box"
    }
    const navElementsStyle = {
        display: "flex",
        flexDirection: "horizontal",
        alignItems:"center",
        gap:"2rem"
    }

    return <div style={headerStyle}>
        <div style={navElementsStyle}>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <ButtonOutlined href="#sqjdsq">Contact</ButtonOutlined>
        </div>
    </div>
}

export default MyNavBar;