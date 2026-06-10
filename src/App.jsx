import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Singin from "./Profile/Signin";
import LogginChecker from "./Profile/LogginChecker";
import Profile from "./Profile/Profile";
import ProfileEdit from "./Profile/ProfileEdit";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={
            <LogginChecker>
              <Home />
            </LogginChecker>
          } />

          <Route path="/signin" element={<Singin />} />

          <Route path="/profile" element={
            <LogginChecker>
              <Profile />
            </LogginChecker>
          } />

          <Route path="/profile-edit" element={
            <LogginChecker>
              <ProfileEdit />
            </LogginChecker>
          } />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
