// import React, { Component } from 'react'
// import axios from 'axios'
// import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
// import { connect } from 'react-redux'
// import './basic.css'


// const mapDispatchToProps = dispatch => {
//     return ({
//         addFeedback: (value) => dispatch({
//             type: 'ADD_FEEDBACK',
//             payload: value
//         }),
//         postFeedback: (value) => dispatch({
//             type: 'POST_FEEDBACK',
//             payload: value
//         }),
//         successFeedback: () => dispatch({
//             type: 'SUCCESS_FEEDBACK',

//         }),
//         failFeedback: (value) => dispatch({
//             type: 'FAILED_FEEDBACK',
//             payload: value
//         }),
//         visibleFeed: (value) => dispatch({
//             type: "VISIBLE_FEEDBACK",
//             payload: value
//         })
//     })
// }


// const mapStateToProps = state => {
//     return ({
//         successFeed: state.successFeed,
//         failFeed: state.failFeed,
//         alertFeed: state.alertFeed
//     })
// }

// export class Feedback extends Component {
//     state = {
//         username: '',
//         feedback: '',
//         disable: true,
//         errName:null,
//         errFeed:null

//     }
//     handleInput = (e) => {

//         this.setState({
//             [e.target.name]: e.target.value
//         })
//         if([e.target.name]==='feedback'){
//             if(!/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(e.target.value)){
//                 this.setState({
//                     errName:'User is not valid'
//                 })
//             }
//             else{
//                 this.setState({
//                     errName:null
//                 })
//             }
//         }

//     }
//     HandleSubmit = (e) => {
//         e.preventDefault()
//         // console.log('submitValue:',this.state)
//         const feedback = {
//             username: this.state.username,
//             feedback: this.state.feedback,
//             country: this.props.country,
//             imgid: this.props.selectImgId,
//             date: new Date()
//         }
//         axios.post('http://localhost:3001/feedback', feedback)
//             .then(response => response.data)
//             .then(data => {
//                 // console.log("Post Response Data:",data)

//                 this.props.postFeedback(data)

//                     this.props.successFeedback()


//             })
//         this.setState({
//             username: '',
//             feedback: '',
//         })

//     }
//     // componentDidMount(){
//     //     axios.get('http://localhost:3001/feedback')
//     //     .then(response=>response.data)
//     //     .then(data=>{
//     //         if(data.length !==0){
//     //             data.map((item)=>{
//     //                 this.props.addFeedback(item)
//     //             })
//     //         }
//     //         // console.log("DataLength:",data.length)
//     //     })
//     // }
//     render() {
//         // console.log("Username:",this.state.username)
//         // console.log('Feedback:',this.state.feedback)
//         // console.log('Disable:', this.state.disable)
//         let disable = true;
//         if (this.state.username.length === 0 || this.state.feedback.length === 0) {
//             disable = true
//         }
//         else {
//             disable = false
//         }
//         let suceess = null;
//         let error = null
//         if (this.props.successFeed !== null) {
//             setTimeout(() => {
//                 this.props.visibleFeed(false)
//             },4000)
//             suceess=<Alert isOpen={this.props.alertFeed} >{this.props.successFeed} </Alert>
//         }
//         if (this.props.failFeed !== null) {
//             setTimeout(() => {
//                 this.props.visibleFeed(false)
//             },4000)
//             error=<Alert isOpen={this.props.alertFeed} >{this.props.failFeed} </Alert>
//         }


//         return (
//             <div>
//                 <p className='name'  >Enter your feedback </p>
//                 {suceess}
//                 {error}
//                 <Form style={{ textAlign: 'left' }} onSubmit={this.HandleSubmit} >
//                     <FormGroup>
//                         <Label for="username">Name</Label>
//                         <Input type="text" name="username" placeholder="Enter a username" onChange={this.handleInput} value={this.state.username} />
//                         <span style={{color:'red'}} >{this.state.errName} </span>
//                     </FormGroup>
//                     <br />
//                     <FormGroup>
//                         <Label for="feedback">Feedback</Label>
//                         <Input type="text" name="feedback" placeholder="Enter your feedback" onChange={this.handleInput} value={this.state.feedback} />
//                     </FormGroup>
//                     <br />
//                     <Button className='btn btn-primary' type='submit' disabled={disable} >Submit</Button>
//                 </Form>

