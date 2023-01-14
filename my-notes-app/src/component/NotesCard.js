import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"; 
import { showFormattedDate } from "../utils/date";

function NotesCard({ id, title, createdAt, body}) {
    return(
        <div className="card">
            <h2>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h2>
            <time dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
            <p>{body}</p>
        </div>
    );
}

NotesCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default NotesCard;