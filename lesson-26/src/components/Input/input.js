import './input.css';

const Input = ({ isError, label, name, onInputChange, value }) => {
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