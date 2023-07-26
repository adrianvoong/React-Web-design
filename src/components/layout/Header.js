import "./Header.scss";

function Header(props) {
  return (
    <header>
      <h1>Students Favourite App</h1>
      <p className="welcome">Welcome {props.loggedInUser}</p>
    </header>
  );
}

export default Header;
