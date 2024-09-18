import { PacmanLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectIsLoading } from "../../redux/selectors";
import { useState } from "react";
import { loadMoreRentCarsThunk } from "../../redux/operations";
import DropFilter from "../../components/DropFilter/DropFilter";
import Catalog from "../../components/Catalog/Catalog";

const CarCatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const perPage = 12;
  const isExistCars = cars.length === 0;
  const lastPage = cars.length % perPage !== 0;
  const lastPageFilter = isExistCars || lastPage;

  const buttonLoadMore = () => {
    const addPage = page + 1;
    console.log(addPage);

    setPage(addPage);
    dispatch(loadMoreRentCarsThunk(addPage));
  };

  return (
    <div>
      <DropFilter />
      <Catalog />
      {isLoading && <PacmanLoader color="#ffd600" />}
      {lastPageFilter ? (
        <p>Sorry, no more cars to show you!</p>
      ) : (
        <button onClick={buttonLoadMore}>Load more</button>
      )}
    </div>
  );
};

export default CarCatalogPage;
