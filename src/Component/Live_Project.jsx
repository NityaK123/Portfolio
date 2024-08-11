import React,{useContext} from 'react'
import { Header } from './Header'
import { Background } from './Background'
import Cart from '../ClassComponent/Cart'
import userContext  from '../index.js'
import Checkbox from '../ClassComponent/CheckboxClass.jsx'
import Form  from  '../ClassComponent/Form.jsx'
import Timer from '../ClassComponent/Timer.jsx'
import Todo from '../ClassComponent/Todo.jsx'
import { Store } from '../Redux/Store.jsx'
import { Provider } from 'react-redux'

export const Live_Project = () => {

  const user = useContext(userContext)


  return (
    <>
        
       <Provider store={Store}>
        <Header/>
        <Background/>
        <Todo/>
       </Provider>

    </>
  )
}
