import { connect } from "react-redux";
import { deleteTask, updateTaskStatus } from "../../store/slices/taskSlice";

function TaskList({ tasks, deleteTaskById, updateTaskStatusById }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <input
            type="checkbox"
            checked={t.isDone}
            onChange={() => updateTaskStatusById(t.id)}
          />
          <p>{t.name}</p>
          {t.text}
          <button onClick={() => deleteTaskById(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;

const mapDispatchToProps = (dispatch) => ({
  deleteTaskById: (id) => dispatch(deleteTask(id)),
  updateTaskStatusById: (id) => dispatch(updateTaskStatus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
