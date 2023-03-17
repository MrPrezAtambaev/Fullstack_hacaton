import React, { useContext, useReducer } from "react";
import { authAxios } from "@/utils/authAxios";
import { useRouter } from "next/router";

export const petsContext = React.createContext();
export const usePets = () => useContext(petsContext);

const INIT_STATE = {
  pets: [],
  pages: 0,
  onePets: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PETS":
      console.log("Payload Results:", action.payload);
      return {
        ...state,
        pets: action.payload,
      };
    case "ONE_PET":
      return { ...state, onePets: action.payload };
    default:
      return state;
  }
}

const PetContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getPets = async () => {
    try {
      const res = await authAxios("/post/pets/");
      console.log(res.data);
      dispatch({
        type: "GET_PETS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const createPet = async (newPet) => {
    try {
      const { data } = await authAxios.post("/post/pets/", newPet); // выполнение запроса с автоматическим добавлением заголовка Authorization
      console.log(data);
      getPets();
    } catch (e) {
      console.log(e);
    }
  };

  const getOnePet = async (id) => {
    try {
      const { data } = await authAxios(`/post/pets/${id}/`);
      dispatch({
        type: "ONE_PET",
        payload: data,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditedPet = async (editedPet) => {
    try {
      const { data } = await authAxios.patch(
        `/post/pets/${editedPet.id}/`,
        editedPet
      );
      console.log(data);
      getPets();
    } catch (e) {
      console.log(e);
    }
  };

  const deletePet = async (id) => {
    try {
      const { data } = await authAxios.delete(`/post/pets/${id}/`);
      console.log(data);
      getPets();
    } catch (e) {
      console.log(e);
    }
  };

  const values = {
    pets: state.pets,
    pages: state.pages,
    onePets: state.onePets,

    getPets,
    createPet,
    getOnePet,
    saveEditedPet,
    deletePet,
  };

  return <petsContext.Provider value={values}>{children}</petsContext.Provider>;
};

export default PetContextProvider;
