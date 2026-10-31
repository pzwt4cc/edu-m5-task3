import { connect } from "react-redux";
import { deleteTask, updateTaskStatus } from "../../store/slices/taskSlice";
import classNames from "classnames";
import styles from "./TaskList.module.scss";
import { MdDeleteOutline } from "react-icons/md";

function TaskList({ tasks, deleteTaskById, updateTaskStatusById }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li
          className={classNames(styles.listCardItem, {
            [styles.done]: t.isDone,
          })}
          key={t.id}
        >
          <input
            className={classNames(styles.itemCheckInput)}
            type="checkbox"
            checked={t.isDone}
            onChange={() => updateTaskStatusById(t.id)}
          />
          <div className={classNames(styles.itemName)}>{t.name}</div>
          <div className={classNames(styles.itemText)}>{t.text}</div>
          <button
            className={classNames(styles.itemDelBtn)}
            onClick={() => deleteTaskById(t.id)}
          >
            <MdDeleteOutline />
          </button>
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
