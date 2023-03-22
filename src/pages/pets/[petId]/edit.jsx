import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { usePets } from "@/context/petsContext";
import add from "../../../../styles/addpet.module.scss";
import variables from "../../../../styles/variables.module.scss";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { authAxios } from "@/utils/authAxios";

const fetchPetById = async (id) => {
  const { data } = await authAxios.get(`/post/pets/${id}/`);
  return data;
};

const fetchPetImageById = async (id) => {
  const { data } = await authAxios.get(`/post/pet_image/${id}/`);
  return data;
};

const updatePetImageById = async (id, image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await authAxios.patch(`/post/pet_image/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

const updatePetById = async (id, pet) => {
  const formData = new FormData();

  Object.entries(pet).forEach(([key, value]) => {
    if (key === "images") {
      value.forEach((image) => {
        if (image.id) {
          formData.append(`images[id]`, image.id);
        } else {
          formData.append(`image`, image.file);
        }
      });
    } else {
      formData.append(key, value);
    }
  });

  const { data } = await authAxios.patch(`/post/pets/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log({ pet, data });

  return data;
};

const EditPet = () => {
  const { getPets } = usePets();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pet, setPet] = useState(null);

  const router = useRouter();
  const petId = router.query.petId;

  useEffect(() => {
    if (petId) {
      setLoading(true);
      fetchPetById(petId)
        .then(setPet)
        .catch(setError)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [petId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updatePetById(petId, pet)
      .then((data) => {
        console.log("update pet success", data);

        // check if we have an images object and update the pet image if it exists
        if (pet.images) {
          const petImageId = pet.images[0].id;
          updatePetImageById(petImageId, pet.images[0].image)
            .then((data) => {
              console.log("update pet image success", data);
            })
            .catch((error) => {
              console.error("update pet image error", error);
            });
        }
      })
      .catch((error) => {
        console.error("update pet error", error);
      })
      .finally(() => {
        setLoading(false);
        getPets();
      });
  };
  const handleInp = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleImageInp = (e) => {
    const imageFile = e.target.files[0];
    setPet({ ...pet, images: [{ id: pet.images[0]?.id, file: imageFile }] });
  };

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        {error.response?.data
          ? JSON.stringify(error.response.data)
          : error.message ?? error.toString()}
      </h1>
    );
  }

  if (!pet) return <h1 style={{ color: "red" }}>Не найдено!</h1>;

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
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: "30px" }}>Edit Pet</h2>
      <input type="text" name="name" onChange={handleInp} value={pet.name} />
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageInp}
      />
      <input
        type="text"
        name="description"
        onChange={handleInp}
        value={pet.description}
      />
      <input type="number" name="age" onChange={handleInp} value={pet.age} />
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
      <button type="submit">Save changes</button>
    </form>

  </>
  );
};

export default EditPet;
