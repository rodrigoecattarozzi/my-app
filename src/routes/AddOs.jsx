import { useEffect, useState, useRef } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";

import Button from "../components/Button";
import Title from "../components/Title";
import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { erroresFirebase } from "../utils/erroresFirebase";
import { useNavigate } from "react-router-dom";

const AddOs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setError,
    setValue,
  } = useForm();

  const { loading, data, error, addData } = useFirestore();
  const [newOriginID, setNewOriginID] = useState();
  const [name, setName] = useState("");
  const [bond, setBond] = useState(false);
  const [authorization, setAuthorization] = useState(false);
  const [payment, setPayment] = useState(0);
  const [upToDate, setUpToDate] = useState(false);
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const newDoc = {
        name: name,
        bond: bond,
        authorization: authorization,
        payment: payment,
        upToDate: upToDate,
        date: date
      };
      await addData(newDoc);
      navigate("/list");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    }
  };

  const handleClickDelete = async (nanoid) => {
    console.log("click delete");
    await deleteData(nanoid);
  };

  const handleClickEdit = (item) => {
    setValue("url", item.origin);
    setNewOriginID(item.nanoid);
  };

  const pathURL = window.location.href;

  const handleClickCopy = async (nanoid) => {
    await navigator.clipboard.writeText(window.location.href + nanoid);
    console.log("copiado");
    setCopy({ [nanoid]: true });
  };

  return (
    <>
      <Title text="Cargar Obra Social" />

      <div className="flex flex-col pb-10 items-center w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Nombre"
            type="text"
            placeholder="Nombre de la Obra Social"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormInput>
          <FormInput
            label="Pago"
            type="number"
            placeholder="Monto de pago"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          ></FormInput>
          <div>
            <div className="flex items-center mb-4">
              <input
                id="authorization"
                type="checkbox"
                className="w-4 h-4 text-emerald-500 bg-gray-100 rounded border-gray-300 focus:ring-emerald-300 dark:focus:ring-emerald-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={authorization}
                onChange={(e) => setAuthorization(e.target.checked)}
              />
              <label
                htmlFor="authorization"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                ¿Requiere autorización?
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <input
                id="bond"
                type="checkbox"
                className="w-4 h-4 text-emerald-500 bg-gray-100 rounded border-gray-300 focus:ring-emerald-300 dark:focus:ring-emerald-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={bond}
                onChange={(e) => setBond(e.target.checked)}
              />
              <label
                htmlFor="bond"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                ¿Requiere bono?
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <input
                id="upToDate"
                type="checkbox"
                className="w-4 h-4 text-emerald-500 bg-gray-100 rounded border-gray-300 focus:ring-emerald-300 dark:focus:ring-emerald-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={upToDate}
                onChange={(e) => setUpToDate(e.target.checked)}
              />
              <label
                htmlFor="upToDate"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 items-start"
              >
                ¿Está al día?
              </label>
            </div>
          </div>
          <div
            className={
              upToDate
                ? "flex-col mt-4 space-x-3 lg:mt-6 items-center hidden"
                : "flex flex-col mt-4 space-x-3 lg:mt-6 items-center"
            }
          >
            <div className="flex items-left mb-4 text-left">
              <label
                htmlFor="authorization"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                Adeuda desde:
              </label>
            </div>
            <input
              type="date"
              placeholder="Ingrese una fecha"
              value={date}
              id="date"
              onChange={(e) => setDate(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-emerald-300 focus:bg-emerald-50 focus:border-emerald-300 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            ></input>
          </div>
          <div className="flex flex-row mt-4 space-x-3 lg:mt-6 items-center">
            <Button text="Añadir" type="submit" color="emerald" />
          </div>
        </form>
      </div>


    </>
  );
};

export default AddOs;
