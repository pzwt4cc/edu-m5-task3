import * as yup from "yup";

export const TASK_VALIDATION_SCHEME = yup.object({
  name: yup.string().trim().min(1).max(64).required(),
  text: yup.string().trim().min(5).max(90).required(),
});
