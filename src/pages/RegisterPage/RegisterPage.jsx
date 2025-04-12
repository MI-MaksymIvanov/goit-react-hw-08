import { useSelector } from "react-redux";
import { selectIsError } from "../../redux/auth/selectors";
import ErrorMassege from "../../components/ErrorMessage/ErrorMessage";

import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegisterPage() {
  const isError = useSelector(selectIsError);

  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
      {isError && <ErrorMassege />}
    </div>
  );
}
