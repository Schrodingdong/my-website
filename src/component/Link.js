import react from 'react'
const Link = (props) => {
    return <a className={"Link"} href={props.href}>
        {props.children}
    </a>
}

export default Link;