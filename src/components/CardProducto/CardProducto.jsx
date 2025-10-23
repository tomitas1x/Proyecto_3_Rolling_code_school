import Card from "react-bootstrap/Card";
import "../CardProducto/CardProducto.css";
import { Link } from "react-router-dom";

export const CardProducto = ({ nombre, image, precio }) => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="cardProducto m-2">
        <Card.Body>
          <Card.Title className="text-light">
            <Link to={"/error404"} className="text-decoration-none text-light">
              {nombre}
            </Link>
          </Card.Title>
        </Card.Body>
        <Link to={"/error404"}>
          <Card.Img variant="top" src={image} className="imgProducto" />
        </Link>
        <Card.Text className="text-light text-center">${precio}</Card.Text>
      </Card>
    </div>
  );
};
