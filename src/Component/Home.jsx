import React from 'react'
import { Header } from './Header'
import img from './Image/NityanandPic12.jpg'
import { Background } from './Background'

export const Home = () => {
  return (
    <>
        <Header/>
        <Background/>
        <div id="Profile">
            <img id="pic" src={img} alt="Nitya/ProfilePIc" />

            <div id="content">
                    <h1>Nityanand Gupta</h1>
                    <h3>SDE</h3>
                    <p id="profileDic">I am dynamic, collaborative, and curious to build new experiences. I have the ability to learn new things quickly. I
                            am multi-tasker and have a good time-management quality. Currently I am working on a Web Deployment and
                            looking to work in good reputed company. I love both technical and social world. I want to serve the people, technically and socially and believe in saying-<b>'Knowledge and Skill never go waste'. </b>I can not only do the work, I
                            can deliver great results.
                    </p>
            </div>
        </div>  
    </>
  )
}



