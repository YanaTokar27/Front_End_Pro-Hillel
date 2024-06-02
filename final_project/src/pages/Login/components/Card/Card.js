import './Card.css';
import Input from '../../../../components/Input/Input';
import LoginButton from '../../../../components/Button/Button';
import LogoGreen from '../../../../assets/logo_green.svg';

function Card() {
    return (
        <div className="Card">
            <div className='LogoGreen' >
                <img src={LogoGreen} alt="logoGreen" />
            </div >
            <Input />
            <LoginButton />
        </div >
    );
}

export default Card;