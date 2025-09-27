import { Component } from "react";
import '../css/style.css';
class Increment extends Component{
    constructor(){
        super()
        this.state = {count:0}
    }
    inc5_counter(){
        this.inc_counter()
        this.inc_counter()
        this.inc_counter()
        this.inc_counter()
        this.inc_counter()
    }
    inc_counter(){
        this.setState(prevState => (
                {
                    count : prevState.count+1
                }
            )
        )
    }
    dec_counter(){
        this.setState({
            count : this.state.count-1
        }, ()=>{
            console.log(this.state.count)
        })
    }
    reset_counter(){
        this.setState({
            count : 0
        }, ()=>{
            console.log(this.state.count)
        })
    }
    render(){
        return(
            <div>
                <h1>Counter : {this.state.count} </h1>
                <button className="blue" onClick={()=> {this.inc_counter()}}>Increment</button><br /><br />
                <button className="red" onClick={()=> {this.inc5_counter()}}>Increment by 5</button><br /><br />
                <button className="blue" onClick={()=> {this.dec_counter()}}>Decrement</button><br /><br />
                <button className="red" onClick={()=> {this.reset_counter()}}>Reset</button>
            </div>
        )
    }
}

export default Increment