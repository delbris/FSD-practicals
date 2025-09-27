import { Component } from "react";
class Democlass extends Component {
    constructor() {
        super()
        this.state = {
            message1: "Heyy",
            message2: "There"
        }
    }
    changeText = () => {
        if (this.state.message1 == "Heyy") {
            this.setState({
                message1: "See",
                message2: "Yaa !!!  Tata"
            })
        }
        else {
            this.setState({
                message1: "Heyy",
                message2: "There"
            })
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.message1} {this.state.message2}</h2>
                <button onClick={this.changeText}>Click Me</button>
            </div>
        )
    }
}
export default Democlass