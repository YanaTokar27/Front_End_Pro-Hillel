import { Component } from "react";

import './header.css';

class Title extends Component {
    render() {
        const { text } = this.props;
        return <div className="App-title">{text}</div>
    }
}

export default Title;