import vol from '../../styles/volunteers.module.scss'
import home from "../../styles/homepage.module.scss";
import Link from 'next/link';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";



export default function Valonters() {

  return (
    <>
        <div className={home.banner}>
          <div className={vol.become}>
            <h1 className={vol.become_text}>Become a Volunteer</h1>
            <p className={vol.aboutLinks}>
              <Link href="/" legacyBehavior>
                <a className={vol.home}>Home</a>
              </Link>
              <ArrowForwardIcon className={vol.icon} />
              <Link href="/" legacyBehavior>
                <a className={vol.about}>Volunteers</a>
              </Link>
            </p>
          </div>
        </div>
        <div className={vol.help_texts}>
          <h1 className={vol.help_h1}>Want to help? Become a Volunteer</h1>
          <p className={vol.help_p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div className={vol.input_container}>
          <div className={vol.input_group}>
            <label>Имя:</label>
              <input className={vol.input} type='text'placeholder='Имя' />
            <label>Фамилия:</label>  
              <input className={vol.input} type='text'placeholder='Фамилия' />
            <label>Адрес:</label>  
              <input className={vol.input} type='text'placeholder='Ваш адрес' />  
          </div>
          <div className={vol.input_group2}>
          <input className={vol.input_duo} type='text'placeholder='Email' />
          <input className={vol.input_duo} type='text'placeholder='Номер телефона' />
          </div>
            <h5 className={vol.checkbox_h5}>В какие дни вы готовы к волонтерству?</h5>
          <div className={vol.checkboxes}>
            <label>
              <input className={vol.checkbox} type='checkbox'/>
              Пн.
            </label>
            <label>
              <input className={vol.checkbox} type='checkbox'/>
              Вт.
            </label>
            <label>
              <input className={vol.checkbox} type='checkbox'/>
              Ср.
            </label>
            <label>
              <input className={vol.checkbox} type='checkbox'/>
              Чт.
            </label>
            <label>
              <input className={vol.checkbox} type='checkbox'/>
              Пт.
            </label>
            <label>
              <input className={vol.checkbox} type='checkbox'/>
              Сб.
            </label>
            <label>
              <input className={vol.checkbox} type='checkbox'/>
              Вск.
            </label>
          </div>
        </div>
        <h5 className={vol.notes_h5}>Сообщение от волонтёра</h5>
        <div className={vol.notes_container}>
            <textarea className={vol.notes} placeholder="Write message"></textarea>
        </div>
            <button className={vol.notes_btn}>Отправить заявку</button>
    </>
  );
}
