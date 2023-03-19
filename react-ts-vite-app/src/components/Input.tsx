import React from 'react';

class Input extends React.Component<unknown, { value: string }> {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const inputValue = localStorage.getItem('initInput') ?? '';
    this.setState({ value: inputValue });
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('initInput', value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <input
        className="bg-white text-black"
        type="text"
        name="mainInput"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
