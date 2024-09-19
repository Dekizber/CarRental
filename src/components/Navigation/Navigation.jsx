import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navContainer}>
      <NavLink className={s.NavLink} to="/">
        Home
      </NavLink>
      <NavLink className={s.NavLink} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={s.NavLink} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
