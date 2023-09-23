<<<<<<< HEAD
import cats from "../../../styles/cats.module.scss";
import Link from "next/link";
import favorite from "../../../styles/favorite.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";

export default function Cats() {
  return (
    <>
      <div className={cats.cd_banner}>
        <div className={cats.card_container}>
          <div class={cats.card}>
            <Link className={cats.link_1} href={"/details/"} legacyBehavior>
              <a className={cats.link}>
                <Image
                  src="https://pbs.twimg.com/media/E3hsoMuVUAMk91Z.jpg"
                  className={cats.card_img}
                  alt=""
                />
                <p className={cats.pet_name}>Масюня</p>
              </a>
            </Link>
            <button className={favorite.fav_btn}></button>
          </div>
        </div>
      </div>
    </>
  );
}
=======
import cats from '../../../styles/cats.module.scss'
import Link from 'next/link'
import favorite from '../../../styles/favorite.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image'



export default function Cats() {
  return (
    <>
      <div className={cats.cd_banner}>
        <div className={cats.card_container}>
          <div class={cats.card}>
            <Link className={cats.link_1} href={"/details/"} legacyBehavior>
              <a className={cats.link}>
                <img src="https://pbs.twimg.com/media/E3hsoMuVUAMk91Z.jpg" className={cats.card_img} />  
                <p className={cats.pet_name}>Масюня</p>
              </a>
            </Link>
                <button className={favorite.fav_btn}></button>
          </div>
        </div>
      </div>
    </>
  )
}
>>>>>>> samat
