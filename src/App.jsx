import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
