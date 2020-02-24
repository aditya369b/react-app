import React from "react"

function TodoList(props){
    return (
        <div>
            <input type="checkbox" checked={props.val.complete}/>
            <p> {props.val.id}. {props.val.task} </p>
        </div>
    )
}

export default TodoList    