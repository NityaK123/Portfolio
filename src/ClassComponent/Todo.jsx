import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { AddTodo,RemoveTodo } from '../Redux/Actions'

const Todo=()=>{

    const [data,setData]=useState('')
    const listitem = useSelector(state=>state)
    const disp = useDispatch()

    const handle=(e)=>{
        setData(e.target.value)
        console.log(listitem)
    }

    const handleAdd=()=>{
        if(data !== ''){
            disp(AddTodo(data))
        }
        else{
            console.log(data)
        }
    }

    const Remove=(val)=>{
        disp(RemoveTodo(val))
    }

    return(
        <>
            <h1>Todo List</h1>
            <input type="text" onChange={(e)=>handle(e)}/>
            <button onClick={handleAdd}>Add</button>
            <div>
                {
                    listitem.map((item)=>{
                        return(
                        <>
                             <li>{item}</li>
                            <button onClick={()=>Remove(item)}>Remove</button>
                        </>
                        )
                    })      
                }
            </div>
        </>
    )
}

export default Todo