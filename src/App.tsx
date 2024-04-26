import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Dashboard, Login, UserPage, User_details } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<UserPage />} />
          <Route path="users/user-details/:id" element={<User_details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
