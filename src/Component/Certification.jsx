import React from 'react'
import { Header } from './Header'
import { Background } from './Background'
import {Certificate_data} from './Data'

export const Certification = () => {
  return (
    <>
        <Header/>
        <Background/>
        <div id="card">
        {
            Certificate_data.map((item)=>{
                return(
                    <div key={item.id} id="innercard">
                        <h1>{item.certificate_name}</h1>
                        <p><strong>Issued By:</strong><b> {item.powered_by}</b></p>
                        <p><strong>Certification id: </strong><b> {item.certificate_id}</b></p>
                        <a href={item.certificate_link} target='_blank'><b>Certificate_link</b></a>
                    </div>
                )
            })
         }
        </div>
    </>
  )
}

