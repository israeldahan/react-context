import React from "react";
import Button from "./Button";


const Text = (props) => {
    return (
        <div>
          <p> {props.text}</p>
           <Button func_props_c = {props.func_props} 
           textToButton = {props.textToButton}/>
        </div>
    )
}
export default Text;