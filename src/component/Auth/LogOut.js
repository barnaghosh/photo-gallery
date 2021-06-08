import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Logout} from '../../redux/AuthCreators'

const mapDispatchToProps=dispatch=>{
    return({
        logOut:()=>dispatch(Logout())
    })
}

export class LogOut extends Component {

    componentDidMount(){
        this.props.logOut()
        
    }
    render() {
        return (
            <Redirect to='/' />
        )
    }
}

export default connect(null,mapDispatchToProps) (LogOut)
