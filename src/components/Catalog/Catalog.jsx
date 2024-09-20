import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRentCarsThunk } from "../../redux/operations";
import { selectFilteredCars } from "../../redux/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./Catalog.module.css";

const Catalog = () => {
  const cars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRentCarsThunk());
  }, [dispatch]);
  console.log(cars);

  return (
    <ul className={s.catalogList}>
      {cars.map((car) => {
        return (
          <li key={car.id} className={s.catalogItem}>
            <CatalogItem car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default Catalog;
