import './Card.css';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import LogoGreen from '../../../../assets/logo_green.svg';

function Card() {
    return (
        <div className="Card">
            <div >
                <img src={LogoGreen} alt="logoGreen" />
            </div >
            <Input type="text" placeholder="User Name" className="label name" />
            <Input type="password" placeholder="Password" className="label password" />
            <Button label="Login" />
        </div >
    );
}

export default Card;