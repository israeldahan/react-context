import React from "react";
import {ButtonContext} from '../ButtonContext'

const Button = (props) => {
    const {user} = React.useContext(ButtonContext);  

    return (
        <div>
            <p>{user.name}</p>
           <button onClick={() => props.func_props_c(props.textToButton)}>HI</button> 
        </div>
    )
}
export default Button; 