import React from "react";
import PropTypes from 'prop-types';

function NotesArchive({ onClick }) {
  return (
    <button className="arsip-btn" onClick={onClick}>
      Pindahkan
    </button>
  );
}

NotesArchive.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default NotesArchive;