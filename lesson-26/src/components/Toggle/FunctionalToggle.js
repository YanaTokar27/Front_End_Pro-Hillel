import { useState } from 'react';

const Toggle = () => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn(prevIsToggleOn => !prevIsToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "On" : "Off"}
        </button>
    )
}

export default Toggle;
