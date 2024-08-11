import React from 'react'

class AddToCart extends React.Component{
        constructor(props){
            super(props)
            this.state={
                items:["Hi"],
                count:0
            }
        }

        // handle(){
        //     console.log(this.state)
        //     this.setState((prev)=>({items:[...prev.items,"Gopal"]}))
        //     console.log(this.state)
        // }

        sendData(a){
            this.setState((prev)=>({items:[...prev.items,a]}))
            this.props.cart(this.state.items)
        }

        render(){
            return(
                <>
                    <button onClick={()=>this.sendData("Hello")}>Click</button>
                </>
            )
        }
}

export default AddToCart;