// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    let countText = 'Even'

    if (count % 2 === 0) {
      countText = 'Even'
    } else {
      countText = 'Odd'
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="heading2">Count is {countText}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
