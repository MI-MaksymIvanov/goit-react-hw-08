import { useEffect, useState } from "react";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={css.errorWrapper}>
      <b className={css.errorMessage}>Ops... Invalid user or mail</b>
    </div>
  );
}
