import React, {Component} from 'react'
import {Bug} from './bug'

export class Flower extends Component {
    state = {
        centerX: window.innerWidth / 3,
        centerY: window.innerHeight / 8,
        size: {}
    }

    componentDidMount() {
        const size = this.node.getBoundingClientRect()
        this.setState({size: size})
        console.log(size)
    }

    render () {
        const {centerY, centerX, size} = this.state
        return (
                <div id='imageBG'>
                    <img className='image' style={{top: centerY, left: centerX}} src='https://morganfeir.s3.us-east-2.amazonaws.com/images/flower-bg-small.png' ref={node => this.node = node}/>
                    {/* <Bug name='bug' size={size} /> */}
                </div>
        )
    }
}
