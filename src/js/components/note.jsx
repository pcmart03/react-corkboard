import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash.flow';


import ItemTypes from "../constants/ItemTypes.js"
import NoteControls from './note-controls.jsx';

// pass the id and index of the dragged object
const noteSource = {
    beginDrag(props) {
        return {
            id: props.id,
            orderIndex: props.orderIndex,
        }
    },
    endDrag(props, monitor, component) {
        if (monitor.didDrop()) {
            props.dropNote();
        }
    }
};

const noteTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().orderIndex;
        const hoverIndex = props.orderIndex;

        // do nothing if dropped on self
        if (dragIndex === hoverIndex) {
            return;
        }

        // get rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // horizontal middle
        const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

        // mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the left
        const hoverClientX = clientOffset.x - hoverBoundingRect.left;
        // only move when the mouse has crossed the halfway point.

        // Dragging from the left
        if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
          return;
        }

        // Dragging dragging from the right
        if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
          return;
        }

        // perform the move
        props.moveNote(dragIndex, hoverIndex);

        monitor.getItem().orderIndex = hoverIndex;

    }
}

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, isDragging, connectDragSource, connectDropTarget} = this.props;
        const opacity = isDragging ? 0.25 : 1;
        const border = isDragging ? "solid 2px #757575" : 'none';
        return connectDropTarget(connectDragSource(
            <div className={`note ${this.props.color}`} tabIndex="0" style={{opacity, border}}>
                <div className="note-inner">
                    <p>
                        { this.props.text }
                    </p>
                    <NoteControls id={this.props.id} />
                </div>
            </div>
        ));
    }
}

export default flow(
        DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
            connectDropTarget: connect.dropTarget()
        })),
        DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            //connectDragPreview: connect.dragPreview(),
            isDragging: monitor.isDragging(),
        }))
    )(Note);