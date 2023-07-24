import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Students from "./components/views/Students.js";
import Modules from "./components/views/Modules.js";
import Favourites from "./components/views/Favourites.js";
import "./index.js";

function App() {
  const loggedInUser = "Adrian";

  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/Module" element={<Modules />} />
          <Route path="/Student" element={<Students />} />
          <Route path="/favourite" element={<Favourites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
