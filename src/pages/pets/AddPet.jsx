import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePets } from "@/context/petsContext";
import add from '../../../styles/addpet.module.scss'
import variables from '../../../styles/variables.module.scss'
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
    <div>
      <h2 style={{ marginBottom: "30px" }}>Add Pet</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImages([...images, ...e.target.files])}
        multiple
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Select Category</option>
            <option value="cats">Cat</option>
            <option value="dogs">Dog</option>
          </select>
        </label>
      </div>
      <button onClick={() => handleSave()}>Save</button>
      {/* Pass the post ID to the handleSave function */}
    </div>
    </>
  );
};

export default AddPet;
