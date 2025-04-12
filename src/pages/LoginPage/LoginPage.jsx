import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { selectIsError } from "../../redux/auth/authSelectors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function LoginPage() {
  const isError = useSelector(selectIsError);

  return (
    <>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      {isError && <ErrorMessage />}
    </>
  );
}
