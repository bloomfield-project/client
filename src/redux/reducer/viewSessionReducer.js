const initialState={
    data:null
}


const viewSessionReducer=(state=initialState,action)=>{
    switch (action.type){
        case "getASession":
            return({
                data:action.data
            })

        case "getAEvent":
            return({
                data:action.data
            })
         
        default :
            return state
    }
}


export default viewSessionReducer