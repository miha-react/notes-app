import React, { Component } from 'react';

class Notes extends Component{
    render() {
        let style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>
            <span className ="delete-note" onClick={this.props.onDelete}>x</span>
                {this.props.children}
            </div>
        );
    }

}

export default Notes;

