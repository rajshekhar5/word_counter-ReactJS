
import { Component } from "react";

export class Paragraph extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {count: 0};
    }

    handleChange = (event) => {
        let str = event.target.value;
        if(str === ""){
            this.setState({
                count: 0
            })
        }
        else{
            this.setState({
                count: str.split(" ").length
            })
        }
    }
    render()
    {
        return(
            <center>
                <div>
                    <h1>Responsive Paragraph Word Counter</h1>
                    <textarea name="para" id="para" cols="70" rows="10" placeholder="Enter the content here" onChange={this.handleChange}></textarea>
                    <p>Word Count: {this.state.count}</p>
                </div>
            </center>
        )
    }
}