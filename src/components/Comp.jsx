import React from 'react';

class Comp extends React.Component {
  state = {
    name: "ooooop",
    num: 18,
    isWorking: false,
    title: null,
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

  changeText = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <React.Fragment >
        <button type="button" onClick={() => this.op.focus()}>
          Фокус-покус
        </button>
        <input
          type={'text'}
          placeholder={this.state.name}
          ref={(ref) => (this.op = ref)}
          onChange={this.changeText}
        />
        <button
          type="submit"
          disabled={this.state.title === 'реакт' ? true : false}
        >
          Жмяк
        </button>
      </React.Fragment>
    );
  }
}

export default Comp;