import react from "react";

const Selector = ({ setSelector }) => {
  return (
    <select
      className="form-select"
      onChange={(event) => setSelector(event.target.value)}
    >
      <option value="" selected>
        All
      </option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Rabbit">Rabbit</option>
    </select>
  );
};

export default Selector;
