import { Card, Col, ListGroup } from "react-bootstrap";
import Message from "./Message";
import { Review } from "../interfaces/campgrounds";
import Rating from "./Rating";
import { ApolloError } from "@apollo/client/errors";
import Loader from "./Loader";

type ReviewProp = {
  reviews: Review[];
  loading: boolean;
  error: ApolloError | undefined;
};

function Reviews({ reviews, loading, error }: ReviewProp) {
  return (
    <Col className="mt-4">
      <Card style={{ overflowY: "auto", maxHeight: "50vh" }}>
        <Card.Header className="review-card">
          <h4>Reviews</h4>
        </Card.Header>

        {reviews.length === 0 && <Card.Body>No Reviews</Card.Body>}
        <ListGroup variant="flush">
          {reviews.map((review) => (
            <ListGroup.Item key={review.review_id}>
              <strong>{review.user.name}</strong>
              <Rating value={review.rating} />
              <p>{review.created_at}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            {loading && <Loader />}
            {error && <Message variant="danger">{error.message}</Message>}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
}

export default Reviews;