//             </div>
//         )
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Feedback)





import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { connect } from 'react-redux'
import './basic.css'
import { feedVisible } from '../../redux/ActionCreator'


const mapDispatchToProps = dispatch => {
    return ({
        addFeedback: (value) => dispatch({
            type: 'ADD_FEEDBACK',
            payload: value
        }),
        postFeedback: (value) => dispatch({
            type: 'POST_FEEDBACK',
            payload: value
        }),
        successFeedback: () => dispatch({
            type: 'SUCCESS_FEEDBACK',

        }),
        failFeedback: (value) => dispatch({
            type: 'FAILED_FEEDBACK',
            payload: value
        }),
        visibleFeed: (value) => dispatch(
            feedVisible(value)
        )
    })
}


const mapStateToProps = state => {
    return ({
        successFeed: state.successFeed,
        failFeed: state.failFeed,
        alertFeed: state.alertFeed,
        countryState: state.country,
        selectImg: state.selectImg
    })
}

export class Feedback extends Component {
    state = {
        username: '',
        feedback: '',
        disable: true,
        errName: null,
        errFeed: null

    }
    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
        if ([e.target.name] === 'feedback') {
            if (!/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(e.target.value)) {
                this.setState({
                    errName: 'User is not valid'
                })
            }
            else {
                this.setState({
                    errName: null
                })
            }
        }

    }
    HandleSubmit = (e) => {
        e.preventDefault()
        // console.log('submitValue:',this.state)
        const feedback = {
            username: this.state.username,
            feedback: this.state.feedback,
            country: this.props.country,
            imgid: this.props.selectImgId,
            date: new Date()
        }
        axios.post('http://localhost:3001/feedback', feedback)
            .then(response => response.data)
            .then(data => {
                // console.log("Post Response Data:",data)

                this.props.postFeedback(data)

                this.props.successFeedback()


            })
            .catch(err => {
                this.props.failFeedback(err.message)
            })
        this.setState({
            username: '',
            feedback: '',
        })

    }

    render() {
        console.log("SuccessMsg:", this.props.selectImg)
        console.log('FailedMsg:', this.props.countryState)
        console.log('Alert:', this.props.alertFeed)
        let disable = true;
        if (this.state.username.length === 0 || this.state.feedback.length === 0) {
            disable = true
        }
        else {
            disable = false
        }
        let errName = null
        let errFeed = null
        if (
            !/^[a-zA-Z0-9_@]{4,18}$/.test(this.state.username) && this.state.username.length !== 0
        ) {
            errName = 'Invalid username';
            disable=true
        }
        if (
            !/[a-zA-Z0-9@=\-!'"]{3,}/.test(this.state.feedback) && this.state.feedback.length !== 0
        ) {
            errFeed = 'Invalid feedback';
            disable=true
        }
        let suceess = null;
        let error = null

        if (this.props.successFeed !== null && this.props.country === this.props.countryState && this.props.selectImgId === this.props.selectImg) {
            console.log('I am in success')


            this.props.visibleFeed(false)
            suceess = <Alert isOpen={this.props.alertFeed} color='success' >{this.props.successFeed} </Alert>
        }
        if (this.props.failFeed !== null && this.props.country === this.props.countryState && this.props.selectImgId === this.props.selectImg) {
            setTimeout(() => {
                this.props.visibleFeed(false)
            }, 9000)
            error = <Alert isOpen={this.props.alertFeed} color='danger' >{this.props.failFeed} </Alert>
        }


        return (
            <div>
                <p className='name'  >Enter your feedback </p>
                {suceess}

                {error}

                <Form style={{ textAlign: 'left' }} onSubmit={this.HandleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" placeholder="Enter a username" onChange={this.handleInput} value={this.state.username} />
                        <span style={{ color: 'red' }} >{errName} </span>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Label for="feedback">Feedback</Label>
                        <Input type="text" name="feedback" placeholder="Enter your feedback" onChange={this.handleInput} value={this.state.feedback} />
                        <span style={{ color: 'red' }} >{errFeed} </span>
                    </FormGroup>
                    <br />
                    <Button className='btn btn-primary' type='submit' disabled={disable} >Submit</Button>
                </Form>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)

