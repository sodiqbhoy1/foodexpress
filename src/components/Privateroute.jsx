import React from 'react'
import { Navigate } from 'react-router-dom'

const Privateroute = ({children}) => {

    const token = localStorage.getItem('token')
//   if token is not present, redirect to signin page
  
if(!token){
    return <Navigate to='/sellersignin'/>
}
  
    return children;
}

export default Privateroute
