import React, { useContext, useEffect, useState } from "react";
import { authContext } from "@/context/authContext";
import { petsContext, usePets } from "@/context/petsContext";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { authAxios } from "@/utils/authAxios";
import { useFavorites } from "@/context/favContext";

const PetCard = ({ item }) => {
  const { deletePet, getPets } = useContext(petsContext);
  const { currentUser } = useContext(authContext);
  const router = useRouter();

  const petId = router.query.petId;

  //! like
  const [liked, setLiked] = useState(
    item.likes.some((like) => like.owner === currentUser.email)
  );

  const handleLike = async (like) => {
    try {
      const res = await authAxios.post(`/post/pets/${item.id}/like/`, {
        is_like: true,
        post: like.post,
        like_id: like.id,
      });
      console.log(res.data.status);
      setLiked(true);
      getPets(); // помечаем, что поставили лайк
    } catch (error) {
      console.error(error);
    }
  };
  const handleUnLike = async () => {
    try {
      const res = await authAxios.post(`/post/pets/${item.id}/like/`);
      console.log(res.data.status);
      setLiked(false);
      getPets(); // помечаем, что поставили лайк
    } catch (error) {
      console.error(error);
    }
  };
  //! like end
  //! comment
  const [body, setBody] = useState("");
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);

  const getComments = async (postId) => {
    try {
      const res = await authAxios.get(`/feedback/comment/`);
      let commentList = Array.isArray(res.data.results)
        ? res.data.results.filter((elem) => elem.post === postId)
        : [];
      setComments(commentList);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getComments(item.id);
  }, []);

  const deleteComment = async (id, postId) => {
    try {
      const { data } = await authAxios.delete(`/feedback/comment/${id}`);
      console.log(data);
      getComments(postId);
    } catch (e) {
      console.log(e);
    }
  };

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
  //! comment end

  //! Favorite

  const { addFavorites, getFavorites, deleteFavorites } = useFavorites();

  useEffect(() => {
    getFavorites();
  }, []);

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
          <div>
            {comments.map((comment) => (
              <div key={comment.id} style={{ color: "white" }}>
                <p>Comm: {comment.body}</p>
                <p>Author: {comment.owner}</p>
                <p>Created at: {comment.created_at}</p>
                {currentUser.email === comment.owner && (
                  <button onClick={() => deleteComment(comment.id, item.id)}>
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => addFavorites(item.id)}>Add Fav</button>
            <button onClick={() => deleteFavorites(item.id)}>Delete Fav</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetCard;
