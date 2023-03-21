import cats from "../../../styles/cats.module.scss";
import dogs from "../../../styles/dogs.module.scss";
import Link from "next/link";

export default function Dogs() {
  return (
    <>

    <div className={cats.cd_banner}>
      <div className={dogs.card_container}>
        <div className={dogs.card}>
          <Link className={dogs.link_1} href={"/details/:id"} legacyBehavior>
            <a className={dogs.link}>
              <img src="https://welovedoodles.com/wp-content/uploads/2022/02/walter-dog-meme-original-790x1024.jpeg" alt="John" className={dogs.card_img} />  
              <p className={dogs.pet_name}>Уолтэр Уайт</p>
            </a>
          </Link>

        </div>
      </div>
    </>
  );
}
