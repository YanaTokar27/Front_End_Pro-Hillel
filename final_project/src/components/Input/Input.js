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
        <div className='input-wrapper'>
            <label>
                <input type={getInputType()} placeholder={props.placeholder} className={props.className} />
                {props.type === 'password' && (
                    <div onClick={setIsPasswordVisible(!isPasswordVisible)}>
                        {isPasswordVisible ?
                            <IoMdEyeOff className='eye' viewBox="100 100 303 303" /> :
                            <IoMdEye className='eye' viewBox="100 100 303 303" />}
                    </div>
                )}
            </label>
        </div>
    );
};

export default Input;



