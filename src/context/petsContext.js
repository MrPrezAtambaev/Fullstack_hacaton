import React, { useCallback, useContext, useReducer, useState } from "react";
import { authAxios } from "@/utils/authAxios";

export const petsContext = React.createContext();
export const usePets = () => useContext(petsContext);

const INIT_STATE = {
  pets: [],
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PETS":
      console.log("Payload get_one:", action.payload);
      return {
        ...state,
        pets: action.payload,
      };
    case "ONE_PET":
      return { ...state, onePet: action.payload };
    default:
      return state;
  }
}

const PetContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [comments, setComments] = useState([]);
  const [oneComment, setOneComment] = useState(null);

  const getPets = useCallback(async () => {
    try {
      const { data } = await authAxios("/post/pets/");
      console.log(data);
      dispatch({
        type: "GET_PETS",
        payload: data,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createPet = useCallback(
    async (newPets) => {
      try {
        const { data } = await authAxios.post("/post/pets/", newPets); // выполнение запроса с автоматическим добавлением заголовка Authorization
        console.log(data);
        console.log(newPets);
        getPets();
      } catch (e) {
        console.log(e);
      }
    },
    [getPets]
  );

  const deletePet = useCallback(
    async (id) => {
      try {
        const { data } = await authAxios.delete(`/post/pets/${id}/`);
        console.log(data);
        getPets();
      } catch (e) {
        console.log(e);
      }
    },
    [getPets]
  );

  // const deleteComment = async (id) => {
  //   try {
  //     const { data } = await authAxios.delete(`/feedback/comment/${id}`);
  //     console.log(data);
  //     getComments(id);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const getOneComment = async (id) => {
  //   try {
  //     const { data } = await authAxios(`/feedback/comment/${id}`);
  //     console.log(data);
  //     setOneComment(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const router = useRouter();
  const fetchByParams = (query, value) => {
  
    const search = new URLSearchParams(router.query);
  
    if (value === 'all') {
      search.delete(query);
    } else {
      search.set(query, value);
    }
  
    const newUrl = `${router.pathname}?${search.toString()}`;
  
    router.push(newUrl);
  };

  const values = {
    pets: state.pets,
    pages: state.pages,

    getPets,
    createPet,
    deletePet,
    fetchByParams,
    
  };

  return <petsContext.Provider value={values}>{children}</petsContext.Provider>;
};

export default PetContextProvider;
