import React, { useContext } from "react";
import { authContext } from "@/context/authContext";
import { petsContext } from "@/context/petsContext";
import { useRouter } from "next/router";
import Image from "next/image";

const PetCard = ({ item }) => {
  const { deletePet, getPets } = useContext(petsContext);
  const { currentUser } = useContext(authContext);
  const router = useRouter();

  const petId = router.query.petId;

  return (
    <>
      <div>
        {item.images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt={image.name}
            style={{ width: "100px", height: "100px" }}
          />
        ))}
        <h2 style={{ color: "black" }}>Name: {item.name}</h2>
        <h3 style={{ color: "black" }}>Age: {item.age}</h3>
        <h4 style={{ color: "black" }}>Gender: {item.gender}</h4>
        <p style={{ color: "black" }}>Desc: {item.description}</p>
        <p style={{ color: "black" }}>Category: {item.category}</p>
        <button onClick={() => getPets(item.id)}>
          Like: {item.likes_count}
        </button>
        {item.owner === currentUser.email ? (
          <>
            <button onClick={() => router.push(`/pets/${item.id}/edit`)}>
              Update
            </button>
            <button onClick={() => deletePet(item.id)}>Delete</button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default PetCard;
