import Header from "../components/Header";
import { useQuery, gql } from "@apollo/client";
const Query = gql`
  query ExampleQuery {
    getCapmgrounds {
      camp_id
      title
    }
  }
`;

function Home() {
  const { data, error, loading } = useQuery(Query);
  console.log(data);

  return (
    <>
      <Header />
      <div className="welcome">
        <div className="inner text-center">
          <h1>YelpCamp</h1>
          <p className="lead">
            {" "}
            Welcome to YelpCamp! <br /> Jump right in and explore our many
            campgrounds. <br />
            Feel free to share some of your own and comment on others!
          </p>
          <a
            href="/campgrounds"
            className="btn btn-lg btn-secondary font-weight-bold border-white bg-white text-black"
          >
            View Campgrounds
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
