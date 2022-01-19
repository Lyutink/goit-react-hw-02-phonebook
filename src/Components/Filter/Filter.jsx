import PropTypes from "prop-types";

export default function Filter({ filter, onChange }) {
  return (
    <label>
      Find contacts by Name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
