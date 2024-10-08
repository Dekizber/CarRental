import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { selectCar, selectIsModalOpen } from "../../redux/modal/selectorsModal";
import { closeModal } from "../../redux/modal/sliceModal";
import { IoCloseSharp } from "react-icons/io5";
import { handleFavorite } from "../../redux/slice";
import { selectFavoriteItems } from "../../redux/selectors";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import s from "./CarModal.module.css";
import { useEffect } from "react";
ReactModal.setAppElement("#root");

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(18, 20, 23, 0.5)",
  },
  content: {
    padding: "40px",
    width: "541px",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 1)",
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

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isModalOpen]);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className={s.modalContainer}>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button className={s.closeButton} onClick={handleCloseModal}>
          <IoCloseSharp className={s.closeIcon} />
        </button>
        <div className={s.imgDescrWrapper}>
          <img
            className={s.modalImg}
            src={selectedCar.img}
            alt={`${selectedCar.make} ${selectedCar.model}`}
          />
          <div className={s.carHeadDescr}>
            <h3>
              {selectedCar.make}{" "}
              <span className={s.modelSpan}>{selectedCar.model}</span>,{" "}
              {selectedCar.year}
            </h3>
            <p>
              {selectedCar.address.split(", ")[1]} |{" "}
              {selectedCar.address.split(", ")[2]} | Id: {selectedCar.id} |
              Year: {selectedCar.year} | Type: {selectedCar.type} <br /> Fuel
              Consumption: {selectedCar.fuelConsumption} | Engine size:{" "}
              {selectedCar.engineSize}
            </p>
            <p>{selectedCar.description}</p>
          </div>
        </div>
        <div className={s.descrContainer}>
          <p>Accessories and functionalities:</p>
          <p>
            {[...selectedCar.accessories.join(" | ")]}
            <br />
            {[...selectedCar.functionalities.join(" | ")]}
          </p>
          <p>Rental Conditions:</p>
          <div>
            {selectedCar.rentalConditions
              .split("\n")
              .map((condition, index) => (
                <div key={index} className={s.reqCard}>
                  {condition
                    .split("")
                    .map((part, i) =>
                      i === 1 ? <span key={i}>{part}</span> : part
                    )}
                </div>
              ))}
            <div className={s.milePriceWrapper}>
              <p>
                Mileage:{" "}
                <span className={s.modelSpan}>
                  {formatMileage(selectedCar.mileage)}
                </span>
              </p>
              <p>
                Price:{" "}
                <span className={s.modelSpan}>{selectedCar.rentalPrice}</span>
              </p>
            </div>
          </div>
          <a className={s.rentalBtn} href="tel:+380730000000">
            Rental car
          </a>
        </div>
        <button className={s.favBtn} type="button" onClick={handleAddFavorite}>
          {isFavorite ? (
            <FaHeart className={s.like} />
          ) : (
            <FaRegHeart className={s.dislike} />
          )}
        </button>
      </ReactModal>
    </div>
  );
};

export default CarModal;
