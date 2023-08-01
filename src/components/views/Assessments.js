import { useState, useEffect } from "react";
import View from "../UI/View.js";
import Searchbar from "./Searchbar.js";
import { Card, CardContainer } from "../UI/Card.js";

export default function Assessments(props) {
  const [theAssessments, setAssessments] = useState(null);
  const url = `http://softwarehub.uk/unibase/api/assessments/leader/820`;
  function searchFunction(search) {}

  const get = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAssessments(data);
    } catch (error) {
      console.error("Error fetching assessments:", error);
      setAssessments([]); // Set assessments to an empty array on error
    }
  };

  useEffect(() => {
    get();
  }, []);

  console.log("theAssessments:", theAssessments);

  return (
    <>
      {!theAssessments ? (
        <p>Loading Assessment records ...</p>
      ) : theAssessments.length === 0 ? (
        <p>No Assessment records found 🙂</p>
      ) : (
        <View>
          <h1>Assessments In The Module</h1>
          <Searchbar className="searchbar" searchFunction={searchFunction} />

          <CardContainer>
            {theAssessments.map((assessment) => (
              <Card key={assessment.AssessmentID}>
                <div className="Assignments">
                  <p>{assessment.AssessmentID}</p>
                  <p>{assessment.AssessmentName}</p>
                </div>
              </Card>
            ))}
          </CardContainer>
        </View>
      )}
    </>
  );
}
