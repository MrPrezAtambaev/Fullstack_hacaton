import React, { useContext } from "react";
import { authContext } from "@/context/authContext";
import { petsContext } from "@/context/petsContext";
import { useRouter } from "next/router";

const PetCard = ({ item }) => {
  const { deletePet } = useContext(petsContext);
  const { setCurrentUser } = useContext(authContext);
  const router = useRouter();

  const petId = router.query.petId;

  return (
    <>
      <div>
        <h2 style={{ color: "black" }}>Name: {item.name}</h2>
        <img src={item.images} alt="" />
        <h3 style={{ color: "black" }}>Age: {item.age}</h3>
        <h4 style={{ color: "black" }}>Gender: {item.gender}</h4>
        <p style={{ color: "black" }}>Desc: {item.description}</p>
        <p style={{ color: "black" }}>Category: {item.category}</p>
        <p style={{ color: "black" }}>Owner: {item.owner}</p>
        <button onClick={() => router.push(`/pets/${item.id}/edit`)}>
          Update
        </button>
        <button onClick={() => deletePet(item.id)}>Delete</button>
      </div>
    </>
  );
};

export default PetCard;
