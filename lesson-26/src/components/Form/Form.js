import { Component } from "react";
import Select from 'react-select';

const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", password: "", color: "", isHuman: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleChange(event, fieldName) {
        // console.log(event.target.value);
        this.setState({ [fieldName]: event.target.value });
    }

    handleChangeSelect(values) {
        // console.log(props);
        this.setState({ color: values.map(option => option.value).join(', ') });
    }

    handleCheckboxChange(event) {
        this.setState({
            isHuman: event.target.checked
        });
    }

    handleSubmit(event) {
        // console.log("Values: " + this.state.name + ' ' + this.state.password + " " + this.state.color);
        console.log(this.state);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ім'я:
                    <input type="text"
                        value={this.state.name}
                        // onChange={this.handleChange} />
                        onChange={(event) => this.handleChange(event, "name")} />
                    {/* це якщо в якості параметра на 12 рядок хочу передати ще щось */}
                </label>
                <label>
                    SurName:
                    <input type="text"
                        value={this.state.password}
                        onChange={(event) => this.handleChange(event, "password")} />
                </label>
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
                <Select
                    isMulti
                    // isClearable={false}
                    name="colors"
                    options={colourOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleChangeSelect}
                />
                <input type="submit" value="Надіслати" />
            </form >
        );
    }
}

export default Form;