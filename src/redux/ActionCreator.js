import axios from 'axios'

export const bangla = (item) => {
    return ({
        type: 'BANGLADESH_ITEM',
        payload: item
    })
}



export const india = (item) => {
    return ({
        type: 'INDIA_ITEM',
        payload: item
    })
}

export const pak = (item) => {
    return ({
        type: 'PAKISTAN_ITEM',
        payload: item
    })
}

export const nepal = (item) => {
    return ({
        type: 'NEPAL_ITEM',
        payload: item
    })
}

export const bhutan = (item) => {
    return ({
        type: 'BHUTAN_ITEM',
        payload: item
    })
}

export const sri = (item) => {
    return ({
        type: 'SRI_ITEM',
        payload: item
    })
}

export const mal = (item) => {
    return ({
        type: 'MAL_ITEM',
        payload: item
    })
}

export const visible=(value)=>{
    return({
            type: "VISIBLE_FEEDBACK",
            payload: value
        
    })
}

export const feedVisible=(item)=>dispatch=>{
    setTimeout(()=>{
       dispatch( visible(item))
    },5000)
}

export const serverErr=(errMsg)=>{
    return ({
        type: 'SERVER_ERR',
        payload: errMsg
    })
}

export const fetchItem = () => dispatch => {
    axios.get('http://localhost:3001/country')
        .then(response => response.data)
        .then(data => {
            const banglaArr=data[0].bangladesh
            const indiaArr=data[0].india
            const pakArr=data[0].pakistan
            const nepalArr=data[0].nepal
            const bhutanArr=data[0].bhutan
            const sriArr=data[0].srilanka
            const malArr=data[0].maldives

            dispatch(nepal(nepalArr))
            dispatch(bangla(banglaArr))
            dispatch(india(indiaArr))
            dispatch(pak(pakArr))
            dispatch(bhutan(bhutanArr))
            dispatch(sri(sriArr))
            dispatch(mal(malArr))

        })
        .catch(err=>{
            // console.log('ServerErr:',err.message)
            dispatch(serverErr(err.message))
        })
    // axios.get('http://localhost:3001/country')
    //     .then(response => response.data[0].bangladesh)
    //     .then(data => {


    //         dispatch(bangla(data))
    //     })
    //     .catch(err=>console.log('ServerErr:',err.message))
    // axios.get('http://localhost:3001/country')
    //     .then(response => response.data[0].india)
    //     .then(data => {


    //         dispatch(india(data))
    //     })
    //     .catch(err=>console.log('ServerErr:',err.message))
    // axios.get('http://localhost:3001/country')
    //     .then(response => response.data[0].pakistan)
    //     .then(data => {


    //         dispatch(pak(data))
    //     })
    //     .catch(err=>console.log('ServerErr:',err.message))
}