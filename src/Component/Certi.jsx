import React from 'react'
import AddToCart from './AddToCart'

class Certi extends React.Component{

    constructor(props){
        super(props);
        this.state={
            item:["Hello","Mango","Apple"]
        }

    }

    sendData=(data)=>{
        this.setState((prev)=>({item:[...prev.item,data]}))
    }

    render(){
        return(
            <>
                 <AddToCart cart={this.sendData}/>
                {this.state.item.map((item)=>{
                    return(
                        <>
                            {item}
                            <br/>
                        </>
                    )
                })}
            </>
        )
    }
}

export default Certi

