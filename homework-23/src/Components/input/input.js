import './input.css';
import { IoMdEye } from "react-icons/io";

const Input = ({ showIcon, labelName }) => {
    return (
        <label className={`label-input row`}>
            {showIcon && <IoMdEye size="30px" color="green" className='icon' />}
            {labelName}: <input type="text" />
        </label>
    );
};

export default Input;
