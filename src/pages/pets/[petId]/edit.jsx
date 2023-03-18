import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { usePets } from "@/context/petsContext";

const EditPet = () => {
  const { getOnePet, onePets, saveEditedPet } = usePets();
  const [pets, setPets] = useState(onePets);

  const router = useRouter();
  const petId = router.query.petId;
  // const { id } = router.query;

  useEffect(() => {
    if (petId) {
      getOnePet(petId);
    }
  }, []);

  useEffect(() => {
    if (onePets) {
      setPets(onePets);
    }
    console.log(onePets);
  }, [onePets]);

  useEffect(() => {
    console.log(pets);
  }, [pets]);

  const handleInp = (e) => {
    if (e.target.name === "image") {
      let reader = new FileReader();
      reader.onload = (event) => {
        let obj = {
          ...pets,
          images: [
            {
              ...pets.images[0],
              image: event.target.result,
            },
          ],
        };
        setPets(obj);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      let obj = {
        ...pets,
        [e.target.name]: e.target.value,
      };
      setPets(obj);
    }
  };

  return (
    <>
      {pets ? (
        <>
          <h2 style={{ marginBottom: "30px" }}>Edit Pet</h2>
          <input
            type="text"
            name="name"
            onChange={handleInp}
            value={pets.name}
          />
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleInp}
          />
          <input
            type="text"
            name="description"
            onChange={handleInp}
            value={pets.description}
          />
          <input
            type="number"
            name="age"
            onChange={handleInp}
            value={pets.age}
          />
          <input
            type="text"
            name="gender"
            onChange={handleInp}
            value={pets.gender}
          />
          <input
            type="text"
            name="category"
            onChange={handleInp}
            value={pets.category}
          />
          <button
            onClick={() => {
              saveEditedPet(pets);
              // router.push("/pets/PetList");
            }}
          >
            Save changes
          </button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default EditPet;
