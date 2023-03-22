import React, { createContext, useContext, useEffect, useState } from "react";
import { authAxios } from "@/utils/authAxios";

export const favContext = createContext();
export const useFavorites = () => useContext(favContext);

const FavContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  let favoriteIds = [];

  const getFavorites = async () => {
    try {
      let { data } = await authAxios("/feedback/favorite/");
      setFavorites(data.results);

      favoriteIds = data.results.map((favorite) => favorite.id);

    } catch (e) {
  
    }
  };

  const addFavorites = async (petId) => {
    try {
      let formData = new FormData();
      formData.append("post", petId);

      let { data } = await authAxios.post("/feedback/favorite/", formData);
  
      favoriteIds.push(data.id);

      getFavorites();
    } catch (e) {

    }
  };

  const deleteFavorites = async (petId, id) => {
    try {
      // Check if favorites is an array
      if (!Array.isArray(favorites)) {
        throw new Error("favorites is not an array");
      }

      let favObj = favorites.find((item) => item.post === petId);


      // Send a DELETE request to the API with the favorite id
      let { data } = await authAxios.delete(`/feedback/favorite/${favObj.id}/`);


      // Remove the deleted favorite from the favorites array
      getFavorites(petId);
    } catch (e) {

    }
  };

  const values = {
    favorites,

    getFavorites,
    addFavorites,
    deleteFavorites,
  };

  return <favContext.Provider value={values}>{children}</favContext.Provider>;
};

export default FavContextProvider;
