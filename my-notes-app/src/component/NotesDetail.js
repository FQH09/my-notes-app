import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/date";

function NotesDetail({ title, body, createdAt }) {
    return (
        <div className="detail">
            <h2>{title}</h2>
            <p>{body}</p>
            <time>Dibuat pada : {showFormattedDate(createdAt)}</time>
        </div>
    );
}

NotesDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default NotesDetail;