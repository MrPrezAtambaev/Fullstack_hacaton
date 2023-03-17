import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePets } from "@/context/petsContext";

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
    <div>
      <h2>Add Pet</h2>
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
        type="text"
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
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />

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
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddPet;
