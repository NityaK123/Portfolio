import React from 'react'
import { Header } from './Header'
import { Background } from './Background'
import { Education_data } from './Data'


export const Eduction = () => {
  return (
    <>
        <Header/>
        <div id="bd">
          <div id="back_image">
              <Background/>
          </div>
          <div id="edu">
               {
                    Education_data.map((item)=>{
                        return(
                        <div className="edudata">
                            <h1>{item.stream}</h1>
                            <p>{item.college}</p>
                            <p>{item.duration} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.cgpa}</p>
                       </div>
                        )
                    })
               }
        </div>
        </div>
    </>
  )
}
