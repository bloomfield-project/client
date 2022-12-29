import React, { Component } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Route, Navigate} from 'react-router-dom'
// import {openPoster} from './redux/actions/messageAction'




function Protected_route({children, role}) {
    const loginData= useSelector(state => state.auth.loggedIn)
    const data= useSelector(state => state.auth.data)
    // const loginData= false
    // const authenticated = useSelector(state => state.auth.authenticated)
    // const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch()

    console.log("check logxx", data.data.role)
    console.log("check log", role)
    // && data.role == role 
    if(loginData &&data.data.role===role){
        // return <div>Your in</div> 
        return children

    }else{
        
        return <Navigate to='/' />
    }

    
}

export default Protected_route