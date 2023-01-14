import React from "react";
import PropTypes from 'prop-types';
import NotesArchive from "./NotesArchive";
import NotesDelete from "./NotesDelete";
import NotesCard from "./NotesCard";

function NotesItem({ data, deleteData, archiveData }) {
    return (
        <div className="item">
            <NotesCard
            id={data.id} title={data.title} createdAt={data.createdAt} body={data.body}
            />
            <div className="note-move">
                <NotesDelete onClick={() => deleteData(data.id)} />
                <NotesArchive archive={data.archive} onClick={() => archiveData(data.id)} />   
            </div>
        </div>
    );
}

NotesItem.propTypes = {
    data: PropTypes.object.isRequired,
    deleteData: PropTypes.func.isRequired,
    archiveData: PropTypes.func.isRequired
}

export default NotesItem;