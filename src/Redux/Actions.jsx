export const AddTodo=(val)=>{
    return{
         type:"Add_Todo",
         payload:val
    }
}

export const RemoveTodo=(val)=>{
    return {
        type:'Remove_Todo',
        payload:val
    }
}
