import React from 'react'
import { Header } from './Header'
import { Background } from './Background'
import { Project_data } from './Data'
import Certi from './Certi'

export const Project = () => {
  return (
    <>
        <Header/>
        <Background/>
        <div id="card">
                {Project_data.map((item)=>{
                  return(
                    <>
                        <div id="innercard">
                          
                          <h1>{item.project_name}</h1>

                          <p>{item.Skill}</p>
                          
                        </div>
                    </>
                  )
                })}
        </div>
    </>
  )
}

