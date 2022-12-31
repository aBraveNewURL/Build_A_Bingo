import { useState } from "react";
import '../Bingo/Bingo.css'

function Button () {
    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    } 

    let toggleClassCheck = btnState ? ' active' : '';

    return (
        // added a 'hover' Tailwind class
        <button className={`btn${toggleClassCheck} hover:bg-darkerBlue min-w-full min-h-full text-xs sm:text-sm md:text-base`} onClick={handleClick}
        >Press Me</button>
    )
};

export default Button;