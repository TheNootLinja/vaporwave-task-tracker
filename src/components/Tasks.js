import '../styles/Tasks.css';

function Tasks({taskName, taskDateTime, taskDesc}) {
    return (
        <div className='tasks'>
            <div className='task'>
                <p className='delete-button'>X</p>
                <p>{taskName}</p>
                <p>{taskDateTime}</p>
                <p>{taskDesc}</p>
            </div>
        </div>
    )
}

export default Tasks;