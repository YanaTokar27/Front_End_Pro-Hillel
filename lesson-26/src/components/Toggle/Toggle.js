import { Component } from "react";

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {   //варіант-1 + рядок 9
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // handleClick = () => {     //варіант-2 (без рядку 9)
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    // handleClick() {     //варіант-3 (без рядку 9)
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    // render() {
    //     return (
    //         <button onClick={() => this.handleClick()}>
    //             {this.state.isToggleOn ? 'ON' : 'OFF'}
    //         </button>
    //     );
    // }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;