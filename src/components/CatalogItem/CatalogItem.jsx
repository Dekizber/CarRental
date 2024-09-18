import { useDispatch } from "react-redux";
import { handleFavorite } from "../../redux/slice";

const CatalogItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(handleFavorite(car));
  };

  return (
    <div>
      <img src={car.img} alt={`${car.make} ${car.model}`} />
      <div>
        <p>
          {car.make} {car.model}, {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>

      <div>
        <p>{car.address}</p>
        <p>{car.rentalCompany}</p>
        <p>{car.type}</p>
        <p>{car.model}</p>
        <p>{car.id}</p>
        <p>{car.functionalities?.[0]}</p>
      </div>

      <button type="button">Learn more</button>
      <button type="button" onClick={handleAddFavorite}>
        Add fav
      </button>
    </div>
  );
};

export default CatalogItem;
