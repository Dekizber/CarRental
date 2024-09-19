import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "../../redux/selectors";
import CarModal from "../../components/CarModal/CarModal";
import { selectIsModalOpen } from "../../redux/modal/selectorsModal";

const CarFavoritesPage = () => {
  const favoriteItems = useSelector(selectFavoriteItems);
  const modalStatus = useSelector(selectIsModalOpen);

  return (
    <div>
      <h1>Favorite rentals</h1>
      <ul>
        {favoriteItems.map((car) => {
          return (
            <li key={car.id}>
              <CatalogItem car={car} />
            </li>
          );
        })}
      </ul>
      {modalStatus && <CarModal />}
    </div>
  );
};

export default CarFavoritesPage;
