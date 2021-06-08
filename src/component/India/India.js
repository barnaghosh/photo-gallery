import React, { Component } from 'react'
import Basic from '../Basic/Basic' 
import axios from 'axios'
import {connect} from 'react-redux'
import Spinner from '../Spinner/Spinner'
import {fetchItem} from '../../redux/ActionCreator'
import { Alert } from 'reactstrap'



const mapStateToProps=state=>{
    return({
        items:state.india,
        serverErr:state.serverErr

    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIndiaItem: () => dispatch(fetchItem())
    }
}

export class India extends Component {

    state={
        country:'India'
    }
    login=()=>{
        this.props.history.push("/login")
    }
    signup=()=>{
        this.props.history.push("/signup")
    }
    componentDidMount(){
        // console.log('India Props:',this.props)
       this.props.fetchIndiaItem()
       
    }
    
    render() {
        

        let item=null
        // console.log('State:',this.props.items)

        if(this.props.items !==null){
           item= (
               <div style={{margin:'40px 0px'}} >
                   <h1 style={{textAlign:'center'}}>India's Tourist Attractions</h1>
                   <Basic items={this.props.items} country={this.state.country} login={this.login} signup={this.signup} state={this.props.state} stateLogin={this.props.login}  stateSignup={this.props.signup} />
               </div>
           )
        }else{
            item=<Spinner />
        }
        
        return (
            <div>
                
                
                {this.props.serverErr!==null?<Alert>{this.props.serverErr} </Alert>:item}
                
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (India)

