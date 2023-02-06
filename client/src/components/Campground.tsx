import { Card } from "react-bootstrap";
import { CampgroundProps } from "../interfaces/campgrounds";
import { LinkContainer } from "react-router-bootstrap";
import Rating from "./Rating";

const Text = ({ description }: { description: string }) => {
  const text =
    description.length >= 150 ? description.slice(0, 150) + "..." : description;
  return <Card.Text>{text}</Card.Text>;
};

function Campground({ campground }: CampgroundProps) {
  return (
    <LinkContainer to={`/campground/${campground.camp_id}`}>
      <div className="card-home">
        <div className="card-home-inner">
          <div className="card-face card-face-front">
            <img src={campground.url} alt="" className="card-img" />
          </div>
          <div className="card-face card-face-back">
            <div className="card-content">
              <div className="card-header">
                <img src={campground.url} alt="" className="pp" />
              </div>
              <div className="card-body">
                <h3 className="px-2">{campground.title}</h3>
                <Text description={campground.description} />
                <Rating
                  value={campground.rating}
                  reviewsNum={campground.reviews}
                />
                <Card.Text className="fst-italic fs-6">
                  By: {campground.author}
                </Card.Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LinkContainer>
  );
}

export default Campground;
