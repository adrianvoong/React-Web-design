import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Students from "./components/views/Students.js";
import Modules from "./components/views/Modules.js";
import removeFavourite from "./components/views/Favourites.js";
import { useState } from "react";
import Favourites from "./components/views/Favourites.js";

function App() {
  const loggedInUser = "Adrian";
  const [students, setStudents] = useState([
    {
      UserID: 275,
      UserFirstname: "Sholeh",
      UserLastname: "ABBAS",
      UserEmail: "K2955214@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
      favourite: true,
    },
    {
      UserID: 276,
      UserFirstname: "Hashim",
      UserLastname: "ABDALLAH",
      UserEmail: "K1083353@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
      favourite: true,
    },
  ]);
  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/Module" element={<Modules />} />
          <Route path="/student" element={<Students students={students} />} />
          <Route
            path="/favourite"
            element={<Favourites students={students} />}
            removeFavourite={removeFavourite}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
