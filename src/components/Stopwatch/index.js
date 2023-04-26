// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {timerRunning: false, secondsCount: 0}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  updateTime = () => {
    this.setState(previousState => ({
      secondsCount: previousState.secondsCount + 1,
      timerRunning: true,
    }))
  }

  onStart = () => {
    this.timerId = setInterval(this.updateTime, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({timerRunning: false})
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState(initialState)
  }

  clockCounter = () => {
    const {secondsCount} = this.state
    const minutesCounting = Math.floor(secondsCount / 60)
    const secondsCounting = Math.floor(secondsCount % 60)

    const stringifiedMinutes =
      minutesCounting < 10 ? `0${minutesCounting}` : minutesCounting
    const stringifiedSeconds =
      secondsCounting < 10 ? `0${secondsCounting}` : secondsCounting

    console.log(stringifiedMinutes, stringifiedSeconds)
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {timerRunning} = this.state
    return (
      <div className="app-container">
        <div className="clock-container">
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-title-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="logo-image"
              />
              <p className="logo-title">Timer</p>
            </div>
            <h1>{this.clockCounter()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button button-start"
                onClick={this.onStart}
                disabled={timerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button button-stop"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button button-reset"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
