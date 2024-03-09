import React, {useRef, useEffect} from 'react'

const EditTask = ({editTodo, id, currentDescription, editing}) => {

    const handleSubmit = () => {
        let val = document.getElementById('description').value
        editTodo(id, val);
        editing();
    }
    const wrapper = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
          if (wrapper.current && !wrapper.current.contains(event.target)) {
            handleSubmit()
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [wrapper]);
    return (
        <label class="newtask" ref={wrapper}>
            <form method="POST" action="/tasks" enctype="multipart/form-data" onSubmit={handleSubmit}>
                <div class="description-container">
                    <label for="description">Task Description</label> 
                </div>
                <div class="input-container">
                    <input id="description" class="editdesc" name="description" required type="text" defaultValue={currentDescription}/> 
                </div>
            </form>
        </label>
    )
}

export default EditTask