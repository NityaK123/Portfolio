import React,{useEffect, useState} from 'react'
import './Form.css'

export const Form = () => {

    const [data,setData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        roll_id:""
    })

    const [isDisabled,setIsDisabled] = useState(true)
    const [valid,setValid] = useState({
        firstValid:true,
        lastValid:true,
        emailValid:true,
        rollValid:true
    })

    const handleChage=(e)=>{
        const {name,value}=e.target 
        setData((prev)=>({...prev,[name]:value}))

        if(value != '' && name == 'firstname'){
            setValid((prev)=>({...prev,firstValid:false}))
        }
    }   

    useEffect(()=>{
        const da = Object.entries(data)

        const bool = da.every((item)=>(item[1] != ""))

        console.log(da,bool)

        if(bool){
            setIsDisabled(false)
        }
        else{
            setIsDisabled(true)
        }

    },[data])


    return (
        <>
            <div id="form">
                <form action="">
                    <label htmlFor="firstname">First_Name</label> <input type="text" name="firstname" onChange={(e)=>handleChage(e)}/> 
                    {valid.firstValid && <span style={{color:"red"}}>this is not valid</span>}
                    <label htmlFor="lastname">Last_Name</label> <input type="text" name="lastname" onChange={(e)=>handleChage(e)} />
                    {valid.lastValid && <span style={{color:"red"}}>this is not valid</span>}
                    <label htmlFor="email">Email</label> <input type="email" name="email" onChange={(e)=>handleChage(e)}/>
                    {valid.emailValid && <span style={{color:"red"}}>this is not valid</span>}
                    <label htmlFor="roll_id">Roll_id</label> <input type="number" name="roll_id" onChange={(e)=>handleChage(e)}/>
                    {valid.rollValid && <span style={{color:"red"}}>this is not valid</span>}
                    <br />
                    <button type='button' disabled={isDisabled}>Submit</button>
                </form>
            </div>
        </>
    )
}
export default Form



