import React from 'react'


const ListTodo = (props) => {
    let listItem ;

    if(props.list.length > 0){
        listItem = props.list.map((item,index) => 
            <li key={index}>{item}</li>
)
    }

    else{
        listItem = <p>Please Add some tasks</p>
    }

    return(
        <ul>
            {listItem}
        </ul>
    )
}
export default ListTodo;