import Link from "next/link";
import about from "../../styles/about.module.scss";
import home from "../../styles/homepage.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Blog() {
  return (
    <div className={home.banner}>
      <div className={about.text}>
        <div className={about.aboutContent}>
          <h1 className={about.aboutText}>Blog</h1>
          <p className={about.aboutLinks}>
            <Link href="/" legacyBehavior>
              <a className={about.home}>Home</a>
            </Link>
            <ArrowForwardIcon className={about.icon} />
            <Link href="/blog" legacyBehavior>
              <a className={about.about}>Blog</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
