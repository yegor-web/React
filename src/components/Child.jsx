import React from 'react';

class Child extends React.Component {
  render() {
    return (<>
      <h1>Имя: {this.props.name}</h1>
      <h2>Номер: {this.props.num}</h2>
      <h3>Работает ли: {this.props.isWorking.toString()} </h3>
    </ >
    )
  }
}

export default Child;