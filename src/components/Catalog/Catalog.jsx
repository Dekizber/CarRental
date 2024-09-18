import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRentCarsThunk } from "../../redux/operations";
import { selectFilteredCars } from "../../redux/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";

const Catalog = () => {
  const cars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRentCarsThunk());
  }, [dispatch]);

  return (
    <ul>
      {cars.map((car) => {
        return (
          <li key={car.id}>
            <CatalogItem car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default Catalog;
