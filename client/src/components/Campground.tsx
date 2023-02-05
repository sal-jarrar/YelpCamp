import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CampgroundProps } from "../interfaces/campgrounds";

const Text = ({ description }: { description: string }) => {
  const text =
    description.length >= 150 ? description.slice(0, 150) + "..." : description;
  return <Card.Text>{text}</Card.Text>;
};

function Campground({ campground }: CampgroundProps) {
  return (
    <Card className="bg-dark fw-semibold text-white card-home">
      <Card.Img
        src={campground.url}
        alt="Card image"
        height={"300px"}
        width={"100%"}
        className="card-img-home"
      />
      <Card.ImgOverlay>
        <Card.Title className="card-title-home">{campground.title}</Card.Title>
        <Text description={campground.description} />
        <Card.Text>{campground.location}</Card.Text>
        <Card.Text className="fst-italic">By:{campground.author}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Campground;
