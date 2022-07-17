import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  orderBy,
  addDoc,
} from "firebase/firestore/lite";
import { useState } from "react";
import { db, auth } from "../firebase";
import { nanoid } from "nanoid";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState({});

  const addData = async (value) => {
    try {
      const newDoc = {
        name: value.name,
        bond: value.bond,
        authorization: value.authorization,
        payment: value.payment,
        upToDate: value.upToDate,
        debtTime: value.date,
      };
      console.log(newDoc);

      const docRef = collection(db, "ooss");
      await addDoc(docRef, newDoc);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const getData = async () => {
    try {
      setLoading(() => ({ getData: true }));
      const dataRef = collection(db, "ooss");
      const q = query(dataRef, orderBy("name"));
      const querySnapshot = await getDocs(q);
      const dataDB = querySnapshot.docs.map((doc) => doc.data());
      setData(dataDB);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(() => ({ getData: false }));
    }
  };

  const deleteData = async (nanoid) => {
    try {
      setLoading((prev) => ({ ...prev, [nanoid]: true }));
      const docRef = doc(db, "urls", nanoid);
      await deleteDoc(docRef);
      setData(data.filter((item) => item.nanoid !== nanoid));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, [nanoid]: false }));
    }
  };

  const updateData = async (nanoid, newOrigin) => {
    try {
      setLoading((prev) => ({ ...prev, updateData: true }));
      const docRef = doc(db, "urls", nanoid);
      await updateDoc(docRef, { origin: newOrigin });
      setData(
        data.map((item) =>
          item.nanoid === nanoid ? { ...item, origin: newOrigin } : item
        )
      );
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, updateData: false }));
    }
  };

  const searchData = async (nanoid) => {
    try {
      const docRef = doc(db, "urls", nanoid);
      const docSnap = await getDoc(docRef);

      return docSnap;
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return {
    data,
    error,
    loading,
    getData,
    addData,
    deleteData,
    updateData,
    searchData,
  };
};
