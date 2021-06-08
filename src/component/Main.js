import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Header from './Header.js/Header'
import Bangla from './Bangladesh/Bangla'
import India from './India/India'
import Nepal from './Nepal/Nepal'
import Home from './Home/Home'
import Pakistan from './Pakistan/Pakistan'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { connect } from 'react-redux'
import LogOut from './Auth/LogOut'
import { AuthCheck } from '../redux/AuthCreators'
import Basic from './Basic/Basic'
import Srilanka from "./Srilanka/Srilanka"
import Bhutan from './Bhutan/Bhutan'
import Maldives from './Maldives/Maldives'


const mapStateToProps = state => {
    return ({
        token: state.token,
        serverErr: state.serverErr,
        itemsBangla:state.bangladesh,
        itemsIndia:state.india,
        itemsPak:state.pak,
        itemsNepal:state.nepal,
        itemsBhutan:state.bhutan,
        itemsSri:state.sri,
        itemsMal:state.mal
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        authCheck: () => dispatch(AuthCheck())
    })
}

export class Main extends Component {

    componentDidMount() {
        this.props.authCheck()
    }
    render() {
        
        
        let condition = this.props.itemsBangla === null || this.props.itemsIndia === null || this.props.itemsPak === null || this.props.itemsNepal === null || this.props.itemsBhutan === null || this.props.itemsSri === null || this.props.itemsMal === null

        let route=null
        if(this.props.serverErr !== null || condition){
            // console.log('I am in 1')
            route=(
                <Switch>
                    <Route path='/country/bangladesh' component={Bangla} />
                    <Route path='/country/india' component={India} />
                    <Route path='/country/nepal' component={Nepal} />
                    <Route path='/country/pakistan' component={Pakistan} />
                    <Route path='/country/bhutan' component={Bhutan} />
                    <Route path='/country/srilanka' component={Srilanka} />
                    <Route path='/country/maldives' component={Maldives} />
    
                    <Route path='/' exact component={Home} />
                    <Redirect to='/' />
                </Switch>
            )
        }
        else{
            if(this.props.token === null){
                // console.log('I am in 2')
                route= (
                    <Switch>
                        <Route path='/country/bangladesh' component={Bangla} />
                        <Route path='/country/india' component={India} />
                        <Route path='/country/nepal' component={Nepal} />
                        <Route path='/country/pakistan' component={Pakistan} />
                        <Route path='/country/bhutan' component={Bhutan} />
                        <Route path='/country/srilanka' component={Srilanka} />
                        <Route path='/country/maldives' component={Maldives} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/' exact component={Home} />
                        <Redirect to='/' />
                    </Switch>
                )
            }
            else{
                // console.log('I am in 3')
                route= (
                    <Switch>
                        <Route path='/country/bangladesh' component={Bangla} />
                        <Route path='/country/india' component={India} />
                        <Route path='/country/nepal' component={Nepal} />
                        <Route path='/country/pakistan' component={Pakistan} />
                        <Route path='/country/bhutan' component={Bhutan} />
                        <Route path='/country/srilanka' component={Srilanka} />
                        <Route path='/country/maldives' component={Maldives} />
                        <Route path='/logout' component={LogOut} />
                        <Route path='/' exact component={Home} />
                        <Redirect to='/' />
                    </Switch>
                )
            }
        }
        // console.log('serverErr:', this.props.serverErr )
        // console.log('condition:',this.props.serverErr!==null && condition )
        return (

            <div >
                <Header />
                <div className='container'>
                  {route}
                    
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
