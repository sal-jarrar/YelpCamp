import { FormEvent, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import { seedDB } from "../constants/campgrounds";
import { useParams } from "react-router";
import Reviews from "../components/Reviews";
import Message from "../components/Message";
import useUser from "../hooks/useUser";

const camps = seedDB();
function Campground() {
  const { user } = useUser();
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  const { campId } = useParams();
  const id = Number(campId);
  const campground = camps.find((camp) => camp.camp_id === id);
  if (!campground) {
    return (
      <>
        <h1>No Data</h1>
      </>
    );
  } else {
    return (
      <Layout showFooter={true}>
        <Link className="btn btn-light  my-4" to="/campgrounds">
          Go Back
        </Link>

        <>
          {/* <Meta title={product.name} /> */}
          <Row>
            <Col md={6}>
              <div className="d-flex flex-column">
                <div>
                  <img
                    src={campground.url}
                    alt={campground.title}
                    className="img-camp"
                  />
                </div>
                <div
                  className="review-form"
                  style={{ width: "550px", marginTop: "24px" }}
                >
                  <h4>Write a Customer Review</h4>
                  {user ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                          className="rating-input"
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment" className="mt-3">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="rating-input"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <Button
                          // disabled={loadingcampgroundReview}
                          type="submit"
                          variant="outline-dark"
                          size="lg"
                          className="mt-3"
                        >
                          Submit
                        </Button>
                      </Form.Group>
                    </Form>
                  ) : (
                    <Message variant="warning">
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item className="review-card">
                  <h4>{campground.title}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={campground.rating}
                    reviewsNum={campground.reviews}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Location: {campground.location}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {campground.description}
                </ListGroup.Item>
              </ListGroup>

              <Reviews campground={campground} />
            </Col>
          </Row>
        </>
      </Layout>
    );
  }
}

export default Campground;
