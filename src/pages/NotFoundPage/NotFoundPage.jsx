import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { CiHome } from "react-icons/ci";

export default function NotFoundPage() {
  return (
    <section>
      <h1 className={css.title}>Oops! Page not found</h1>
      <Link to="/" className={css.link}>
        Go to Home{" "}
        <span>
          <CiHome />
        </span>
      </Link>
      <div className={css.wrapper}></div>
    </section>
  );
}
