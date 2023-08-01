import { useState, useEffect } from "react";
import View from "../UI/View.js";
import Searchbar from "./Searchbar.js";
import { CardContainer } from "../UI/Card.js";
import FavCard from "./FavCard.js";
import StudentCard from "./StudentCard.js";
import ColourIndicator from "./ColourIndicator.js";

export default function Students(props) {
  const [theStudents, setStudents] = useState(null);
  const url = `http://softwarehub.uk/unibase/api/users/likes/277`;
  const [searchedStudent, setSearchedStudent] = useState(props.students);

  function searchbar(search) {
    if (search === "") {
      setSearchedStudent(props.students);
    } else {
      const filteredStudents = props.students.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedStudent(filteredStudents);
      console.log(filteredStudents);
    }
  }
  const get = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    get();
  }, []);

  console.log("theStudents:", theStudents);

  return (
    <>
      {!theStudents ? (
        <p>Loading records ...</p>
      ) : theStudents.length === 200 ? (
        <p>No records found.</p>
      ) : (
        <View>
          <h1 className="title">Students In the course</h1>
          <Searchbar className="searchbar" searchbar={searchbar} />

          <CardContainer>
            {theStudents.map((student, index) => (
              <ColourIndicator
                affinityID={student.UserLikeAffinityID}
                key={student.UserID}
              >
                <StudentCard key={student.UserID} student={student}>
                  <FavCard student={student} index={index} />
                </StudentCard>
              </ColourIndicator>
            ))}
          </CardContainer>
        </View>
      )}
    </>
  );
}
