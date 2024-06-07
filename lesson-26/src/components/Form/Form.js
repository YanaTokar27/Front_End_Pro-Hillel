import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", password: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, fieldName) {
        // console.log(event.target.value);
        this.setState({ [fieldName]: event.target.value });
    }

    handleSubmit(event) {
        alert('Ім\'я, що було надіслано: ' + this.state.name + this.state.password);
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
                    Password:
                    <input type="text"
                        value={this.state.password}
                        onChange={(event) => this.handleChange(event, "password")} />
                </label>
                <input type="submit" value="Надіслати" />
            </form>
        );
    }
}

export default Form;