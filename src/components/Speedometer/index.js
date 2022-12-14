import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onDcc = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onAcc = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="para-1">
          Speed is <span className="speed">{speed}</span>mph
        </h1>
        <p className="para-2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button className="button-1" type="button" onClick={this.onAcc}>
            Accelerate
          </button>
          <button className="button-2" type="button" onClick={this.onDcc}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
