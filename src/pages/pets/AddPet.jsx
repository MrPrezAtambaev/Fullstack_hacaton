import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePets } from "@/context/petsContext";
import add from "../../../styles/addpet.module.scss";
import home from "../../../styles/homepage.module.scss";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AddPet = () => {
  const router = useRouter();
  const { createPet, createImagePet } = usePets();
  const petId = router.query.petId;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [images, setImages] = useState([]);

  function handleSave() {
    if (name.trim() === "") {
      console.log("Please enter a name for your pet.");
      return;
    }

    const newPet = new FormData();
    newPet.append("name", name);
    newPet.append("age", age);
    newPet.append("description", desc);
    newPet.append("gender", gender);
    newPet.append("category", category); // Add the post ID to the form data
    for (let i = 0; i < images.length; i++) {
      newPet.append("images", images[i]);
    }

    createPet(newPet);
    router.push("/pets/PetList/");
  }

  return (
    <>
      <div className={home.banner}>
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
        <h2 className={add.h2} style={{ marginBottom: "30px" }}>Add Pet</h2>
        <div className={add.input_group}>

        <input
        className={add.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <input
        className={add.input}
          type="number"
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
            </div>
        <div className={add.select_div}>
        <div>
          <label>
            Gender:
            <select
            className={add.select}
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option className={add.first} value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Category:
            <select
            className={add.select}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option className={add.first} value="">Select Category</option>
              <option className={add.option} value="cats">Cat</option>
              <option className={add.option} value="dogs">Dog</option>
            </select>
          </label>
        </div>

        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImages([...images, ...e.target.files])}
          multiple
          
          />
        <button className={add.save_btn}   onClick={() => handleSave()}>Save</button>
        {/* Pass the post ID to the handleSave function */}
      </div>
    </>
  );
};

export default AddPet;
