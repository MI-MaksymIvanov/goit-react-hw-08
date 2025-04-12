import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <PageTitle>Welcome to the Contacts App</PageTitle>
      <p className={css.text}>
        Log in to the app — your contacts are always just a tap away.
      </p>
    </div>
  );
}
