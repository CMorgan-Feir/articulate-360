import React, {Component} from 'react'

export class Bug extends Component {
    constructor(props) {
        super(props)
    }
    state = {
      currentX: window.innerWidth / 2,
      currentY: window.innerHeight / 2,
      time: 0,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2 + 1,
      velocity: 2,
      vx: 0,
      vy: 1,
      bugRotation: 2.25
    }

    calculateNewBugPosition() {
        const { left, top, height, width } = this.props.size
        console.log('height', height, 'width', width)
      var newPosition = {
        x: left + width * Math.random(),
        y: top + height * Math.random()
      }
      var newAngle = Math.atan2(newPosition.y - this.state.currentY, newPosition.x - this.state.currentX);

      var vx = this.state.velocity * Math.cos(newAngle);
      var vy = this.state.velocity * Math.sin(newAngle);

      var newVolicity = 0.6 + Math.random() * 10

      var newAngle = Math.atan2(newPosition.y - this.state.currentY, newPosition.x - this.state.currentX);

      this.setState({
        targetX: newPosition.x,
        targetY: newPosition.y,
        vx: vx,
        vy: vy,
        velocity: newVolicity,
        angle: newAngle
      })
    }

    calculateVelocity() {
      const bugMinSpeed = 0.6
      const bugSpeedRange = 5
      var velocity = bugMinSpeed + Math.random() * bugSpeedRange
      return velocity
    }

    moveBugToTarget = () => {
      const {currentX, currentY, time, velocity, targetX, targetY, vx, vy} = this.state

      if (Math.abs(currentX - targetX) < 10 && Math.abs(currentY - targetY) < 10) {
        this.calculateNewBugPosition()
        window.requestAnimationFrame(this.moveBugToTarget)
      } else {
        this.setState({
          currentX: currentX + vx,
          currentY: currentY + vy
        }, () => {
          window.requestAnimationFrame(this.moveBugToTarget)
        })
      }
    }

    componentDidMount() {
    //   this.calculateNewBugPosition()
      window.requestAnimationFrame(this.moveBugToTarget)
    }

    render() {
      const {currentX, currentY, angle} = this.state
      const {name} = this.props
      return <img src='https://morganfeir.s3.us-east-2.amazonaws.com/images/bug.png' id={name} className='image' style={{top: currentY, left: currentX, transform: `rotate(${125+180*angle/3.14}deg)`}}  />
    }
}