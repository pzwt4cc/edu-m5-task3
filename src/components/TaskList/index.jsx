import { connect } from "react-redux";
import {
  deleteTask,
  fetchInitialTasks,
  updateTaskStatus,
} from "../../store/slices/taskSlice";
import { useEffect } from "react";
import classNames from "classnames";
import styles from "./TaskList.module.scss";
import { MdDeleteOutline } from "react-icons/md";

function TaskList({
  tasks,
  deleteTaskById,
  updateTaskStatusById,
  getInitialTasks,
}) {
  useEffect(() => {
    getInitialTasks();
  }, [getInitialTasks]);

  return (
    <ul>
      {tasks.map((t) => (
        <li
          className={classNames(styles.listCardItem, {
            [styles.completed]: t.completed,
          })}
          key={t.id}
        >
          <input
            className={classNames(styles.itemCheckInput)}
            type="checkbox"
            checked={t.completed}
            onChange={() => updateTaskStatusById(t.id)}
          />
          <div className={classNames(styles.itemName)}>{t.title}</div>
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
  getInitialTasks: () => dispatch(fetchInitialTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
