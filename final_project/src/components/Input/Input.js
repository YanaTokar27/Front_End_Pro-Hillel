import './Input.css';
import { IoMdEye } from "react-icons/io";

const Input = (props) => {
    return (
        <div className='input-wrapper'>
            <label>
                <input type={props.type} placeholder={props.placeholder} className={props.className} />
                {props.type === 'password' && <IoMdEye viewBox="100 100 303 303" className='eye' />}
            </label>
        </div>
    );
};

export default Input;


