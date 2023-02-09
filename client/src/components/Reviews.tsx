import { Card, Col, ListGroup } from "react-bootstrap";
import Message from "./Message";
import { CampgroundProps } from "../interfaces/campgrounds";
import Rating from "./Rating";
// import Loader from "./Loader";

const reviews = [
  {
    _id: "1",
    rating: 3,
    comment: "Nice Campground",
    createdAt: "2023-01-12",
    name: "Jack",
  },
  {
    _id: "2",
    rating: 5,
    comment: "Nice Campground",
    createdAt: "2023-01-12",
    name: "Jack",
  },
  {
    _id: "3",
    rating: 4,
    comment: "Nice Campground",
    createdAt: "2023-01-12",
    name: "Jack",
  },
];

function Reviews({ campground }: CampgroundProps) {
  return (
    <Col className="mt-4">
      <Card>
        <Card.Header className="review-card">
          <h4>Reviews</h4>
        </Card.Header>

        {<Card.Body>No Reviews</Card.Body>}
        {/* <ListGroup variant="flush">
          {reviews.map((review) => (
            <ListGroup.Item key={review._id}>
              <strong>{review.name}</strong>
              <Rating value={review.rating} />
              <p>{review.createdAt.substring(0, 10)}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            {successcampgroundReview && (
            <Message variant="success">Review submitted successfully</Message>
          )}
          {loadingcampgroundReview && <Loader />}
          {errorcampgroundReview && (
            <Message variant="danger">{errorcampgroundReview}</Message>
          )}
          </ListGroup.Item>
        </ListGroup> */}
      </Card>
    </Col>
  );
}

export default Reviews;
