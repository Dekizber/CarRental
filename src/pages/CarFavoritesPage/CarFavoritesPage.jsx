import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "../../redux/selectors";

const CarFavoritesPage = () => {
  const favoriteItems = useSelector(selectFavoriteItems);

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
    </div>
  );
};

export default CarFavoritesPage;
