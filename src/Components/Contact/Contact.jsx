import PropTypes from "prop-types";

export default function Contact({ name, number, idContact, onDeleteContact }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(idContact)}>
        {" "}
        x{" "}
      </button>
    </li>
  );
}

Contact.propTypes = {
  idContact: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
