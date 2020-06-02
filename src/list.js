import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      val : 'xxxx'
    }
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleBlur() {
    console.log('hehe',this)
  }
  handleChange(a) {
    console.log(a)
    this.setState({val:a.target.value})
  }
  render() {
    return (
      <input onBlur={this.handleBlur} onChange={this.handleChange} placeholder="insert" value={this.state.val}></input>
    )
  }
}

const App = () => (
  <div>hello baby!!!
    <Input />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))