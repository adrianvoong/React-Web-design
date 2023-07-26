import "./Card.scss";

export function CardContainer(props) {
  return <div className="cardContainer">{props.children}</div>;
}

export function Card({ children }) {
  return <div className="card">{children}</div>;
}
