import '../styles/Tasks.css';

function Tasks({taskName, taskDateTime, taskDesc, taskId, onDelete}) {
    return (
        <div className='tasks'>
            <div className='task'>
                <p className='delete-button' data-key={taskId} onClick={onDelete}>X</p>
                <p>{taskName}</p>
                <p>{taskDateTime}</p>
                <p>{taskDesc}</p>
            </div>
        </div>
    )
}

export default Tasks;