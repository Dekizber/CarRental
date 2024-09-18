import { useState } from "react";
import { useDispatch } from "react-redux";
import { carFilter } from "../../redux/slice";
import Dropdown from "react-dropdown";
import { makeList } from "../../makes_prices";

const DropFilter = () => {
  const dispatch = useDispatch();
  const [make, setMake] = useState(null);
  const handleConfirmFilter = () => {
    dispatch(carFilter({ make: make?.value }));
  };

  return (
    <div>
      <Dropdown
        options={makeList}
        onChange={setMake}
        placeholder="Select car"
      />
      <button type="button" onClick={handleConfirmFilter}>
        Confirm
      </button>
    </div>
  );
};

export default DropFilter;
