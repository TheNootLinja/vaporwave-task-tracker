import '../styles/Tasks.css';
import { FaTimesCircle } from '@react-icons/all-files/fa/FaTimesCircle';

function Tasks({ taskName, taskDateTime, taskDesc, taskId, onDelete }) {
  return (
    <div className="tasks">
      <div className="task">
        <FaTimesCircle
          className="delete-button"
          data-key={taskId}
          onClick={onDelete}
        />
        <p>{taskName}</p>
        <p>{taskDateTime}</p>
        <p>{taskDesc}</p>
      </div>
    </div>
  );
}

export default Tasks;
