import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";
import NotesDetail from "../component/NotesDetail";
import { getNote } from "../utils/network-data";
import NotFound from "./NotFound";

function DetailPage() {
    const { id } = useParams();
    const [note, setNote] = React.useState([]);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
          setNote(data);
        })
    }, [id]);
    
    if (!note) {
        return(
            <NotFound/>
        )
    }

    return(
        <>
        <NavBar />
        <NotesDetail title={note.title} createdAt={note.createdAt} body={note.body} />
        </>
    )
}


export default DetailPage;