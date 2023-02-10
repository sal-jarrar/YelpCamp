import { Card, Col, ListGroup } from "react-bootstrap";
import Message from "./Message";
import { Review } from "../interfaces/campgrounds";
import Rating from "./Rating";
// import Loader from "./Loader";
type ReviewProp = {
  reviews: Review[];
};

function Reviews({ reviews }: ReviewProp) {
  return (
    <Col className="mt-4">
      <Card>
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
          {/* <ListGroup.Item>
            {successcampgroundReview && (
            <Message variant="success">Review submitted successfully</Message>
          )}
          {loadingcampgroundReview && <Loader />}
          {errorcampgroundReview && (
            <Message variant="danger">{errorcampgroundReview}</Message>
          )}
          </ListGroup.Item> */}
        </ListGroup>
      </Card>
    </Col>
  );
}

export default Reviews;
