import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.contactFormField} />
        </label>
        <label className={css.label}>
          Password
          <Field
            type="password"
            name="password"
            className={css.contactFormField}
          />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
