import AuthContextProvider from "@/context/authContext";
import Layout from "../components/layout";
import Navbar from "../components/header";
import home from "../../styles/homepage.module.scss";
import Script from "next/script";
import Link from "next/link";
import about from "../../styles/about.module.scss";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <AuthContextProvider>
        <div className={home.banner}></div>
        <div className={home.container}>
          <div className={home.cat_div}>
            <Link href={"/cats"} legacyBehavior>
              <a>
                <Image
                  src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className={home.cat_img}
                  alt=""
                />
              </a>
            </Link>
            <span className={home.text}>Котики</span>
          </div>
          <div className={home.dog_div}>
            <Link href={"/dogs"} legacyBehavior>
              <a>
                <Image
                  src="https://www.rover.com/blog/wp-content/uploads/2014/08/shetland-sheepdog-smarted-dog-breeds.jpg"
                  className={home.dog_img}
                  alt=""
                />
              </a>
            </Link>
            <span className={home.text}>Пёсики</span>
          </div>
        </div>
        <section className={home.asdas}>
          {/* пустая статичная секция чтобы сделать пробел */}
        </section>
        <div className={home.details}>
          <div className={home.left_col}>
            <Image
              src="https://media.tenor.com/WyyEX4PmF5kAAAAC/randowis.gif"
              className={home.details_img}
              alt=""
            />
          </div>
          <div className={home.right_col}>
            <h1>Possum</h1>
            <p>
              Хинкали непременно едятся «руками», они не разрезаются столовыми
              приборами, чтобы находящийся внутри бульон не вытекал на тарелку.
              Изделие нужно взять за «хвостик\ножку», перевернуть мешочек
              кверху, надкусить и первым делом выпить из него бульон.
            </p>
            <button className={home.detail_btn}>Детали</button>
          </div>
        </div>
        <section className={about.valonters}>
          <div className={about.overplayBg}></div>
          <div className={about.cont}>
            <div className={about.rove}>
              <h1 className={about.help}>Want to help? Become a Volunteer</h1>
              <p className={about.lorem}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor.
              </p>
              <div className={about.Btn}>
                <button className={about.pdf}>View pdf details</button>
                <button className={about.register}>Register now</button>
              </div>
            </div>
          </div>
        </section>
      </AuthContextProvider>
    </>
  );
}
