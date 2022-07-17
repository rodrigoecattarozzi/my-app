import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { nanoid } from "nanoid";
import { erroresFirebase } from "../utils/erroresFirebase";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

function EditProfile() {
  const [loading, setLoading] = useState(false);
  let picUrl = "";
  const { user, signOutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [progressBar, setProgressBar] = useState(false);

  const updateData = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `images/${file.name + nanoid()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          console.log(downloadURL);
        });
        getDownloadURL(ref(storageRef))
          .then((url) => {
            picUrl = url;
            setImgUrl(url);
          })
          .then((url) => {
            setImgUrl(url);
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: picUrl,
            })
              .then(() => {
                console.log("Perfil actualizado");
              })
              .catch((error) => {
                console.log(error.message, "Error al actualizar el perfil");
              });
          });
      }
    );

    navigate("/profile");
  };

  return (
    <>
      <Title text="Editar perfil" />
      <div className="flex flex-col items-center pb-10">
        <form onSubmit={updateData} name="registration_form">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="small_size"
          >
            Foto de perfil
          </label>
          <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
          />
          <FormInput
            label="Nombre"
            type="text"
            placeholder="Ingresá tu nombre completo"
            onChange={(e) => setName(e.target.value)}
            value={name}
            error={errors.email}
          >
            <FormError error={errors.email} />
          </FormInput>
          <div className="flex flex-row mt-4 space-x-3 lg:mt-6 items-center">
            <Button
              text="Actualizar perfil"
              type="submit"
              loading={loading}
              color="emerald"
            />
            <Link to="/editProfile">
              <Button type="button" text="Cancelar" color="red" />
            </Link>
          </div>
        </form>
      </div>

      <span>
        <Link to="/profile">Volver al perfil</Link>
      </span>
    </>
  );
}

export default EditProfile;
