import { Card } from "../UI/Card";
export default function studentCards(props) {
  return (
    <div>
      <Card>
        <img className="Card" alt="Img of student" src={props.UserImageURL} />
        <h1 className="Card">{props.UserFirstname}</h1>
        <h1 className="Card">FavouriteCard</h1>

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
