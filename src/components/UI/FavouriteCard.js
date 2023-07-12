import { Card } from "./Card";

export default function FavouriteCard(props) {
  return (
    <Card>
      <img className="" alt="Img of student" src={props.UserImageURL} />
      <h1 className="">{props.UserFirstname}</h1>
      <h1 className="">FavouriteCard</h1>

      <button
        onClick={() => {
          props.removeFavourite(props.id);
        }}
      >
        <span>remove from DAAAAA Favourite</span>
      </button>
    </Card>
  );
}
