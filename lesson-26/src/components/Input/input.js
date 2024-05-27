import './input.css';

const Input = ({ className, labelName }) => {
    return (
        <label className={className ? `label-input ${className}` : 'label-input'}>
            {labelName}: <input type="text" />
        </label>
    );
};

export default Input;