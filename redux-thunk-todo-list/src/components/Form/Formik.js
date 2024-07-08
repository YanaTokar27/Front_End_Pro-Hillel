import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";

const TodoFormik = ({ handleSubmit }) => {
  const validateName = (value) => {
    let errorMessage;

    if (!value.trim()) {
      errorMessage = "Name is required";
    }

    return errorMessage;
  };

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={async (values, actions) => {
        handleSubmit(values.name);
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <label>
              <Field name="name" validate={validateName}>
                {({ field, meta }) => {
                  console.log(meta.error, meta.touch)
                  return (
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      inputProps={{ style: { height: "15px" } }}
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error ? meta.error : null}
                      {...field}
                    />
                  </div>
                )}}
              </Field>
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TodoFormik;
