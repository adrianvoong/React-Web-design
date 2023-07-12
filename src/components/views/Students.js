import { useState } from "react";
import View from "../UI/View.js";

export default function Students(props) {
  const [theStudents] = useState(props.students);

  return (
    <View>
      <h1>Students In the course</h1>
      {theStudents.map((student) => {
        return (
          <div className="card-container">
            <studentCard>
              <p>{student.UserEmail.substring(0, 8)}</p>
              <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
              <img
                src={student.UserImageURL}
                alt={student.UserEmail.substring(0, 8)}
                addToFavourites={theStudents.addToFavourites}
              />
            </studentCard>
            <button
              onClick={() => {
                props.addToFavourites(student.UserID);
              }}
            >
              <span>Add Favourite</span>
            </button>
          </div>
        );
      })}
    </View>
  );
}
