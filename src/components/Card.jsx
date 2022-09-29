import BCard from "react-bootstrap/Card";

const DEFAULT_WIDTH = "18rem";

const Card = ({ width = DEFAULT_WIDTH, children }) => {
  return <BCard className="col-12">{children}</BCard>;
};

export default Card;
