import { connect } from "react-redux";
import { deleteTask } from "../../store/slices/taskSlice";

function TaskList({ tasks, deleteTaskById }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
