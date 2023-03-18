import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePets } from "@/context/petsContext";

const AddPet = () => {
  const router = useRouter();
  const { createPet } = usePets();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(null);
  const [owner, setOwner] = useState("");

  function handleSave() {
    let newPet = new FormData();
    newPet.append("name", name);
    newPet.append("age", age);
    newPet.append("description", desc);
    newPet.append("gender", gender);
    newPet.append("category", category);
    newPet.append("owner_id", owner);
    newPet.append("images", image);

    const selectedCategory = category;

    createPet(newPet);
  }

  return (
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
        onChange={(e) => setImage(e.target.files[0])}
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
      <input
        type="text"
        placeholder="Owner ID"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddPet;
