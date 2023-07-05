import { useState } from "react";
import Favourite from "../UI/Favourite";
export default function Favourites(props) {
  const [students, setStudents] = useState(props.students);
  return (
    <>
      <h1>Favourites components go here</h1>
      <h1 className="">Students in your fav list</h1>
      <div className="">
        {students.map((student) => {
          if (student.favourite === true) {
            return (
              <Favourite
                name={student.UserFirstname}
                id={student.UserID}
                img={student.UserImageURL}
              />
            );
          }
        })}
      </div>
    </>
  );
}
