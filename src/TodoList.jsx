import { useState } from "react";
import './TodoList.css';


export default function TodoList() {

    let [todos, setTodo] = useState(["Sample Task"])
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodo([...todos, newTodo])
    };

    let updateTask = (event) => {
        setNewTodo(event.target.value)

    };
    return (
        <>  <div className="TodoList">


            <div className="taskList">
                <h4>To Do List</h4>
                <ul>
                    {todos.map((todo) => (
                        <li>{todo}</li>
                    ))}
                </ul>
            </div>
            <div className="inputText">
                <input type="text"
                    placeholder="Add a task"
                    value={newTodo}
                    onChange={updateTask} />
            </div>
            <div className="todoButton">
                <button onClick={addNewTask}>Add Task</button>
            </div>


        </div>



        </>
    )
};