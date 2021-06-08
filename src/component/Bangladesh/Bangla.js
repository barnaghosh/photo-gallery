import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Alert } from 'reactstrap'
import Basic from '../Basic/Basic' 
import Spinner from '../Spinner/Spinner'
import {fetchItem} from '../../redux/ActionCreator'


const mapStateToProps=state=>{
    return({
        items:state.bangladesh,
        serverErr:state.serverErr

    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBanglaItem: () => dispatch(fetchItem())
    }
}

export class Bangla extends Component {

    state={
        country:'Bangladesh'
    }

    login=()=>{
        this.props.history.push("/login")
    }
    signup=()=>{
        this.props.history.push("/signup")
    }
    componentDidMount(){
        // console.log('Bangla Props:',this.props)
       this.props.fetchBanglaItem()
       
    }
    
   
    render() {
        

        let item=null
        // console.log('State:',this.props.items)

        if(this.props.items ===null ){
            // console.log('hi')
            item=<Spinner />
            
               
        }else{
            item= (
                <div  style={{margin:'40px 0px'}} >
                    <h1 style={{textAlign:'center'}}>Bangladesh's Tourist Attractions</h1>
                    <Basic items={this.props.items} country={this.state.country} login={this.login} signup={this.signup } state={this.props.state} stateLogin={this.props.login}  stateSignup={this.props.signup} />
                </div>
            )
        }
        
        return (
            <div>
                
                
               
                {this.props.serverErr!==null?<Alert>{this.props.serverErr} </Alert>:item}
                
                
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Bangla)
