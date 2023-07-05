import { CardContainer, Card } from "../UI/Card.js";
import { useState } from "react";

import "./Students.scss";
import "./Favourites.js";

function App() {
  const [Students, setStudents] = useState([
    {
      UserID: 275,
      UserFirstname: "Sholeh",
      UserLastname: "ABBAS",
      UserEmail: "K2955214@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
      favourite: true,
    },
    {
      UserID: 276,
      UserFirstname: "Hashim",
      UserLastname: "ABDALLAH",
      UserEmail: "K1083353@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
      favourite: false,
    },
  ]);

  function addToFavourites(UserID) {
    const updatedFavourites = Students.map((student) => {
      if (Students === student.UserID && student.favourite !== true) {
        alert("Student added to favourites");
        return { ...student, favourite: true };
      } else if (student.favourite === true) {
        alert("You've already added this student to favourite");
      }
      return student;
    });
    setStudents(updatedFavourites);
  }

  function removeFavourite(UserID) {
    const updatedFavourites = Students.map((student) => {
      if (UserID === student.id) {
        return { ...student, favourite: false };
      }
      return student;
    });

    setStudents(updatedFavourites);

    return (
      <>
        <h1>Students</h1>
        <CardContainer>
          {Students.map((student) => {
            return (
              <div className="studentCard">
                <Card>
                  <p>{student.UserEmail.substring(0, 8)}</p>
                  <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                  <img
                    src={student.UserImageURL}
                    alt={student.UserEmail.substring(0, 8)}
                  />
                  <button onClick={addToFavourites(student.addToFavourites)}>
                    Default
                  </button>
                  ;
                </Card>
              </div>
            );
          })}
        </CardContainer>
      </>
    );
  }
}

export default App;
