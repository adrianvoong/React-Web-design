import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Students from "./components/views/Students.js";
import Modules from "./components/views/Modules.js";
import FavStudents from "./components/views/FavStudents.js";
import "./index.js";

function App() {
  const loggedInUser = "Adrian";

  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/Module" element={<Modules />} />
          <Route path="/Student" element={<Students />} />
          <Route path="/FavStudents" element={<FavStudents />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
