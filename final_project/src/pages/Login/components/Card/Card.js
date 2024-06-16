import './Card.css';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import LogoGreen from '../../../../assets/logo_green.svg';
import { useState } from 'react';

function Card() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginEmpty, setIsLoginEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [showUnauthorizedError, setShowUnauthorizedError] = useState(false);

    const validateForm = () => {
        if (!login.trim()) setIsLoginEmpty(true)
        if (!password.trim()) setIsPasswordEmpty(true)

        return login.trim() && password.trim()
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValid = validateForm();

        if (!isValid) {
            return null;
        }

        const user = {
            "login": login.trim(),
            "password": password.trim()
        }

        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            }
        });

        setShowUnauthorizedError(response.status !== 200);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Card">
                <div >
                    <img src={LogoGreen} alt="logoGreen" />
                </div >
                <Input
                    type="text"
                    placeholder="User Name"
                    className="name"
                    onInputChange={(value) => {
                        setLogin(value)
                        setIsLoginEmpty(false)
                    }}
                    value={login}
                    errorMessage={isLoginEmpty && 'Please Enter login'}
                />

                <Input
                    type="password"
                    placeholder="Password"
                    className="password"
                    onInputChange={(value) => {
                        setPassword(value)
                        setIsPasswordEmpty(false)
                    }}
                    value={password}
                    errorMessage={isPasswordEmpty && 'Please Enter password'}
                />
                {showUnauthorizedError && <div className='unauthorized'>Login or password incorrect</div>}
                <Button label="Login" />
            </div >
        </form>
    );
}

export default Card;