import { Component } from "react";

import './text.css';

class TextBlock extends Component {
    render() {
        const { text } = this.props;
        return <div className="text">{text}</div>
    }
}

export default TextBlock;