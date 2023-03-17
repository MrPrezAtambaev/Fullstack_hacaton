import cats from '../../styles/cats.module.scss'
import deta from '../../styles/details.module.scss'

export default function Details() {
    return (
        <div className={cats.cd_banner}>
            <div class={deta.card}> 
                    <img src="https://pbs.twimg.com/media/E3hsoMuVUAMk91Z.jpg" alt="John" className={cats.card_img} />  
            </div>
            <div className={deta.text_div}>
                <h1 className={cats.pet_name}>Масюня</h1>
                <h5 className={deta.pet_desc}> любит пельмени и мятные пряники, является военным преступником и враждует со сфинксом по имени Бингус</h5>
            </div>
        </div>
    )
  }
  