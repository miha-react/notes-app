import React, { Component } from 'react';

class NotesEditor extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    }
    handleTextChange({target}){
        this.setState({text: target.value})
    }
    generateColor(){
        let r = Math.floor(Math.random() * (256));
        let g = Math.floor(Math.random() * (256));
        let b = Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);

    }
    handleAddNote(){
        let newNote = {
            text: this.state.text,
            color: this.generateColor(),
            id: Date.now()
        };
        this.props.onNoteAdd(newNote);
        this.setState({text:''});
    }
    render() {
        return (
            <div className="note-editor">
                <textarea
                    className="textarea"
                    placeholder="Enter your note"
                    rows={3} value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button
                    className="add-button"
                onClick={this.handleAddNote}>
                    Add</button>
            </div>
        );
    }

}

export default NotesEditor;