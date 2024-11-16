import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

const Plant = () => {
  return (
    <Card className="plant-card">
        <Card.Img variant="top"></Card.Img>
        <Card.Body>
            <Card.Title>Plant name</Card.Title>
            <Card.Text>Plant description</Card.Text>
            <ListGroup>
                <ListGroup.Item>Last Watered:</ListGroup.Item>
                <ListGroup.Item>Watering Frequency</ListGroup.Item>
                <ListGroup.Item>Next Watering Date</ListGroup.Item>
                <ListGroup.Item>Plant Status</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
  )
}

export default Plant