import Link from "next/link";
import about from "../../styles/about.module.scss";
import variables from "../../styles/variables.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import contact from "../../styles/contact.module.scss";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  const mapStyles = {
    height: "70vh",
    width: "80%",
    marginLeft: "10%",
    marginBottom: "20px",
    marginTop: "20px",
    marginRight: "20%",
  };

  const defaultCenter = {
    lat: 42.941767,
    lng: 74.591825,
  };
  return (
    <>
      <div className={variables.banner}>
        <div className={about.text}>
          <div className={about.aboutContent}>
            <h1 className={about.aboutText}>Contact</h1>
            <p className={about.aboutLinks}>
              <Link href="/" legacyBehavior>
                <a className={about.home}>Home</a>
              </Link>
              <ArrowForwardIcon className={about.icon} />
              <Link href="/contact" legacyBehavior>
                <a className={about.about}>Contact</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <section className={contact.sect}>
        <LoadScript googleMapsApiKey="AIzaSyCfr2nJWlKRb7loxHs-gtxbYqMJVtNFrKc">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <Marker position={{ lat: 42.941767, lng: 74.591825 }} />
          </GoogleMap>
        </LoadScript>
        <div className={contact.all}>
          <div className={contact.address}>
            <div className={contact.single}>
              <CottageOutlinedIcon className={contact.icon} />
              <div className={contact.details}>
                <h5 className={contact.h5}>Бишкек, СВЕРДЛОВСКИЙ РАЙОН,</h5>
                <p className={contact.p}>ул. Бельская, дом 8 кв. 9</p>
              </div>
            </div>
            <div className={contact.single}>
              <LocalPhoneOutlinedIcon className={contact.icon} />
              <div className={contact.details}>
                <h5 className={contact.h5}>+996 707 960-614</h5>
                <p className={contact.p}>Пон по Пят 9 до 18 часа</p>
              </div>
            </div>
            <div className={contact.single}>
              <EmailOutlinedIcon className={contact.icon} />
              <div className={contact.details}>
                <h5 className={contact.h5}>Kainar@mail.com</h5>
                <p className={contact.p}>
                  Отправьте нам свой запрос в любое время!
                </p>
              </div>
            </div>
          </div>
          <div className={contact.form}>
            <form className={contact.group}>
              <div className={contact.row}>
                <div className={contact.left}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={contact.input}
                  />
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className={contact.input}
                  />
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    className={contact.input}
                  />
                </div>
                <div className={contact.right}>
                  <textarea
                    className={contact.textarea}
                    placeholder="Message"
                  />
                </div>
                <div className={contact.btn}>
                  <button className={contact.send}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
