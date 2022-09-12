const initialState={
    loggedIn:false,
    data:null
}

const authReducer=(state=initialState,action)=>{
    switch (action.type){
        case "login":
            return({
                loggedIn:true,
                data:action.data
            })

        case "logut":
            return({
                loggedIn:false,
                data:null
            })
         
        default :
            return state
    }
}


export default authReducer