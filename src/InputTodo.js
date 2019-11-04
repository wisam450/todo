import React from 'react'

const InputTodo = (props) => {
    return(

        <input type="text" placeholder="Now Musst be Work"
        value= {props.todoV}
        onChange={(e) => props.changed(e)}/>
    );
}

export default InputTodo;