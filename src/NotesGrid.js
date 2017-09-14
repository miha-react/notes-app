import React, { Component } from 'react';
import Note from './Note';
import Masonry from "masonry-layout";

class NotesGrid extends Component{

    componentDidMount(){
      const grid = this.refs.grid;
       this.msnry = new Masonry(grid, {
                itemSelector: '.note',
                columnWidth: 220,
                 gutter: 5
            });

        }
    componentDidUpdate(prevProps){
            if(this.props.notes.length !== prevProps.notes.length){
                this.msnry.reloadItems();
                this.msnry.layout();
            }
        }
    render() {
        let onNoteDelete = this.props.onNoteDelete;
        return (
            <div className="notes-grid" ref = "grid">
                {
                    this.props.notes.map((note)=>{

                        return <Note
                            key = {note.id}
                            onDelete = {onNoteDelete.bind(null, note)}
                            color = {note.color}>
                            {note.text}
                            </Note>
                    })
                }
            </div>

        );
    }

}

export default NotesGrid;