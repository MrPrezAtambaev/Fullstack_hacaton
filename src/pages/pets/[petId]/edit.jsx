import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { usePets } from "@/context/petsContext";
import add from '../../../../styles/addpet.module.scss';
import variables from '../../../../styles/variables.module.scss';
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const EditPet = () => {
  const { getOnePet, onePet, saveEditedPet } = usePets();
  const [pets, setPet] = useState(onePet);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getOnePet(id);
  }, [id]);

  useEffect(() => {
    setPet(onePet);
  }, [onePet]);

  const handleInp = (e) => {
    let obj = {
      ...pets,
      [e.target.name]: e.target.value,
    };
    setPet(obj);
  };

  return (
    <>
            <div className={variables.banner}>
          <div className={add.add}>
            <h1 className={add.add_text}>Edit Pet Data</h1>
            <p className={add.aboutLinks}>
              <Link href="/" legacyBehavior>
                <a className={add.home}>Home</a>
              </Link>
              <ArrowForwardIcon className={add.icon} />
              <Link href="/" legacyBehavior>
                <a className={add.about}>Add Pet</a>
              </Link>
            </p>
          </div>
        </div>
      {pets ? (
        <>
          <h2>Edit Product</h2>
          <input
            type="text"
            name="name"
            onChange={handleInp}
            value={pet.name}
          />
          <input
            type="text"
            name="description"
            onChange={handleInp}
            value={pet.desc}
          />
          <input type="text" name="age" onChange={handleInp} value={pet.age} />
          <input
            type="text"
            name="gender"
            onChange={handleInp}
            value={pet.gender}
          />
          <input
            type="text"
            name="category"
            onChange={handleInp}
            value={pet.category}
          />
          <input
            type="text"
            name="owner"
            onChange={handleInp}
            value={pet.owner}
          />

          <button
            onClick={() => {
              saveEditedPet(pet);
              router.push("/pets/PetList");
            }}
          >
            Save changes
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditPet;
