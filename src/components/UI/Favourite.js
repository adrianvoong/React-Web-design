import { useNavigate } from "react-router-dom";
import Favourites from "../views/Favourites";
import Students from "../views/Students";
import removeFavourite from "../views/Students";

export default function Favourite(props) {
  const navigate = useNavigate();
  return (
    <div className="">
      <img className="" alt="Img of student" src={props.img} />
      <h1 className="">{Students.name}</h1>
      <h1 className="">Lorem ipsum dolor sit amet, consectetur</h1>

      <button onClick={removeFavourite(Students.removeFavourite)} className="">
        <span>Remove Favourite</span>
      </button>
    </div>
  );
}
