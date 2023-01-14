import React from "react";
import PropTypes from 'prop-types'

class DataInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChangeEventListener = this.onTitleChangeEventListener.bind(this);
        this.onBodyChangeEventListener = this.onBodyChangeEventListener.bind(this);
        this.onSubmitEventListener = this.onSubmitEventListener.bind(this);
        
    }

    onTitleChangeEventListener(event) {
        const { value } = event.target;

        this.setState((prevState) => {
            return {
                ...prevState,
                title: value.length > 50 ? value.slice(0, 50) : value,
            };
        });
    }

    onBodyChangeEventListener(event) {
        this.setState((prevState) => {
            return {
              ...prevState,
              body: event.target.value,
            };
        });
    }

    onSubmitEventListener(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: "", body: "" });
    }

    render() {
        const { title, body } = this.state;

        return(
            <form className="form" onSubmit={this.onSubmitEventListener}>
                <p>Sisa karakter {title.length}/50</p>
                <input type="text" placeholder="Judul" onChange={this.onTitleChangeEventListener} value={title} required/>
                <textarea placeholder="tuliskan rincian..." onChange={this.onBodyChangeEventListener} value={body} required/>
                <button type="submit">Add Note</button>
            </form>
        );
    }
}

DataInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default DataInput;