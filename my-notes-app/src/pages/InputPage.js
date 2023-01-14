import React from "react";
import { useNavigate } from "react-router-dom";
import DataInput from "../component/DataInput";
import { addNote } from "../utils/network-data";
import NavBar from "../component/NavBar";

function InputPage() {
    const navigate = useNavigate();

    async function onAddNoteHandler(notes) {
        await addNote(notes);
        navigate('/');
    }

    return (
        <section>
            <NavBar/>
            <h2>Silahkan masukkan catatan :</h2>
            <DataInput addNote={onAddNoteHandler}/>
        </section>
    )
}

export default InputPage;