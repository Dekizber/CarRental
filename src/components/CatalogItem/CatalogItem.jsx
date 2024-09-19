import { useDispatch, useSelector } from "react-redux";
import { handleFavorite } from "../../redux/slice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { selectFavoriteItems } from "../../redux/selectors";
import { openModal } from "../../redux/modal/sliceModal";

const CatalogItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(handleFavorite(car));
  };

  const handleOpenModal = () => {
    dispatch(openModal(car));
  };

  const isFavorite = useSelector(selectFavoriteItems).find(
    (item) => item.id === car.id
  );

  return (
    <div>
      <img src={car.img} alt={`${car.make} ${car.model}`} />
      <div>
        <p>
          {car.make} | {car.model} | {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>
      <div>
        <p>
          {car.address.split(", ")[1]} | {car.address.split(", ")[2]} |{" "}
          {car.rentalCompany} | {car.type} | {car.model} | {car.mileage} |{" "}
          {car.functionalities?.[1]}
        </p>
      </div>
      <button type="button" onClick={handleOpenModal}>
        Learn more
      </button>
      <button type="button" onClick={handleAddFavorite}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default CatalogItem;
