import { Component } from "react";

class Select extends Component {
    render() {
        //         // const options = this.props.options.map((option) => (
        //         //     <option value={option.values}>{option.name}</option>
        //         // ));
        //         // console.log(options);
        return (
            // <select name="cars" id="cars">
            //     {options}
            // </select>
            <select name="cars" id="cars">
                {this.props.children}

            </select>
        )
    }
}

// const Select = ({ children }) => {
//     return (
//         <select name="cars" id="cars">
//             {children}
//         </select>

//     )
// }

export default Select;