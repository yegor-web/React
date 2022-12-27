import React from 'react';
import Child from './Child';


class Comp extends React.Component {
  state = {
    name: "ooooop",
    num: 12345,
    isWorking: false
  };

  componentDidMount() {
    console.log("Был вмонтирован");
  }
  componentDidUpdate() {
    console.log("Был обновлен");
  }
  componentWillUnmount() {
    console.log("Будет размонтирован");
  }
  render() {
    return (
      <div>
        <input type="text" placeholder={this.state.name} onChange={() => { this.setState({ isWorking: true }) }} />
        {this.state.num}
        <button onClick={() => {
          this.setState({ name: "boooms" })
        }}>
          Жмяк
        </button>
        <Child num={this.state.num} name={this.state.name} isWorking={this.state.isWorking} />
      </div>
    )
  }
}


export default Comp;