import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing-page";
import Auth from "./pages/auth-page";
import Layout from "./common/components/Layout";
import AuthProtection from "./tools/protected-routes/AuthRoutes";
import LoggedInProtection from "./tools/protected-routes/LoggedInRoutes";
import Profile from "./pages/profile-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout children={<Landing />} />} path="/" />
        <Route element={<LoggedInProtection />}>
          <Route element={<Layout children={<Auth />} />} path="/auth/:type" />
        </Route>

        <Route element={<AuthProtection />}>
          <Route element={<Layout children={<Profile />} />} path="/profile" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
