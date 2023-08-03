// Students.js
import React, { useState, useEffect } from "react";
import View from "../UI/View.js";
import Searchbar from "./Searchbar.js";
import { CardContainer } from "../UI/Card.js";
import FavCard from "./FavCard.js";
import StudentCard from "./StudentCard.js";
import ColourIndicator from "./ColourIndicator.js";
import FilterButtons from "./FilterButton.js";

const Students = (props) => {
  const [theStudents, setStudents] = useState(null);
  const [filteredStudents, setFilteredStudents] = useState(null);
  const url = `http://softwarehub.uk/unibase/api/users/likes/277`;

  function searchbar(search) {
    if (search === "") {
      setFilteredStudents(props.students);
    } else {
      const filteredStudents = props.students.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredStudents(filteredStudents);
      console.log(filteredStudents);
    }
  }

  const filterStudents = (filterType) => {
    if (filterType === "Liked") {
      const likedStudents = theStudents.filter(
        (student) => student.UserLikeAffinityID === 1
      );
      setFilteredStudents(likedStudents);
    } else if (filterType === "Disliked") {
      const dislikedStudents = theStudents.filter(
        (student) => student.UserLikeAffinityID === 2
      );
      setFilteredStudents(dislikedStudents);
    } else {
      // "All" filter or no filter selected, show all students
      setFilteredStudents(theStudents);
    }
  };

  const get = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data);
    setFilteredStudents(data); // Initialize filtered students with all students
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {!theStudents ? (
        <p>Loading records ...</p>
      ) : theStudents.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <View>
          <h1 className="title">Students In the course</h1>
          <Searchbar className="searchbar" searchbar={searchbar} />
          <FilterButtons onFilterChange={filterStudents} />
          <CardContainer>
            {filteredStudents.map((student, index) => (
              <ColourIndicator
                affinityID={student.UserLikeAffinityID}
                key={student.UserID}
              >
                <StudentCard key={student.UserID} student={student}>
                  <FavCard student={student} index={index} get={get} />
                </StudentCard>
              </ColourIndicator>
            ))}
          </CardContainer>
        </View>
      )}
    </>
  );
};

export default Students;
