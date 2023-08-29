
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./searchcities.css";


export default function SearchCities({ handleClick, handleChange }) {
  return (
    <Form className="search-width flex-row">
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search..."
            className=" mr-sm-2 search-width text-center"
            onChange={handleChange}
            
          />
        </Col>
        <Col xs="auto">
          <button
            className="border rounded"
            
            onClick={handleClick}
          >
           
          </button>
        </Col>
      </Row>
    </Form>
  );
}
