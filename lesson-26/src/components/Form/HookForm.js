import { useState, useRef } from 'react';
import Input from '../Input/input';
import './HookForm.css';

const Form = () => {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isSurNameEmpty, setIsSurNameEmpty] = useState(false);

    const inputEl = useRef();


    const validateForm = () => {
        if (!name.trim()) setIsNameEmpty(true)
        if (!surName.trim()) setIsSurNameEmpty(true)

        return name.trim() && surName.trim()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputEl.current.value);
        const isValid = validateForm();

        if (!isValid) {
            return null;
        }

        console.log(name, surName);
    }

    return (
        <form onSubmit={handleSubmit}>

            <Input
                label="Name"
                name="name"
                onInputChange={(value) => {
                    setName(value)
                    setIsNameEmpty(false)
                }}
                value={name}
                isError={isNameEmpty}
            />
            {isNameEmpty && <div className='Error'>Please Enter the name</div>}
            <p></p>
            <Input
                label="SurName"
                name="surName"
                onInputChange={(value) => {
                    setSurName(value)
                    setIsSurNameEmpty(false)
                }}
                value={surName}
                isError={isSurNameEmpty}
            />
            {isSurNameEmpty && <div className='Error'>Please Enter the surname</div>}

            <p></p>
            {/* <label>
                    Human?:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isHuman}
                        onChange={this.handleCheckboxChange} />
                </label> */}
            <p></p>
            {/* <Select
                isMulti
                // isClearable={false}
                name="colors"
                options={colourOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeSelect}
            /> */}
            Test: <input ref={inputEl} type='text'></input>
            <input type="submit" value="Надіслати" />
        </form >
    )
}

export default Form;