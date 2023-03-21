import React, { useState, useContext, useEffect } from "react";
import { usePets } from "@/context/petsContext";
import PetCard from "./PetCard";

const PetList = () => {
  const { getPets, pets, pages } = usePets();

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div>
      <h2>Pets</h2>
      {pets && pets.results ? (
        pets.results.map((item) => <PetCard key={item.id} item={item} />)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default PetList;
