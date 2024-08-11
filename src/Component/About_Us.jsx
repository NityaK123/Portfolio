import React from 'react'
import { Header } from './Header'
import { Background } from './Background'
import { profile_data } from './Data'

export const About_Us = () => {
  return (
    <>
        <Header/>
        <Background/>
        <div id="card">
            {
              profile_data.map((item)=>{
                 return(
                  <>
                     <div id="innercard">
                         <img src={`./images/${item.profile_logo}`} alt="logo" />
                         <h1>{item.profile_name}</h1>
                         <a target='_blank' href={item.profile_url}>Profile Url </a>
                     </div>
                  </>
                 )
              })
            } 
        </div>

    </>
  )
}

