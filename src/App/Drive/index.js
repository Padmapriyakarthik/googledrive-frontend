import React, { useContext, useEffect } from "react"
import { WrapperContext } from "../index"

export const Drive = (props)=>{
    const {user,dummytoken} = useContext(WrapperContext)

console.log(dummytoken)

    return(
     
          <div>
              this is drive component
          </div>
       
    )
}