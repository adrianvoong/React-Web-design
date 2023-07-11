import { Card } from "../UI/Card";
export default function studentCard(props) {
  return (
    <Card>
      <img alt="Img of student" src={props.UserImageURL} />
      <h1>{props.UserFirstname}</h1>
      <button
        onClick={() => {
          props.addToFavourites(props.UserID);
        }}
      >
        <span>Add Favourite</span>
      </button>
    </Card>
  );
}
