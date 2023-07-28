import { Card } from "../UI/Card";
export default function StudentCard({ student, children }) {
  return (
    <Card>
      <div className="studentcards">
        <p>{student.UserEmail.substring(0, 8)}</p>
        <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>

        <img
          className="img"
          src={student.UserImageURL}
          alt={student.UserEmail.substring(0, 8)}
        />
        <p>{student.UserAffinityID}</p>
      </div>
      {children}
    </Card>
  );
}
