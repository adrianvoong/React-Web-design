import FavouriteCard from "../UI/FavouriteCard";

export default function Favourites(props) {
  return (
    <>
      <h1 className="Card">Students in your fav list</h1>
      <div className="theStudents">
        {props.students.map((student) => {
          return student.favourite ? (
            <FavouriteCard
              name={student.UserFirstname}
              id={student.UserID}
              img={student.UserImageURL}
              removeFavourite={props.removeFavourite}
            />
          ) : null;
        })}
      </div>
    </>
  );
}
