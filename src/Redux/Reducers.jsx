
const data = []

const Reducers=(state=data,action)=>{
    switch(action.type){
        case 'Add_Todo':
            return [...state,action.payload]
        case 'Remove_Todo':
            return(state.filter((item)=>item!=action.payload))
        default:
            return state
    }
}

export default Reducers