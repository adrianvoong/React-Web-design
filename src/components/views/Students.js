// Students.js
import React, { useState, useEffect } from "react";
import View from "../UI/View.js";
import Searchbar from "./Searchbar.js";
import { CardContainer } from "../UI/Card.js";
import FavCard from "./FavCard.js";
import StudentCard from "./StudentCard.js";
import ColourIndicator from "./ColourIndicator.js";
import FilterButtons from "./FilterButton.js";

const Students = () => {
  const [theStudents, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const url = `http://softwarehub.uk/unibase/api/users/likes/277`;

  const searchbar = (search) => {
    if (search === "") {
      setFilteredStudents(theStudents);
    } else {
      const filteredStudents = theStudents.filter(
        (student) =>
          student.UserFirstname.toLowerCase().includes(search.toLowerCase()) ||
          student.UserLastname.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredStudents(filteredStudents);
    }
  };

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

  const getStudents = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch students data.");
      }
      const data = await response.json();
      setStudents(data);
      setFilteredStudents(data); // Initialize filtered students with all students
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
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
              <FavCard student={student} index={index} get={getStudents} />
            </StudentCard>
          </ColourIndicator>
        ))}
      </CardContainer>
    </View>
  );
};

export default Students;
