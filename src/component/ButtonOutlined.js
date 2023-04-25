import "./ButtonOutlined.css"

const ButtonOutlined = (props) => {
    return <button className={"button-outlined"}>
        <a href={props.href}>
            {props.children}
        </a>
    </button>
}

export default ButtonOutlined;