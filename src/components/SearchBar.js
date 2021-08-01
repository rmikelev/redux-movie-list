import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBar = ({ onSearch }) => {
    const [title, setTitle] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSearch(title);
    }

    return (
        <form inline onSubmit={onFormSubmit}>
            <Row>
                <Col sm={9}>
                <InputGroup className="form-group mb-3">
                    <Form.Control          
                        type="text"
                        id="movieTitle"
                        name="movieTitle"
                        placeholder="Search for a movie, show, or episode by name..."
                        onChange={(e) => setTitle(e.target.value)}
                        required 
                />
                </InputGroup>
            </Col>
            <Col sm={3}>
            <button type="submit" className="w-100 mb-3">Search</button>
            </Col>
            </Row>
        </form>
    )
}

export default SearchBar;