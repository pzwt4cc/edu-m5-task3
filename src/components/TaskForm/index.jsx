import { ErrorMessage, Field, Formik, Form } from "formik";
import { connect } from "react-redux";
import { TASK_VALIDATION_SCHEME } from "./../../utils/validationsScheme";
import { addTask } from "../../store/slices/taskSlice";

function TaskForm({ addNewTask }) {
  const initialValues = {
    name: "",
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
      <Form>
        <label>
          Name:{" "}
          <Field name="name" type="text" placeholder="Name of task" autoFocus />
        </label>
        <ErrorMessage name="name" component="div" />

        <label>
          Text: <Field name="text" type="text" />
        </label>
        <ErrorMessage name="text" component="div" />

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (data) => dispatch(addTask(data)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
