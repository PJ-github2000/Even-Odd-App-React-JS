/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getValue = () => Math.ceil(Math.random() * 100)

  increaseButton = () => {
    const randomNumber = this.getValue()
    this.setState(preValue => ({count: preValue.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? `Even` : `Odd`
    return (
      <div className="outer-background">
        <div className="inner-background">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd">Count is {displayText}</p>
          <button
            onClick={this.increaseButton}
            className="button"
            type="button"
          >
            Increment
          </button>
          <p className="para">
            <sup>*</sup>increase by Random Number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
