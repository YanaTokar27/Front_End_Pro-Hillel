import './Input.css';
// import { IoMdEye } from "react-icons/io";

const Input = () => {
    return (
        <label>
            {/* {showIcon && <IoMdEye size="30px" color="green" className='icon' />} */}
            <input className='label' type='text' placeholder='User Name' /> <br></br>
            <input className='label' type='password' placeholder='Password' />
        </label>
    );
};

export default Input;
