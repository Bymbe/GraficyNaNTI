import React from 'react'
import App from "../App";

function Konto(props) {
    const loginName = props.Login;
    return (
        <div>
            Login: {props.Login}
        </div>
    )
}

export default Konto;