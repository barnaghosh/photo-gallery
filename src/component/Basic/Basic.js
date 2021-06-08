import React, { Component } from 'react'
import './basic.css'
import {Row, Card, Alert, Spinner} from 'reactstrap'
import Car from './Card'
import ClickImage from './ClickImage'
import Feedback from './Feedback'
import {connect} from 'react-redux'
import axios from 'axios'
import dateFormat from 'dateformat'


const mapStateToProps=state=>{
    return({
        feedback:state.feedback,
        token:state.token,
        isLoading:state.isLoading
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        fetchFeedback:()=>{
            axios.get("http://localhost:3001/feedback")
            .then(response=> response.data)
            .then(data=>{
                
                dispatch({
                    type:'ADD_FEEDBACK',
                    payload:data
                })
            })
        }
    })
}


export class Basic extends Component {
    state={
        clickImg:null,
        index:1
        
    }

    selectImg=(e)=>{
        // console.log('SelectImg:',e.target.src)
        // console.log('SelectImgStyle:',e.target.style)
       
        this.setState({
            clickImg:e.target.src,
            index:0
        })
        
    }

    

    componentDidMount(){
        // console.log('BasicProps:',this.props)
        this.props.fetchFeedback();

        // console.log("Token",this.props.token)
    }

   
   
    
    render() {
     
        // console.log('State:',this.props.state)
        let clickImg=null;
        let check=0;
        let ActiveImg;
        let name=null;
        let description=null;
        let selectImgId=0;
        // console.log('Items:',this.props.items)
        let item=this.props.items.map((item,index)=>{
            if(this.state.clickImg==='http://localhost:3001/'+item.image  ){
                name=item.name
                description=item.description
                selectImgId=index
                
            }
            if(index===0){
                // console.log('IndexImage',item.image)
                clickImg=item.image
                name=item.name
                description=item.description
                check=1
                return <Car img={item.image} selectImg={this.selectImg} key={Math.random()} selectImgSrc={this.state.clickImg} index={this.state.index} check={check} />
            }
            else{
                check=0
                return <Car img={item.image} selectImg={this.selectImg} key={Math.random()} selectImgSrc={this.state.clickImg} index={this.state.index} check={check} />
            }

            
        })
        // console.log('Item:',item)

        if(this.state.clickImg!== null){
            ActiveImg=<ClickImage clickImg={this.state.clickImg} key={Math.random()} />
        }
        else{
            ActiveImg=<ClickImage clickImg={'http://localhost:3001/'+clickImg} key={Math.random()} />
        }
        
        
        // console.log("Feedback Length",this.props.feedback.length)
        

        let feedback=null;
        let feed=null;
        let feedHeading=null
        if(this.props.feedback.length !== 0){
            feedback=this.props.feedback.map((item)=>{
                if((this.props.country===item.country)&&(selectImgId===item.imgid)){
                    feed=(
                        <Card className='mt-3 p-2' key={Math.random()}>
                            <span style={{fontSize:'18px'}}> Name: {item.username} </span>
                            
                             
                            <p>FeedBack: {item.feedback} </p>
                            <span style={{fontSize:'12px'}} >{dateFormat(item.date, "  dS mmmm, yyyy, h:MM:ss TT")} </span>
                        </Card>
                    )
                    return feed 
                }
                
            })
        }
        if(feed!==null){
            feedHeading=(
               <div className='py-3'>
                   <hr/>
                    <p className='name' style={{textAlign:'center'}} >FeedBack</p>
                    {feedback}

                   

               </div>
            )
        }
        let withoutAuth=null
        if(this.props.state==='state'){
            withoutAuth=(
                <div style={{textAlign:'center'}}>
                        <hr/>
                    <Alert>Please Login Or Sign Up to give your feedback</Alert>    
                    <button className='btn btn-primary' onClick={this.props.stateSignup} >Signup</button>
                    
                    <p className='pt-2'>Or</p>
                    <button className='btn btn-primary' onClick={this.props.stateLogin} >Login</button>

                    </div>
            )
        }
        else{
            withoutAuth=(
                <div style={{textAlign:'center'}}>
                            <hr/>
                        <Alert>Please Login Or Sign Up to give your feedback</Alert>    
                        <button className='btn btn-primary' onClick={this.props.signup} >Signup</button>
                        
                        <p className='pt-2'>Or</p>
                        <button className='btn btn-primary' onClick={this.props.login} >Login</button>

                        </div>
            )
        }
        return (
            <div className='Main ' >
                <div className='Left' >
                    <div className='Up'>
                        
                        {
                            ActiveImg
                        }
                    </div>
                    
                        <div className='Down'>
                           
                            <Row xs='3' sm='3' md='3' lg='3' style={{margin:'0px'}}>
                                {item}
                            </Row>
                            
                        </div>
                    
                </div>
                <div className='Right p-4'  >
                        
                    <p className='name' style={{textAlign:'center'}} > {name} </p>
                    <p style={{textAlign:'center'}}> {description} </p>
                    
                    
                    {feedHeading}    
                   
                    {this.props.token!==null? <div>
                        <hr/>
                    <Feedback selectImgId={selectImgId} country={this.props.country} />
                    </div>
                        :withoutAuth
                        }
                    
                        
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Basic)
