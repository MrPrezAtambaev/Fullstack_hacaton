import React, { useContext, useEffect, useState } from "react";
import { authContext } from "@/context/authContext";
import { petsContext, usePets } from "@/context/petsContext";
import { useRouter } from "next/router";
import cats from '../../../styles/cats.module.scss'
import dogs from '../../../styles/dogs.module.scss'
import pet from '../../../styles/petlist.module.scss'
import Link from 'next/link'
import Image from "next/image";
import axios from "axios";
import { authAxios } from "@/utils/authAxios";

const PetCard = ({ item }) => {
  const { deletePet, getPets } = useContext(petsContext);
  const { currentUser } = useContext(authContext);
  const router = useRouter();

  const petId = router.query.petId;

  const [liked, setLiked] = useState(
    item.likes.some((like) => like.owner === currentUser.email)
  );

  const handleLike = async (like) => {
    try {
      const response = await authAxios.post(`/post/pets/${item.id}/like/`, {
        is_like: true,
        post: like.post,
        like_id: like.id,
      });
      console.log(response);
      setLiked(true);
      getPets(); // помечаем, что поставили лайк
    } catch (error) {
      console.error(error);
    }
  };
  const handleUnLike = async () => {
    try {
      const response = await authAxios.post(`/post/pets/${item.id}/like/`);
      console.log(response);
      setLiked(false);
      getPets(); // помечаем, что поставили лайк
    } catch (error) {
      console.error(error);
    }
  };

  //! comment
  const [body, setBody] = useState("");
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    // add postId parameter
    try {
      const response = await authAxios.get(`/feedback/comment/`); // add query parameter to filter by post ID
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getComments(item.id); // pass the post ID to getComments
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { body, post: petId, post: item.id }; // add post ID to data object
    try {
      const response = await authAxios.post("/feedback/comment/", data);
      console.log("Comment created:", response.data);
      // Update the comments list only if the new comment is associated with the current post
      if (response.data.post === item.id) {
        setComments([...comments, response.data]);
      }
      setBody("");
      setPost("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <>
      <div>
        {item.images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt={image.name}
            style={{ width: "100px", height: "100px" }}
          />
        ))}
        <h2 style={{ color: "black" }}>Name: {item.name}</h2>
        <h3 style={{ color: "black" }}>Age: {item.age}</h3>
        <h4 style={{ color: "black" }}>Gender: {item.gender}</h4>
        <p style={{ color: "black" }}>Desc: {item.description}</p>
        <p style={{ color: "black" }}>Category: {item.category}</p>
        {liked ? (
          <button onClick={() => handleUnLike(item.likes)}>
            Unlike: {item.likes_count}
          </button>
        ) : (
          <button onClick={() => handleLike(item.likes)}>
            Like: {item.likes_count}
          </button>
        )}
        {item.owner === currentUser.email ? (
          <>
            <button onClick={() => router.push(`/pets/${item.id}/edit`)}>
              Update
            </button>
            <button onClick={() => deletePet(item.id)}>Delete</button>
          </>
        ) : null}
        <div>
          <h3>Comments:</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="owner">Body:</label>
              <input
                type="text"
                id="body"
                name="body"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <button type="submit">Save Comm</button>
          </form>
          {Array.isArray(comments) &&
            comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.body}</p>
                <p>Post: {comment.post}</p>
              </div>
            ))}
        </div>
      </div>
          </div>
    </>
  );
};

export default PetCard;
