import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Button, Container, Form } from "react-bootstrap";
import cities from "../constants/cities";
import useUser from "../hooks/useUser";
import { useMutation } from "@apollo/client";
import { CREATE_CAMP } from "../graphql/campground/Mutation";

function CreateCampground() {
  const { user } = useUser();
  const [createCamp, { loading, error, data }] = useMutation(CREATE_CAMP);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        <Message variant="success">Succefully Created!</Message>;
      }, 1500);
    }
  }, [data]);
  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Message variant="warning">
          Please <Link to="/login">sign in</Link> to write a review{" "}
        </Message>
      </div>
    );
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const input = {
      title: name,
      price: Number(price),
      location,
      description,
      image,
      user_id: Number(user.id),
      created_at: new Date().toISOString().split("T")[0],
    };

    console.log(input);

    createCamp({ variables: { input } });
  };
  console.log(description.length);

  console.log(new Date().toISOString().split("T")[0]);

  return (
    <>
      <Container className=" my-4">
        <Link to="/campgrounds" className="btn btn-light">
          Go Back
        </Link>
      </Container>

      <FormContainer>
        <h2>Edit Product</h2>
        {/* {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>} */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                {cities.map(({ city, state }) => (
                  <option value={city + "-" + state}>
                    {city + ", " + state}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
}

export default CreateCampground;
