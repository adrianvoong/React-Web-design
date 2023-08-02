export default function FavCard({ student, children, index, get }) {
  // initialisation ----------------------------
  const loggedInUser = 277;
  const likeRecord = { LikerID: loggedInUser };
  const likeEndpoint = `http://softwarehub.uk/unibase/api/likes`;

  const postLike = async (url, likeRecord) => {
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

  const putLike = async (url, likeRecord) => {
    // Build request object
    const request = {
      method: "Put",
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

  const deleteLike = async (url) => {
    // Build request object
    const request = {
      method: "DELETE",
    };
    // Call the fetch
    let result = null;
    const response = await fetch(url, request);
    if (response.status !== 204) result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };

  // Handlers ----------------------------------
  const handlePostLike = async (student) => {
    console.log(`you liked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 1;
    const result = await postLike(likeEndpoint, likeRecord);
    result.isSuccess ? get() : alert(`result: ${result.message}`);
  };

  const handlePutLike = async (student) => {
    console.log(`you liked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 1;
    const result = await putLike(
      `${likeEndpoint}/${student.UserLikeID}`,
      likeRecord
    );
    result.isSuccess ? get() : alert(`result: ${result.message}`);
  };

  const handlePostDislike = async (student) => {
    console.log(`you liked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 2;
    const result = await postLike(likeEndpoint, likeRecord);
    result.isSuccess ? get() : alert(`result: ${result.message}`);
  };

  const handlePutDislike = async (student) => {
    console.log(`you liked ${student.UserID}`);
    likeRecord.LikeeID = student.UserID;
    likeRecord.LikeAffinityID = 2;
    const result = await putLike(
      `${likeEndpoint}/${student.UserLikeID}`,
      likeRecord
    );
    result.isSuccess ? get() : alert(`result: ${result.message}`);
  };

  const handleReset = async (student) => {
    console.log(`you reseted ${student.UserID}`);
    console.log(`student = ${JSON.stringify(student)}`);
    const result = await deleteLike(`${likeEndpoint}/${student.UserLikeID}`);
    result.isSuccess ? get() : alert(`result: ${result.message}`);
  };

  // View --------------------------------------
  const buttonPostLike = (
    <button onClick={() => handlePostLike(student)}>Like</button>
  );
  const buttonPutLike = (
    <button onClick={() => handlePutLike(student)}>Like</button>
  );
  const buttonPostDislike = (
    <button onClick={() => handlePostDislike(student)}>DisLike</button>
  );
  const buttonPutDislike = (
    <button onClick={() => handlePutDislike(student)}>DisLike</button>
  );
  const buttonReset = (
    <button onClick={() => handleReset(student)}>Reset</button>
  );

  let buttons = null;
  if (student.UserLikeAffinityID === 1)
    buttons = (
      <>
        {buttonPutDislike}
        {buttonReset}
      </>
    );
  else if (student.UserLikeAffinityID === 2)
    buttons = (
      <>
        {buttonPutLike}
        {buttonReset}
      </>
    );
  else if (student.UserLikeAffinityID === null)
    buttons = (
      <>
        {buttonPostLike}
        {buttonPostDislike}
      </>
    );
  else;

  return (
    <div className="">
      {children}
      <p>{student.UserID}</p>

      {buttons}
    </div>
  );
}
