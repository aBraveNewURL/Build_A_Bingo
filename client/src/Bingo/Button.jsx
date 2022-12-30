import { useState } from "react";
import '../Bingo/Bingo.css'

function Button () {
    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    } 

    let toggleClassCheck = btnState ? ' active' : '';

    return (
        <button className={`btn${toggleClassCheck}`} onClick={handleClick}
        >Press Me</button>
    )
};

export default Button;