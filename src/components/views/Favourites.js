import Students from "./Students";
import Favourite from "../UI/Favourite";
export default function Favourites() {
  return (
    <>
      <h1>Favourites components go here</h1>
      <h1 className="">Students in your fav list</h1>
      <div className="">
        {Students.map((student) => {
          if (student.favourite === true) {
            return (
              <Favourite
                name={student.name}
                id={student.userid}
                img={student.img}
                removeFavourite={student.removeFavourite}
              />
            );
          }
        })}
      </div>
    </>
  );
}
