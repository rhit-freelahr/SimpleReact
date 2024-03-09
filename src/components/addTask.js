import React, {useState} from 'react'

const AddTask = ({addTodo, changeOpen}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
        changeOpen();
    }
    return (
        <label class="newtask">
            <form method="POST" action="/tasks" enctype="multipart/form-data" onSubmit={handleSubmit}>
                <div class="description-container">
                    <label for="description">Task Description</label> 
                </div>
                <div class="input-container">
                    <input type ="checkbox" checked={false}/>
                    <input id="description" name="description" required type="text" value={value} onChange={(e) => setValue(e.target.value)}/> 
                </div>
            </form>
        </label>
    )
}

export default AddTask