import Select from "react-select";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { carFilter } from "../../redux/slice";
import { makeList } from "../../makes";
import s from "./DropFilter.module.css";

const DropFilter = () => {
  const dispatch = useDispatch();
  const [make, setMake] = useState(null);
  const handleSearch = () => {
    dispatch(carFilter({ make: make?.value }));
  };
  const handleReset = () => {
    setMake(null);
    dispatch(carFilter({ make: null }));
  };

  return (
    <div className={s.dropMenu}>
      <Select
        className={s.dropDown}
        options={makeList}
        onChange={setMake}
        value={make}
        placeholder="Select car"
        classNamePrefix="dropSelector"
      />
      <button className={s.searchBtn} type="button" onClick={handleSearch}>
        Search
      </button>
      <button className={s.resetBtn} type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default DropFilter;
