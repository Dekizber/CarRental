import { useState } from "react";
import { useDispatch } from "react-redux";
import { carFilter } from "../../redux/slice";
import Dropdown from "react-dropdown";
import { makeList } from "../../makes_prices";

const DropFilter = () => {
  const dispatch = useDispatch();
  const [make, setMake] = useState(null);
  const handleSearch = () => {
    dispatch(carFilter({ make: make?.value }));
  };
  const handleReset = () => {
    dispatch(carFilter({ make: null }));
  };

  return (
    <div>
      <Dropdown
        options={makeList}
        onChange={setMake}
        placeholder="Select car"
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default DropFilter;
