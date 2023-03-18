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
      {pets?.map((item) => (
        <PetCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PetList;
