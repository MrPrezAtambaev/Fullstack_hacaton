import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Link from "next/link";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted h-100"
    >
      <section className="h-auto">
        <MDBContainer className="text-center text-md-start ">
          <MDBRow className="pt-4">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                <MDBIcon icon="gem" className="me-3" />
                About US
              </h6>
              <p>
                Few would argue that, despite the advanc ements off eminism over
                the past three decades, women still face a double standard when
                it comes to their behavior. While men’s borderline-inappropriate
                behavior. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                Useful links
              </h6>
              <p>
                <Link href="/" legacyBehavior>
                  <a className="text-reset">Home</a>
                </Link>
              </p>
              <p>
                <Link href="/" legacyBehavior>
                  <a className="text-reset">Service</a>
                </Link>
              </p>
              <p>
                <Link href="/about" legacyBehavior>
                  <a className="text-reset">About</a>
                </Link>
              </p>
              <p>
                <Link href="/" legacyBehavior>
                  <a className="text-reset">Case study</a>
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 mt-5">
              <p>
                <Link href="/" legacyBehavior>
                  <a className="text-reset">Pricing</a>
                </Link>
              </p>
              <p>
                <Link href="/" legacyBehavior>
                  <a className="text-reset">Team</a>
                </Link>
              </p>
              <p>
                <Link href="/" legacyBehavior>
                  <a className="text-reset">Blog</a>
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                Contact US
              </h6>
              <p className="text-light">
                <MDBIcon icon="home" className="me-2 text-light" />
                New York, NY 10012, US
              </p>
              <p className="text-light">
                <MDBIcon icon="envelope" className="me-3 text-light" />
                info@example.com
              </p>
              <p className="text-light">
                <MDBIcon icon="phone" className="me-3 text-light" /> + 01 234
                567 88
              </p>
              <p className="text-light">
                <MDBIcon icon="print" className="me-3 text-light" /> + 01 234
                567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold text-light"></a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
