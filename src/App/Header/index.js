import React, { useContext, useEffect } from "react"
import { WrapperContext } from "../index"

export const Header = ({logout})=>{
    const {user} = useContext(WrapperContext)

    useEffect(()=>{
        console.log("user::::",user)
    },[])

    return(
       <React.Fragment>
           {user.email?(

               <ul class="nav justify-content-end">
               <li class="nav-item">
               <button type="button" className="btn btn-link" onClick={logout}>Logout</button>
               </li>
               </ul>
              
           ):(<></>)}
       </React.Fragment>
    )
}