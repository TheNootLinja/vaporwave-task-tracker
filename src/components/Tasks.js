import '../styles/Tasks.css';

function Tasks({ taskName, taskDateTime, taskDesc, taskId, onDelete }) {
  return (
    <div className="tasks">
      <div className="task">
        <div>
          <p  className="delete-button" data-key={taskId} onClick={onDelete}>X</p>
        </div>
        <p className='task-info'>{taskName}</p>
        <p className='task-info'>{taskDateTime}</p>
        <p className='task-info'>{taskDesc}</p>
      </div>
    </div>
  );
}

export default Tasks;
