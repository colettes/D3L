import React from 'react'

export default function Task(props) {

    return (
        <div className="single-task">
            <p>{props.task.title}</p>
            <span>{props.task.status}</span>
            <button className="delete-button" onClick={() => console.log("delete task clicked")}>x</button>
        </div>
    )
}
