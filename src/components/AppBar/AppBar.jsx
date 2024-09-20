import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={s.headerNav}>
      <h1 className={s.heading}>Car Rental</h1>
      <Navigation />
    </header>
  );
};
