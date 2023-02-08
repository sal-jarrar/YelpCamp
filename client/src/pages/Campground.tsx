import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import { seedDB } from "../constants/campgrounds";
import { useParams } from "react-router";

const camps = seedDB();
function Campground() {
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
              <img
                src={campground.url}
                alt={campground.title}
                style={{
                  width: "600px",
                  height: "650px",
                  objectFit: "cover",
                  boxShadow: "0 0 20px lightblue",
                  borderRadius: "4px",
                }}
              />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{campground.title}</h3>
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
              <Col className="mt-4">
                <Card>
                  <h2>Reviews</h2>
                  {campground.reviews === 0 && <span>No Reviews</span>}
                </Card>
              </Col>
              <Col className="mt-4">
                <Card>
                  <h2>Add Review</h2>
                </Card>
              </Col>
            </Col>
          </Row>
        </>
      </Layout>
    );
  }
}

export default Campground;
