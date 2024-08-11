// import React from 'react'
// import Store from './Store'

// class Cart extends React.Component{

//     constructor(){
//         super()
//         this.state={
//             item:["HI"],
//             count:0
//         }
//     }

//     handle=(dat)=>{
//         this.setState((data)=>({item:[...data.item,dat]}))
//     }



//     render(){
//         return(
//             <>
//                 <Store cart={this.handle}/>
//                 {
//                     this.state.item.map((item)=>{
//                         return(
//                             <>
//                                 <h1>{item}</h1>
//                                 <h1>{}</h1>
//                             </>
//                         )
//                     })
//                 }
//             </>
//         )
//     }
// }

// export default Cart


import React,{useState} from 'react'
import Store from './Store'

const Cart = () =>{

    const [cart,setCart]=useState([])

    return(
        <>
            <Store cart={setCart}/>
            <h1>Hi</h1>
            {
                cart.map((item)=>{
                    return(
                        <>
                            {item}
                        </>
                    )
                })
            }
        </>
    )
}

export default Cart 

