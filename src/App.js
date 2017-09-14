import React, { Component } from 'react';
import NotesEditor from './NotesEditor';
import NotesGrid from './NotesGrid';
import "./style.css";

const NOTES = [{
    id:0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    color: "#2FF"
},
    {
        id:1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        color: "#20B2AA"
    },{
        id:2,
        text: "Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor." +
        " Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.",
        color: "#90EE90"
    },{
        id:3,
        text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.",
        color: "#FFB6C1"
    },{
        id:4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        color: "#00FA9A"
    },
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes:NOTES
        };
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handlerDeleteNote = this.handlerDeleteNote.bind(this);
    }
    componentDidMount(){
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes){
            this.setState({notes: localNotes });
        }
    }
    componentDidUpdate(){
        this.updateLocalStorage();
    }
    handleAddNote(newNote){
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    }
    handlerDeleteNote(note){
        let noteId = note.id;
        let newNotes =this.state.notes.filter(note=>note.id !== noteId);
        this.setState({notes:newNotes});
    }
    updateLocalStorage(){
      let notes = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", notes);
    }
    render() {
    return (
        <div className="notes-app">
            Notes App
            <NotesEditor onNoteAdd={this.handleAddNote}/>
            <NotesGrid notes = {this.state.notes} onNoteDelete ={this.handlerDeleteNote} />

        </div>

    );
  }
}

export default App;
