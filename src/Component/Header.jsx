import React,{useEffect, useRef,useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

export const Header = () => {


    const [i,setId]=useState('')
    const [active,setActive]=useState();


    const handleId=(id,e)=>{
        e.preventDefault()
        setActive(id)
    }



  return (
    <>
        <header id="header">
                <ul id="ul">
                    <li className={active === 'Home'? 'active':""} onClick={(e)=>handleId('Home',e)}><NavLink to="/">Home</NavLink></li>
                    <li className={active === 'Eduction'? 'active':""} onClick={(e)=>handleId('Eduction',e)}><NavLink to="/Education">Eduction</NavLink></li>
                    <li className={active === 'Certifications'? 'active':""} onClick={(e)=>handleId('Certifications',e)}><NavLink to="/Certifications">Certifications</NavLink></li>
                    <li className={active === 'Projects'? 'active':""} onClick={(e)=>handleId('Projects',e)}><NavLink to="/Projects">Projects</NavLink></li>
                    <li className={active === 'Live Projects'? 'active':""} onClick={(e)=>handleId('Live Projects',e)}><NavLink to="/Live-Projects">Live Projects</NavLink></li>
                    <li className={active === 'About-Us'? 'active':""} onClick={(e)=>handleId('About-Us',e)}><NavLink to="/About-Us">About Us</NavLink></li>
                </ul>
        </header>
    </>
  )
}





