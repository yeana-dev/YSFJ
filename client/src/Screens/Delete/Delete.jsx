import "./Delete.css";
import Card from "react-bootstrap/Card";
function Delete(props) {
  return (
    <Card id="card-delete">
      <Card.Img
        id="delete-img"
        src="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="card-image"
      />
      <Card.ImgOverlay>
        <Card.Text id="delete-text">Your Product Has Been Deleted</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
export default Delete;
