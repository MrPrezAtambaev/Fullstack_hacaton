import Link from "next/link";
import about from "../../styles/about.module.scss";
import variables from "../../styles/variables.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function About() {
  return (
    <>
      <div className={variables.banner}>

        <div className={about.text}>
          <div className={about.aboutContent}>
            <h1 className={about.aboutText}>About Us</h1>
            <p className={about.aboutLinks}>
              <Link href="/" legacyBehavior>
                <a className={about.home}>Home</a>
              </Link>
              <ArrowForwardIcon className={about.icon} />
              <Link href="/" legacyBehavior>
                <a className={about.about}>About</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <section className={about.videoArea}>
        <div className={about.contain}>
          <div className={about.photoArea}>
            <div className={about.padd}>
              <div className={about.picture}>
                <div className={about.overplay}></div>
                <Link
                  href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
                  legacyBehavior
                >
                  <a className={about.playBtn}></a>
                </Link>
              </div>
              <div className={about.desc}>
                <h4 className={about.desc1}>
                  Watch this video how they live here
                </h4>
                <p className={about.desc2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={about.fav}>
        <div className={about.row}>
          <div className={about.favPet}>
            <h2 className={about.select}>Please select your favourite pet</h2>
          </div>
          <div className={about.fillBtn}>
            <button className={about.yellowBtn}>Fill Adoption Form</button>
          </div>
        </div>
      </section>
      <section className={about.homeAbout}>
        <div className={about.fluid}>
          <div className={about.all}>
            <div className={about.leftPage}>
              <img
                src="https://preview.colorlib.com/theme/animalshelter/img/about-img.jpg.webp"
                alt=""
                className={about.img}
              />
            </div>
            <div className={about.rightPage}>
              <h1 className={about.globally}>
                Globally Connected by Large Network
              </h1>
              <h5 className={about.ash}>
                We are here to listen from you deliver exellence
              </h5>
              <p className={about.paragh}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor.
              </p>
              <button className={about.detailsBtn}>get details</button>
            </div>
          </div>
        </div>
      </section>
      <section className={about.valonters}>
        <div className={about.overplayBg}></div>
        <div className={about.cont}>
          <div className={about.rove}>
            <h1 className={about.help}>Want to help? Become a Volunteer</h1>
            <p className={about.lorem}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor.
            </p>
            <div className={about.Btn}>
              <button className={about.pdf}>View pdf details</button>
              <button className={about.register}>Register now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
