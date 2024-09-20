import { useDispatch, useSelector } from "react-redux";
import { handleFavorite } from "../../redux/slice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { selectFavoriteItems } from "../../redux/selectors";
import { openModal } from "../../redux/modal/sliceModal";
import s from "./CatalogItem.module.css";
const CatalogItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(handleFavorite(car));
  };

  const handleOpenModal = () => {
    dispatch(openModal(car));
  };

  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const isFavorite = useSelector(selectFavoriteItems).find(
    (item) => item.id === car.id
  );

  return (
    <div className={s.itemWrapper}>
      <img
        className={s.itemImg}
        src={car.img}
        alt={`${car.make} ${car.model}`}
      />

      <div className={s.carHeading}>
        <p>
          {car.make} | <span className={s.modelSpan}>{car.model}</span> |{" "}
          {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>
      <div className={s.carInfo}>
        <p>
          {car.address.split(", ")[1]} | {car.address.split(", ")[2]} |{" "}
          {car.rentalCompany} | {car.type} | {car.model} |{" "}
          {formatMileage(car.mileage)} | {car.functionalities?.[1]}
        </p>{" "}
      </div>

      <button className={s.favBtn} type="button" onClick={handleAddFavorite}>
        {isFavorite ? (
          <FaHeart className={s.like} />
        ) : (
          <FaRegHeart className={s.dislike} />
        )}
      </button>
      <button className={s.learnBtn} type="button" onClick={handleOpenModal}>
        Learn more
      </button>
    </div>
  );
};

export default CatalogItem;
