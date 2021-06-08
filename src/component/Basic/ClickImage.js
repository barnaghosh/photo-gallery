import React, { Component } from 'react'
import './basic.css'

export class ClickImage extends Component {
    render() {
        return (
            <div className='clickImg-div'  >
                <img className='clickImg' src={this.props.clickImg} style={{ borderRadius: '20px' }} alt='active' />
            </div>
        )
    }
}

export default ClickImage
