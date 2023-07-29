import ColourIndicator from "./ColourIndicator.js";

export default function StudentCard({ UserLikeAffinityID, student, children }) {
  return (
    <>
      <ColourIndicator affinityID={UserLikeAffinityID} />
      <p>{student.UserEmail.substring(0, 8)}</p>
      <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
      <img
        className="img"
        src={student.UserImageURL}
        alt={student.UserEmail.substring(0, 8)}
      />
      {children}
    </>
  );
}
