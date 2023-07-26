export default function FavCard({ student, children }) {
  // initialisation ----------------------------
  const loggedInUser = 277;
  const likeRecord = { LikerID: loggedInUser };
  const likeEndpoint = "http://softwarehub.uk/unibase/api/likes";

  const post = async (url, likeRecord) => {
    // Build request object
    const request = {
      method: "POST",
      body: JSON.stringify(likeRecord),
      headers: { "Content-type": "application/json" },
    };

    // Call the fetch
    const response = await fetch(url, request);
    const result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };

  // Handlers ----------------------------------
  const handleLike = (student) => {
    console.log(`you liked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 1;
    post(likeEndpoint, likeRecord);
  };

  const handleDislike = () => {
    console.log(`you disliked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 2;
    post(likeEndpoint, likeRecord);
  };

  const handleReset = () => {
    console.log(`you reset ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 0;
    post(likeEndpoint, likeRecord);
  };

  // View --------------------------------------
  const buttonLike = <button onClick={() => handleLike(student)}>Like</button>;
  const buttonDislike = (
    <button onClick={() => handleDislike(student)}>DisLike</button>
  );
  const buttonReset = (
    <button onClick={() => handleReset(student)}>Reset</button>
  );

  let buttons = null;
  if (student.UserAffinityID === 1)
    buttons = (
      <>
        {buttonDislike}
        {buttonReset}
      </>
    );
  else if (student.UserAffinityID === 0)
    buttons = (
      <>
        {buttonLike}
        {buttonDislike}
      </>
    );
  else
    buttons = (
      <>
        {buttonLike}
        {buttonReset}
      </>
    );

  return (
    <div className="FavCard">
      {children}
      {buttons}
    </div>
  );
}
