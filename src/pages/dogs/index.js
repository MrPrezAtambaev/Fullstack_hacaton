import Link from "next/link";
import about from "../../../styles/about.module.scss";
import variables from "../../../styles/variables.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Dogs() {
  return (
    <div className={variables.banner}>
      <div className={about.text}>
        <div className={about.aboutContent}>
          <h1 className={about.aboutText}>Dogs</h1>
          <p className={about.aboutLinks}>
            <Link href="/" legacyBehavior>
              <a className={about.home}>Home</a>
            </Link>
            <ArrowForwardIcon className={about.icon} />
            <Link href="/dogs" legacyBehavior>
              <a className={about.about}>Dogs</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
