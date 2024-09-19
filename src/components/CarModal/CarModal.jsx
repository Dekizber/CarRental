import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { selectCar, selectIsModalOpen } from "../../redux/modal/selectorsModal";
import { closeModal } from "../../redux/modal/sliceModal";
import { IoCloseSharp } from "react-icons/io5";
import { handleFavorite } from "../../redux/slice";
import { selectFavoriteItems } from "../../redux/selectors";
import { FaHeart, FaRegHeart } from "react-icons/fa";

ReactModal.setAppElement("#root");

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "541px",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const CarModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const selectedCar = useSelector(selectCar);
  const handleAddFavorite = () => {
    dispatch(handleFavorite(selectedCar));
  };
  const isFavorite = useSelector(selectFavoriteItems).find(
    (item) => item.id === selectedCar.id
  );
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={modalStyle}
      ariaHideApp={false}
    >
      <button onClick={handleCloseModal}>
        <IoCloseSharp />
      </button>
      <img
        src={selectedCar.img}
        alt={`${selectedCar.make} ${selectedCar.model}`}
      />
      <button type="button" onClick={handleAddFavorite}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
      <h3>
        {selectedCar.make} {selectedCar.model}, {selectedCar.year}
      </h3>
      <p>
        {selectedCar.address} | Id: {selectedCar.id} | Year: {selectedCar.year}{" "}
        | Type: {selectedCar.type} <br /> Fuel Consumption:{" "}
        {selectedCar.fuelConsumption} | Engine size: {selectedCar.engineSize}
      </p>
      <p>{selectedCar.description}</p>
      <p>Accessories and functionalities:</p>
      <p>
        {[...selectedCar.accessories.join(" | ")]}
        <br />
        {[...selectedCar.functionalities.join(" | ")]}
      </p>
      <p>Rental Conditions:</p>
      <div>
        {selectedCar.rentalConditions.split("\n").map((condition, index) => (
          <div key={index}>
            {condition
              .split("")
              .map((part, i) => (i === 1 ? <span key={i}>{part}</span> : part))}
          </div>
        ))}
        <p>
          Mileage: <span>{selectedCar.mileage}</span>
        </p>
        <p>
          Price: <span>{selectedCar.rentalPrice}</span>
        </p>
      </div>

      <button>
        <a href="tel:+380730000000">Rental car</a>
      </button>
    </ReactModal>
  );
};

export default CarModal;
