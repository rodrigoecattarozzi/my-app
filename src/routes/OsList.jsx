import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Title from "../components/Title";

function OsList() {
  const { loading, data, error, getData, addData, deleteData, updateData } =
    useFirestore();

  useEffect(() => {
    getData();
  }, []);

  if (loading.getData) return <p>Loading data getData...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Title text="Lista de Obras Sociales" />
      <div className="flex mt-4 space-x-3 lg:mt-6">
        <Link to="/AddOs">
          <Button type="button" text="Añadir" color="emerald" />
        </Link>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Nombre
              </th>
              <th scope="col" className="py-3 px-6">
                Autorización
              </th>
              <th scope="col" className="py-3 px-6">
                Bono
              </th>
              <th scope="col" className="py-3 px-6">
                Pago
              </th>
              <th scope="col" className="py-3 px-6">
                Al día
              </th>
              <th scope="col" className="py-3 px-6">
                Deuda desde
              </th>
              <th scope="col" className="py-3 px-6">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.name}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="py-4 px-6">
                  {item.authorization ? "Sí" : "No"}
                </td>
                <td className="py-4 px-6">{item.bond ? "Sí" : "No"}</td>
                <td className="py-4 px-6">
                  ${item.payment === "" ? "0" : item.payment}
                </td>
                <td className="py-4 px-6">{item.upToDate ? "Sí" : "No"}</td>
                <td className="py-4 px-6">
                  {item.debtTime === ""
                    ? "Sin deuda"
                    : item.debtTime.split("-").reverse().join("-")}
                </td>
                <td className="py-4 px-6">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OsList;
