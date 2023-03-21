import React, { useState, useContext, useEffect } from "react";
import { usePets } from "@/context/petsContext";
import PetCard from "./PetCard";
import cats from "../../../styles/cats.module.scss";
import pet from '../../../styles/petlist.module.scss'
// import SideBar from "./SideBar";

const PetList = () => {
  const { getPets, pets, pages } = usePets();
  // const [isSideBar, setIsSideBar] = useState(true);

  useEffect(() => {
    getPets();
  }, []);

  // function changeSideBarStatus() {
  //   setIsSideBar(!isSideBar);
  // };

  // console.log(pets);
  return (
    <div className={cats.cd_banner}>
      {/* <button onClick={changeSideBarStatus}>Filter&Search M</button> */}

      {/* <SideBar isSideBar={isSideBar}/> */}
      <div className={pet.card_container}> 
      {pets && pets.results ? (
        pets.results.map((item) => <PetCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
          )}
          </div>
    </div>
  );
};

export default PetList;
