import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePets } from "@/context/petsContext";
import add from '../../../styles/addpet.module.scss'
import variables from '../../../styles/variables.module.scss'
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AddPet = () => {
  const router = useRouter();
  const { createPet } = usePets();

  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    let newPet = new FormData();
    newPet.append("name", name);
    newPet.append("age", age);
    newPet.append("description", desc);
    newPet.append("gender", gender);
    newPet.append("category", category);
    newPet.append("owner", owner);
    newPet.append("images", image);

    // const petType =
    //   category === "cats" ? "cats" : category === "dogs" ? "dogs" : "";

    const selectedCategory = category;

    // Выполняем перенаправление в зависимости от выбранной категории
    if (selectedCategory === "cats") {
      window.location.href = "/cats";
    } else if (selectedCategory === "dogs") {
      window.location.href = "/dogs";
    }
    
    createPet(newPet);
  }
  
  return (
    <>
        <div className={variables.banner}>
          <div className={add.add}>
            <h1 className={add.add_text}>Add Pet</h1>
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

        <div className={add.container}>
          <div className={add.input_group}>
            <h2 className={add.h2}>Add pets data</h2>
            <input
            className={add.input}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            <input
              className={add.input}
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              />
            <input
              className={add.input}
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              />
            <input
              className={add.input}
              type="text"
              placeholder="Owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              />
            <div className={add.select_div}>
              <div className={add.div}>
                <select
                  className={add.select}
                  type="text"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  >
                    <option className={add.first} value="" disabled selected>Select Pet Gender</option>
                    <option className={add.option} value="cats">Female</option>
                    <option className={add.option} value="dogs">Male</option>
                  </select>
                  <b/>

            <select
              className={add.select}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              >
              <option className={add.first} value="" disabled selected>Select Pet</option>
              <option className={add.option} value="cats">Cat</option>
              <option className={add.option} value="dogs">Dog</option>
            </select>
              <b/>
            </div>
            <div className={add.div}>
            <label>
            выберите пикчу <b/>
            <input
            className={add.file}
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}/>
              </label> 
              </div>
              </div>
            <button className={add.save_btn} onClick={handleSave}>Save</button>
              </div>
          </div>
    </>
  );
};

export default AddPet;
