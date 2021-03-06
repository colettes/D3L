import React from "react";
import Details from "../components/Details";
import { Button, Card } from 'react-bootstrap';

export default class ClassCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { imageIndex, title, id, classKey } = this.props;

        const DATA = [
            { id: "todo-0", name: "Eat", completed: true },
            { id: "todo-1", name: "Sleep", completed: false },
            { id: "todo-2", name: "Repeat", completed: false }
        ];

        return (
            <div className="col-md-3 d-flex justify-content-center classCard">
                <Card style={{ width: '80%' }}>
                    <Card.Img variant="top" style={{ height: '50%'}} src={`/backgrounds/${imageIndex}.jpg`} />
                    <Card.Body>
                        <Card.Title> {title} </Card.Title>
                        {classKey && classKey.length > 0 &&
                            <Card.Text>
                                Class Key: {classKey}
                            </Card.Text>
                        }
                        
                        <Button variant="primary" href={`/class/${id}`}>View</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}