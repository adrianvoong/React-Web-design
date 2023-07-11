import { useState } from "react";
import View from "../UI/View.js";
import studentCard from "./StudentCard.js";

export default function Students(props) {
  const [theStudents, setStudents] = useState(props.students);

  return (
    <View>
      <h1>Students In the course</h1>
      {theStudents.map((student) => {
        return (
          <div className="card-container">
            <studentCard>
              <p>{student.UserEmail.substring(0, 8)}</p>
              <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
              src={student.UserImageURL}
              alt={student.UserEmail.substring(0, 8)}
              addToFavourites={props.addToFavourites}
            </studentCard>
          </div>
        );
      })}
    </View>
  );
}
