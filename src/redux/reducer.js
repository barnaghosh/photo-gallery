import * as ActionTypes from './ActionTypes'


const INTIALIZE_STATE={
    bangladesh:null,
    india:null,
    nepal:null,
    pak:null,
    bhutan:null,
    sri:null,
    mal:null,
    feedback:[],
    token:null,
    userId:null,
    isLoading:false,
  serverErr  :null,
    authErr:null,
    alert:false,
    successFeed:null,
    failFeed:null,
    alertFeed:false,
    authState:null,
    selectImg:null,
    country:null
}

export const reducer =(state=INTIALIZE_STATE,action)=>{
    // console.log('Reducer Action:',action)

    
    if(action.type==='BANGLADESH_ITEM'){
        return({
            ...state,
            bangladesh:[...action.payload]
        })
    }
    if(action.type==='INDIA_ITEM'){
        return({
            ...state,
            india:[...action.payload]
        })
    }
    if(action.type==='NEPAL_ITEM'){
        return({
            ...state,
            nepal:[...action.payload]
        })
    }
    if(action.type==='PAKISTAN_ITEM'){
        return({
            ...state,
            pak:[...action.payload]
        })
    }
    if(action.type==='BHUTAN_ITEM'){
        return({
            ...state,
            bhutan:[...action.payload]
        })
    }
    if(action.type==='SRI_ITEM'){
        return({
            ...state,
            sri:[...action.payload]
        })
    }
    if(action.type==='MAL_ITEM'){
        return({
            ...state,
            mal:[...action.payload]
        })
    }
    if(action.type==='ADD_FEEDBACK'){
        
        return({
            ...state,
            feedback:[...action.payload]
        })
    }
    if(action.type==='POST_FEEDBACK'){
        let feedbackItem=action.payload
        return({
            ...state,
            feedback:state.feedback.concat(feedbackItem),
            country:action.payload.country,
            selectImg:action.payload.imgid
        })
    }
    if(action.type===ActionTypes.AUTH_SUCCESS){
        return({
            ...state,
            token:action.payload.token,
            userId:action.payload.userId
        })
    }
    if(action.type===ActionTypes.AUTH_LOGOUT){
        return({
            ...state,
            token:null,
            userId:null
        })
    }
    if(action.type===ActionTypes.AUTH_LOADING){
        return({
            ...state,
            isLoading:action.payload
        })
    }
    if(action.type==="SERVER_ERR"){
        return({
            ...state,
            serverErr:action.payload
        })
    }
    if(action.type==='AUTH_FAILED'){
        return({
            ...state,
            authErr:action.payload.errMsg,
            authState:action.payload.authState,
            alert:true
        })
    }
    if(action.type==='VISIBLE'){
        return({
            ...state,
            authErr:null,
            alert:action.payload
        })
    }
    if(action.type==='SUCCESS_FEEDBACK'){
        return({
            ...state,
            successFeed:'Your Feedback is successfully added',
            alertFeed:true
        })
    }
    if(action.type==='FAILED_FEEDBACK'){
        return({
            ...state,
            failFeed:action.payload,
            alertFeed:true
        })
    }
    if(action.type==='VISIBLE_FEEDBACK'){
        return({
            ...state,
            alertFeed:false,
            successFeed:null,
            failFeed:null
        })
    }
    // console.log('State:',state)
    return state;
}