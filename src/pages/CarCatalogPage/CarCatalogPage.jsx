import { PacmanLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectFilteredCars,
  selectIsLoading,
} from "../../redux/selectors";
import { useState } from "react";
import { loadMoreRentCarsThunk } from "../../redux/operations";
import DropFilter from "../../components/DropFilter/DropFilter";
import Catalog from "../../components/Catalog/Catalog";
import CarModal from "../../components/CarModal/CarModal";
import { selectIsModalOpen } from "../../redux/modal/selectorsModal";
import s from "./CarCatalogPage.module.css";

const CarCatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const modalStatus = useSelector(selectIsModalOpen);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const perPage = 12;
  const isExistCars = cars.length === 0;
  const lastPage = cars.length % perPage > 0; // цей метод не буде працювати якщо кількість об'єктів з API буде кратна 12
  const lastPageFilter = isExistCars || lastPage;
  const filterCars = useSelector(selectFilteredCars);
  const buttonLoadMore = () => {
    const addPage = page + 1;
    setPage(addPage);
    dispatch(loadMoreRentCarsThunk(addPage));
  };

  return (
    <div className={s.carPageWrapper}>
      <DropFilter />
      <div className={s.catalogContainer}>
        <Catalog />
        {isLoading && <PacmanLoader className={s.loaderIcon} color="#ffd600" />}
        {modalStatus && <CarModal />}
      </div>
      {!lastPageFilter && !isLoading && !filterCars.length && (
        <button className={s.loadMoreBtn} onClick={buttonLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CarCatalogPage;
