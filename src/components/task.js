import React, {useState} from "react";
import EditTask from "./editTask";

const Todo = ({task, toggleCompleted, editTask}) => {
    const [editing, setediting] = useState(true);
    const handleChange = () => {
        toggleCompleted(task.id);
    }

    const handleEdit = () => {
        setediting(!editing)
    }

    return (
        <label class="task">
            {editing ? (
                <>
                    <input class="checkbox" type="checkbox" checked={task.completed} onChange={handleChange} />
                    <a href="#" onClick={handleEdit}>{task.description}</a>
                </>
            ) : <EditTask editTodo={editTask} id={task.id} currentDescription={task.description} editing = {handleEdit} />
        }
        </label>    
    )
}

export default Todo