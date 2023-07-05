import './Header.scss';

function Header(props) {
  return (
    <header>
      <h1>Basic React Demo</h1>
      <p className="welcome">Welcome {props.loggedInUser}</p>
    </header>
  );  
}

export default Header;