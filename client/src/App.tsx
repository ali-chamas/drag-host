import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/user/landing-page";
import Auth from "./pages/user/auth-page";
import Layout from "./common/components/Layout";
import AuthProtection from "./tools/protected-routes/AuthRoutes";
import LoggedInProtection from "./tools/protected-routes/LoggedInRoutes";
import Profile from "./pages/user/profile-page";
import Games from "./pages/user/games-page";
import SingleGame from "./pages/user/single-game-page";
import UserProtection from "./tools/protected-routes/UserRoutes";
import AdminProtection from "./tools/protected-routes/AdminRoutes";
import AdminHome from "./pages/admin/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout children={<Landing />} />} path="/" />
        <Route element={<LoggedInProtection />}>
          <Route element={<Layout children={<Auth />} />} path="/auth/:type" />
          <Route element={<Layout children={<Auth />} />} path="/auth" />
        </Route>

        <Route element={<AuthProtection />}>
          <Route element={<UserProtection />}>
            <Route
              element={<Layout children={<Profile />} />}
              path="/profile"
            />
            <Route element={<Layout children={<Games />} />} path="/games" />
            <Route
              element={<Layout children={<SingleGame />} />}
              path="games/:gameId"
            />
          </Route>
          <Route element={<AdminProtection />}>
            <Route path="/admin" element={<AdminHome />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
