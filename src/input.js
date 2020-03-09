import React, { Component } from "react";

export default class input extends Component {
constructor(props){
  super(props)

    this.state = {
      value: [],
      second: []
    }

  }

  handlechange = e =>{
    this.setState({value: e.target.value})
  }

submit = (e) => {
  this.setState({second: this.state.value})
  console.log(this.state.value)
e.preventDefault()
}

click = () => {
  console.log(this.state.value)
}

  render() {
  
    return (
      <div>
        <form onSubmit = {this.submit}>
          <label>
            Name:
            <input type="text" name="name" value = {this.state.value} onChange = {this.handlechange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.second}</h1>

        <button onClick = {this.click}>test</button>
      </div>
    );
  }
}
