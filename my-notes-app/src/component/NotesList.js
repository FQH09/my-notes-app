import React from "react";
import PropTypes from 'prop-types';
import NotesItem from "./NotesItem";

function NotesList({ list, deleteData, archiveData }) {
    if (list.length) {
        return (
            <div className="list">
                {list.map((item) => (
                    <NotesItem data={item} key={item.id} deleteData={deleteData} archiveData={archiveData} />
                ))}
            </div>
        );
    }

    return <p>Tidak ada catatan</p>
}

NotesList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteData: PropTypes.func.isRequired,
    archiveData: PropTypes.func.isRequired,
}

export default NotesList;