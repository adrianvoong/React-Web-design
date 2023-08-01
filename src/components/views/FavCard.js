export default function FavCard({ student, children, index }) {
  // initialisation ----------------------------
  const loggedInUser = 277;
  const likeRecord = { LikeID: loggedInUser };
  const likeEndpoint = `http://softwarehub.uk/unibase/api/likes`;

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
    likeRecord.LikeAffinityID = null;
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
  if (student.UserLikeAffinityID === 1)
    buttons = (
      <>
        {buttonDislike}
        {buttonReset}
      </>
    );
  else if (student.UserLikeAffinityID === 0)
    buttons = (
      <>
        {buttonLike}
        {buttonDislike}
      </>
    );
  else if (student.UserLikeAffinityID === null)
    buttons = (
      <>
        {buttonLike}
        {buttonReset}
      </>
    );
  else;

  return (
    <div className="">
      {children}
      <p>{index}</p>

      {buttons}
    </div>
  );
}
