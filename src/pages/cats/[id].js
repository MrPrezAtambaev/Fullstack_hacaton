import cats from '../../../styles/cats.module.scss'
import Link from 'next/link'

export default function Cats() {
  return (
    <>
      <div className={cats.cd_banner}>
        <div className={cats.card_container}>
          <div class={cats.card}>
            <Link className={cats.link_1} href={"/details/"} legacyBehavior>
              <a className={cats.link}>
                <img src="https://pbs.twimg.com/media/E3hsoMuVUAMk91Z.jpg" alt="John" className={cats.card_img} />  
                <p className={cats.pet_name}>Масюня</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
