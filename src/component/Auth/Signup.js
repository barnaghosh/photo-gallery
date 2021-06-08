import React, { Component } from 'react'
import Auth from './Auth'


export class Signup extends Component {
    componentDidMount(){
        // console.log('SignUp Props:',this.props)
    }
    render() {
        return (
            <div>
                
                <Auth auth='Signup' />
            </div>
        )
    }
}

export default Signup
