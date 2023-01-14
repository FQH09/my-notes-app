import React from "react";
import NavBar from "../component/NavBar";
import NotesList from "../component/NotesList";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/network-data";

class ArchivePage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            datas: [],
        };

        this.searchEventHandler = this.searchEventHandler.bind(this);
        this.deleteNotesEventHandler = this.deleteNotesEventHandler.bind(this);
        this.archiveNotesEventHandler = this.archiveNotesEventHandler.bind(this);
    }

    searchEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            search: event.target.value,
          };
        });
    }
    
    async componentDidMount() {
      const { data } = await getArchivedNotes();
      
      this.setState(() => {
        return {
          datas: data
        }
      })
    }

    async deleteNotesEventHandler(id) {
      await deleteNote(id);
      const { data  } = await getArchivedNotes();
      this.setState(() => {
        return {
          datas: data,
        }
      });
    }

    async archiveNotesEventHandler(id) {
      await unarchiveNote(id);
      const {data} = await getArchivedNotes();
      this.setState(() => {
        return {
          datas: data,
        }
      })
    }
    

    render() {
      const datas = this.state.datas.filter((data) => {
        return data.title.toLowerCase().includes(
          this.state.search.toLowerCase()
        );
      });

        return (
          <div className='noteApp'>
            <NavBar onTyping={this.searchEventHandler} />
            <h2>Arsip</h2>
            <NotesList list={datas} 
            deleteData={this.deleteNotesEventHandler}
            archiveData={this.archiveNotesEventHandler}/>
          </div>
        );
    }
}

export default ArchivePage;