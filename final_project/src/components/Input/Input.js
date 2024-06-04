import './Input.css';
// import { IoMdEye } from "react-icons/io";

const Input = (props) => {
    return (
        <label>
            <input type={props.type} placeholder={props.placeholder} className={props.className} />
        </label>
    );
};

export default Input;


/* /* {showIcon && <IoMdEye size="30px" color="green" className='icon' /> */
