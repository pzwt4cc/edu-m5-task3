import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import styles from "./App.module.scss";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
}

export default App;
