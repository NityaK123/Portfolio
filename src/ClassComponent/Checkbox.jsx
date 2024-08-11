import React,{useEffect, useState} from 'react'

export const Checkbox = () => {

    const [data,setData]=useState([
        {id:1,title:"This is first checkbox",checked:false,expand:false},
        {id:2,title:"This is first checkbox",checked:false,expand:false},
        {id:3,title:"This is first checkbox",checked:false,expand:false},
    ])

    const [isDisable,setIsDisable] = useState(true)


    const expand=(id)=>{
        setData(data.map((item)=>{
            if(item.id == id){
                return {...item,expand:true} 
            }
            else{
                return {...item,expand:false}
            }
        }))
    }

    const handleCheck=(id)=>{
        setData(()=>data.map((item)=>{
            if(item.id == id){
                return {...item,checked:!item.checked}
            }
            else{
                return {...item}
            }
        }))
    }

    useEffect(()=>{
        const bool = data.every((item)=>item.checked == true)
        if(bool){
            setIsDisable(false)
        }
        else{
            setIsDisable(true)
        }
    })

  return (
    <>
        <div style={{margin:"auto",height:"300px",width:"400px",backgroundColor:"blueviolet",marginTop:"50px",textAlign:"center"}}>
            {
                data.map((item)=>{
                    return(
                        <>
                           <input type="checkbox" name={item.id} onClick={()=>handleCheck(item.id)}/>
                           <label for={item.id}>{item.title}</label> 
                           <button onClick={()=>expand(item.id)}>Expand</button>
                           <br />
                           {item.expand && <h1>Hi this is expandle</h1>}
                        </>
                    )
                })
            }
            <button disabled={isDisable}>Submit</button>
        </div>
    </>
  )
}

export default Checkbox
