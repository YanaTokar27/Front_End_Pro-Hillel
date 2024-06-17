import './Button.css';

const Button = ({ label }) => {
    return (
        <button className='Button' type='submit'>{label}</button>
    )
}

export default Button;
