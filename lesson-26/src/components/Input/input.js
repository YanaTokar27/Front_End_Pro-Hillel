import './input.css';
import { UserContext } from '../../App';
import { useContext } from 'react';

const Input = ({ isError, label, name, onInputChange, value }) => {
    const user = useContext(UserContext);             //використання хуку useContext
    console.log(user);

    return (
        <label className={`label-input row`}>
            {label}
            <input
                className={isError && "input-error"}
                name={name}
                onChange={(event) => onInputChange(event.target.value)}
                value={value}
                type="text" />
        </label>
    );
};

export default Input;