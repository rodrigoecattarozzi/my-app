import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, signOutUser } = useContext(UserContext);

  const handleClickLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <Title text="Mi perfil"></Title>


        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-10 w-52 h-52 rounded-full shadow-lg"
            src={user?.photoURL}
            alt="Bonnie image"
          />
          <h5 className="mb-2 text-2xl font-medium text-gray-900 dark:text-white">
            {user?.displayName}
          </h5>
          <span className="text-base text-gray-500 dark:text-gray-400">
            {user?.email}
          </span>
          <div className="flex mt-4 space-x-3 lg:mt-6">
            <Link to="/editProfile">
              <Button type="button" text="Editar" color="emerald" />
            </Link>

            <Button text="Salir" onClick={handleClickLogout} color="red" />
          </div>

      </div>
    </>
  );
};

export default Profile;
