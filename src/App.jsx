import { UserContext } from "./context/UserProvider";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import EditProfile from "./routes/EditProfile";
import NotFound from "./routes/NotFound";
import Register from "./routes/Register";
import Profile from "./routes/Profile";
import OsList from "./routes/OsList";
import AddOs from "./routes/AddOs";
import Login from "./routes/Login";
import Home from "./routes/Home";


import LayoutContainerForm from "./components/layouts/LayoutContainerForm";
import LayoutRequireAuth from "./components/layouts/LayoutRequireAuth";
import LayoutRedirect from "./components/layouts/LayoutRedirect";
import NavbarSuper from "./components/NavbarSuper";
import Title from "./components/Title";

const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <Title text="Cargando"/>;
  }

  return (
    <>
      <NavbarSuper />
      <Routes>
        <Route path="/" element={<LayoutRequireAuth />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="list" element={<OsList />} />
          <Route path="addOs" element={<AddOs />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/:nanoid" element={<LayoutRedirect />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
