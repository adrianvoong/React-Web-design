export default function Searchbar(props) {
  function handleChange(searching) {
    var value = searching.target.value;
    props.search(value);
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
            onChange={(searching) => {
              handleChange(searching);
            }}
          />
        </div>
      </div>
    </>
  );
}
