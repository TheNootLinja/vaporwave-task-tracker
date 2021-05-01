import '../styles/NewTasks.css';

function NewTask() {
    return (
        <div>
            <label htmlFor='task-name'>Task Name</label>
            <input type="text" name='task-name'/>
            <label htmlFor='task-date'>Task Date</label>
            <input type="date" name='task-name'/>
            <label htmlFor='task-desc'>Task Description</label>
            <textarea name="task-desc" id="" cols="30" rows="10"></textarea>
        </div>
    )
}

export default NewTask;