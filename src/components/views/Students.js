import { CardContainer, Card } from "../UI/Card.js";
import { useState } from "react";

import "./Students.scss";
import "./Favourites.js";

function Students(props) {
  const [students, setStudents] = useState(props.students);

  function addToFavourites(UserID) {
    const updatedFavourites = students.map((student) => {
      if (student === student.UserID && student.favourite !== true) {
        alert("Student added to favourites");
        return { ...student, favourite: true };
      } else if (student.favourite === true) {
        //alert("You've already added this student to favourite");
      }
      return student;
    });
    setStudents(updatedFavourites);
  }

  function removeFavourite(UserID) {
    const updatedFavourites = students.map((student) => {
      if (UserID === student.id) {
        return { ...student, favourite: false };
      }
      return student;
    });
    setStudents(updatedFavourites);
  }

  return (
    <>
      <h1>Students</h1>
      <CardContainer>
        {students.map((student) => {
          return (
            <div className="studentCard">
              <Card>
                <p>{student.UserEmail.substring(0, 8)}</p>
                <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                <img
                  src={student.UserImageURL}
                  alt={student.UserEmail.substring(0, 8)}
                />
                <button>Default</button>
              </Card>
            </div>
          );
        })}
      </CardContainer>
    </>
  );
}

export default Students;
