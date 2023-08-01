export default function Searchbar(props) {
  function handleChange(searchingStudent) {
    var value = searchingStudent.target.value;
    props.searchCoursemate(value);
  }
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="search"
            onChange={(searchingStudent) => {
              handleChange(searchingStudent);
            }}
          />
        </div>
      </div>
    </>
  );
}
