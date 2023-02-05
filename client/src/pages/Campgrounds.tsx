import { Col, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import { seedDB } from "../constants/campgrounds";
import Campground from "../components/Campground";
import Paginate from "../components/Paginate";
import { useParams } from "react-router";

const camps = seedDB();
const pages = camps.length / 10;
console.log(camps);

function Campgrounds() {
  const { pageNumber } = useParams();
  const page = Number(pageNumber) || 1;
  // const pageNumber = match.params.pageNumber || 1
  return (
    <Layout>
      <h1>Campgrounds</h1>
      <Row xs={1} md={3} className="g-3">
        {camps.slice(page, 10).map((camp) => (
          <Col key={camp.camp_id} sm={12} md={6} lg={3} xl={3}>
            <Campground campground={camp} />
          </Col>
        ))}
      </Row>
      <Paginate pages={pages} page={page} />
    </Layout>
  );
}

export default Campgrounds;
