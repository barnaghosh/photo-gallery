import React, { Component } from 'react'
import Bangla from '../Bangladesh/Bangla'
import India from '../India/India'
import Pakistan from '../Pakistan/Pakistan'
import Nepal from '../Nepal/Nepal'
import Srilanka from "../Srilanka/Srilanka"
import Bhutan from '../Bhutan/Bhutan'
import Maldives from '../Maldives/Maldives'
import Spinner from '../Spinner/Spinner'
import { connect } from 'react-redux'
import {fetchItem} from '../../redux/ActionCreator'
import { Alert } from 'reactstrap'


const mapStateToProps=state=>{
    return({
        itemsBangla:state.bangladesh,
        itemsIndia:state.india,
        itemsPak:state.pak,
        itemsNepal:state.nepal,
        itemsBhutan:state.bhutan,
        itemsSri:state.sri,
        itemsMal:state.mal,
        serverErr:state.serverErr

    })
}

const mapDispatchToProps=dispatch=>{
    return({
        itemDispatch:()=>dispatch(fetchItem())
    })
}




export class Home extends Component {

    login=()=>{
        this.props.history.push("/login")
    }
    signup=()=>{
        this.props.history.push("/signup")
    }

    componentDidMount(){
        // console.log('Home Props:',this.props.serverErr)
        this.props.itemDispatch()
    }
    render() {
        
        let item=null;
        if(this.props.itemsBangla===null ||this.props.itemsIndia===null||this.props.itemsPak===null||this.props.itemsNepal===null||this.props.itemsBhutan===null||this.props.itemsSri===null||this.props.itemsMal===null){
            item=<Spinner />
        }
        else{
           item=( <div>
                <Bangla login={this.login} signup={this.signup} state='state' />
                <India login={this.login} signup={this.signup} state='state'/>
                <Nepal login={this.login} signup={this.signup} state='state' />
                <Bhutan login={this.login} signup={this.signup} state='state' />
                <Srilanka login={this.login} signup={this.signup} state='state' />
                <Maldives login={this.login} signup={this.signup} state='state' />
                <Pakistan login={this.login} signup={this.signup} state='state' />
            </div>)
        }
        
        return (
           <div>
               {this.props.serverErr!==null?<Alert>{this.props.serverErr} </Alert>:item}
           </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home)
