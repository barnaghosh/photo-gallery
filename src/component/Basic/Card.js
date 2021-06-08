import React, { Component } from 'react'
import { Col } from 'reactstrap'
import './basic.css'

export class Car extends Component {
    state = {
        style: {}
    }
    render() {
        // console.log("Check:",this.props.check)
        // console.log('Index',this.props.index)
        let itemImg = 'http://localhost:3001/' + this.props.img

        let item;
        let active = {};
        if (this.props.selectImgSrc === itemImg || (this.props.index === 1 && this.props.check === 1)) {
            active = {
                border: '5px solid  rosybrown',
                
                borderRadius: '10px'
            }
        }
        // console.log('Active:', active)
        return (
            <Col style={{ padding: '0px' }} >


                <div className='img-div'>
                    <img src={' http://localhost:3001/' + this.props.img} onClick={(e) => this.props.selectImg(e)} className='img' style={active} alt='img' />
                </div>


            </Col>
        )
    }
}

export default Car
