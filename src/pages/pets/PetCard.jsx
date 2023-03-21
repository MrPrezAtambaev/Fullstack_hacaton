import React, { useContext } from "react";
import { authContext } from "@/context/authContext";
import { petsContext } from "@/context/petsContext";
import { useRouter } from "next/router";
import cats from '../../../styles/cats.module.scss'
import dogs from '../../../styles/dogs.module.scss'
import pet from '../../../styles/petlist.module.scss'
import Link from 'next/link'



const PetCard = ({ item }) => {
  const { deletePet } = useContext(petsContext);
  const { currentUser } = useContext(authContext);
  const router = useRouter();

  const petId = router.query.petId;

  return (
    <>
    <div className={pet.card_container}>

      <div className={pet.card}>
        <h2 style={{ color: "black" }} className={pet.petname}>{item.name}</h2>
        <div className={pet.text_column}>
          <div className={pet.left_column}>
        <Link className={pet.link_1} href={"/details"} legacyBehavior>
        <a className={pet.link}>

        <img src={item.images} alt="" />
        </a>
        </Link>
          </div>
          <div className={pet.right_column}>
            <h6 style={{ color: "black" }}>Age: {item.age}</h6>
            <h6 style={{ color: "black" }}>Gender: {item.gender}</h6>
            <h6 style={{ color: "black" }}>Category: {item.category}</h6><hr/>
            <p style={{ color: "black" }}>{item.description}</p> <hr />
            
        {item.owner === currentUser.email ? (
          <>
            <button onClick={() => router.push(`/pets/${item.id}/edit`)}>
              Update
            </button>
            <button onClick={() => deletePet(item.id)}>Delete</button>
          </>
        ) : null}
          </div>
        </div>
        {/* <p style={{ color: "black" }}>Owner: {item.owner}</p> */}
      </div>
          </div>
    </>
  );
};

export default PetCard;
