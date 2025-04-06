import { useState } from "react";

export default function TodoList() {

    let [todos, setTodo] = useState(["Sample Task"])
    return (
        <>
            <div>

                <input placeholder="Add a task" />
                <br />
                <br />
                <button>Add Task</button>
                <br />
                <br />
                <br />
                <hr />
                <h4>To Do List</h4>
                <ul>
                    {todos.map((todo) => (
                        <li>{todo}</li>
                    ))}
                </ul>
            </div>

        </>
    )
};