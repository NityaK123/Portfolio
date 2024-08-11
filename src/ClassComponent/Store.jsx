// import React from 'react'

// class Store extends React.Component {

//     constructor(props){
//         console.log(props)
//         super(props)
//         this.state={
//             item:[],
//             count:0,
//             name:"",
//             itemNO:""
//         }
//     }


//     handle=(e)=>{
//         e.preventDefault()
//         const {name,value} = e.target
//         this.setState(()=>({[name]:value}))
//     }

//     Add=(e)=>{  
//         e.preventDefault()
//         this.setState((prev)=>({item:[...prev.item,{name:this.state.name},{itemNO:this.state.itemNO}]}))
//         this.props.cart(this.state.name)
//     }


//     render(){
//         return(
//             <>
//                 <form onSubmit={this.Add}>
//                     Name:   <input type="text" name="name" onChange={this.handle}/>
//                     itemNo: <input type="number" name="itemNO" onChange={this.handle}/>
//                    <button type="submit">Add to cart </button>
//                 </form>
//             </>
//         )
//     }
// }

// export default  Store

import React,{useState} from 'react'

const Cart=({cart})=>{

    const [name,setName] = useState()

    const handle=()=>{
        cart((prev)=>([...prev,name]))
    }

    return(
        <>
             <h1>Hi</h1>

             <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>

             <button onClick={handle}>Add to cart</button>
        </>
    )
}

export default Cart