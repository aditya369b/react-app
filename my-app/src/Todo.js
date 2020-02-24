import React from "react"
// import ReactDom from "react-dom"
import TodoList from "./TodoList"
import TodoData from "./TodoData"

function Todo(){
    return (
        <div className="App">
            <TodoList val={TodoData[0]}/>
            <TodoList val={TodoData[1]}/>
            <TodoList val={TodoData[2]}/>
            <TodoList val={TodoData[3]}/>
        </div>
    )
}

export default Todo