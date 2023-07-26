import { Card } from "../UI/Card";
export default function studentCards(props) {
  return (
    <div class="cardContainer">
      <Card>
        <img className="" alt="Img of student" src={props.UserImageURL} />
        <h1 className="">{props.UserFirstname}</h1>
        <h1 className="">FavouriteCard</h1>

        <button
          onClick={() => {
            props.addtoFavourites(props.UserID);
          }}
        >
          <span>Add to DAAAAA Favourite</span>
        </button>
      </Card>
    </div>
  );
}
