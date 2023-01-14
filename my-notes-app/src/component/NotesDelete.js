import React from "react";
import PropTypes from 'prop-types';

function NotesDelete({ onClick }) {
  return (
    <button className="delete-btn" onClick={onClick}>
      Delete
    </button>
  );
}

NotesDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default NotesDelete;