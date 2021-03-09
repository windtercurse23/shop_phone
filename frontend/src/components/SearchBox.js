import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/`);
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        className="mr-sm=2 ml-sm-5"
        placeholder="Search product..."
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
      ></Form.Control>
      <Button className="p-2" type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
