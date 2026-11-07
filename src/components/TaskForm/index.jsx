import { ErrorMessage, Field, Formik, Form } from "formik";
import { connect } from "react-redux";
import classNames from "classnames";
import { TASK_VALIDATION_SCHEME } from "./../../utils/validationsScheme";
import { addTask } from "../../store/slices/taskSlice";
import { IoAddOutline } from "react-icons/io5";
import styles from "./TaskForm.module.scss";

function TaskForm({ addNewTask }) {
  const initialValues = {
    title: "",
    text: "",
  };

  const submitHandler = (values, { resetForm }) => {
    addNewTask(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TASK_VALIDATION_SCHEME}
    >
      <Form className={classNames(styles.mainForm)}>
        <label className={classNames(styles.labelTask)}>
          Title:{" "}
          <Field
            className={classNames(styles.labelTaskField)}
            name="title"
            type="text"
            placeholder="Task title..."
            autoFocus
          />
        </label>
        <ErrorMessage
          className={classNames(styles.labelInputError)}
          name="title"
          component="div"
        />

        <label className={classNames(styles.labelTask)}>
          Description:{" "}
          <Field
            className={classNames(styles.labelTaskField)}
            name="text"
            type="text"
            placeholder="Add a description..."
          />
        </label>
        <ErrorMessage
          className={classNames(styles.labelInputError)}
          name="text"
          component="div"
        />

        <button className={classNames(styles.formBtnAdd)} type="submit">
          <IoAddOutline />
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (data) => dispatch(addTask(data)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
