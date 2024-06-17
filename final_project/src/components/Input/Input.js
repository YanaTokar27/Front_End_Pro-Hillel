import './Input.css';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const Input = (props) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const getInputType = () => {
        if (props.type === 'password') {
            return isPasswordVisible ? 'text' : 'password';
        }
        return props.type;
    }

    return (
        <div className={`input-wrapper ${props.className}`}>
            <label>
                <input
                    type={getInputType()}
                    placeholder={props.placeholder}
                    className={`label ${props.errorMessage && 'error'}`}
                    onChange={(event) => props.onInputChange(event.target.value)}
                    value={props.value} />
                {props.type === 'password' && (
                    <div onClick={() => {
                        setIsPasswordVisible(!isPasswordVisible);
                    }}>
                        {isPasswordVisible ?
                            <IoMdEyeOff className='eye' viewBox="100 100 303 303" /> :
                            <IoMdEye className='eye' viewBox="100 100 303 303" />}
                    </div>
                )}
                {props.errorMessage && <div className='error-message'>{props.errorMessage}</div>}

            </label>
        </div>
    );
};


export default Input;



