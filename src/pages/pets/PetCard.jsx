import React, { useContext, useEffect, useState } from "react";
import { authContext } from "@/context/authContext";
import { petsContext, usePets } from "@/context/petsContext";
import { useRouter } from "next/router";
import cats from '../../../styles/cats.module.scss'
import dogs from '../../../styles/dogs.module.scss'
import modal from '../../../styles/modal.module.scss'
import pet from '../../../styles/petlist.module.scss'
import Link from 'next/link'
import Image from "next/image";
import axios from "axios";
import { authAxios } from "@/utils/authAxios";
//Mui imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//mui icons
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

//other icons
import gender from '../../../public/icons/gender.png'

import { useFavorites } from "@/context/favContext";

const PetCard = ({ item }) => {
  const { deletePet, getPets } = useContext(petsContext);
  const { currentUser } = useContext(authContext);
  const router = useRouter();
  //mui
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
    <div className={pet.card_container}>

      <div className={pet.card}>
        {item.images.map((image) => (
          <img
          className={pet.card_img}
          key={image.id}
          src={image.image}
          alt={image.name}

          />
          ))}
        <h2 style={{ color: "black" }}>{item.name}</h2>
        <p style={{ color: "black" }}>Desc: {item.description}</p>
        <div className={pet.first_column}>
        <h6 style={{ color: "black" }} className={pet.h6_first}>Age: {item.age}</h6>
        {/* <div className={pet.vl}></div> */}
        <h6 style={{ color: "black" }} className={pet.h6_second}><Image src='/icons/gender.png' width={24} height={24}/> {item.gender}</h6>
        <h6 style={{ color: "black" }}><Image src='/icons/pets.png' width={24} height={24}/> {item.category}</h6>
        </div> 

        <div className={pet.btn_group}> 
        {liked ? (
          <div>
            <ThumbDownAltIcon onClick={() => handleUnLike(item.likes)} 
            />
             {item.likes_count}
          </div>
        ) : (
          <div>
          <ThumbUpOffAltIcon  onClick={() => handleLike(item.likes)}
          />
             {item.likes_count}
          </div>
        )}
        {item.owner === currentUser.email ? (
          <>
            <>
            <SettingsIcon  onClick={() => router.push(`/pets/${item.id}/edit`)}/>   
            </>
            <>
            <DeleteIcon  onClick={() => deletePet(item.id)}/>
            </>
          </>
        ) : null}

          <div>
            <>
        <ChatBubbleOutlineIcon  onClick={handleOpen}/>
            </>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
                  <Box sx={style} className={modal.modal}>
                  <div>
                    <h3 className={modal.title}>Comments:</h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="owner"></label>
                        <input
                          type="text"
                          id="body"
                          name="body"
                          required
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          />
                      <button type="submit"><img src="/icons/send.png" width={24} height={24}/></button>
                      </div>
                    </form>
                    <div>
                            {comments.map((comment) => (
                              <div className={modal.comment_text}key={comment.id} style={{ color: "black" }}>
                                <p className={modal.commentP}><img src="/icons/user.png"/>: {comment.owner}</p>
                                <p className={modal.commentP}><img src="/icons/comm.png"/>: {comment.body}</p>
                                <p className={modal.commentP}><img src="/icons/clock.png"/>: {comment.created_at}</p>
                              </div>
                            ))}
                    </div>

                  </div>
                  </Box>
                </Modal>
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
