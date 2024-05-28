import './input.css';

const Input = ({ className, labelName }) => {
    return (
        <label className={`label-input ${labelName}`}>
            {labelName}: <input type="text" />
        </label>
    );
};

export default Input;