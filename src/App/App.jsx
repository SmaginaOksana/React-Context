import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { HomePage, UsersDataPage, CreateUserData } from "../pages/index.js";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/usersData" element={<UsersDataPage />} />
            <Route path="/createUser" element={<CreateUserData />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
