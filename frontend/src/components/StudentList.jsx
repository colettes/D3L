import React, { Component } from 'react';
import SingleStudent from './SingleStudent';

class StudentList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {groups, students, onDeleteStudent} = this.props;

        const editRoster = () => {
            console.log("edit clicked")
        }

        return (
            <div className="StudentList">
                <header>Students</header>
                {groups.map(group => (
                    <div className="group-container">
                        <header className="group-title">{group.title}</header>
                        {group.studentIds.map(studentId => <SingleStudent onDelete={onDeleteStudent} student={students[studentId]}/>)}
                    </div>                
                ))}
                <button onClick={editRoster}>Add Group</button> 
            </div>
        );
    }
}

export default StudentList;
