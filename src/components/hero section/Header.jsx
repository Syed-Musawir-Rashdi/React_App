import "./header.css";
import mainImage from "../Images/musawir shah.jpg";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center mt-5 d-flex align-item-center gap-3 flex-column">
            <img className="img-fluid rounded-3 w-75" src={mainImage}></img>
            <button className="btn bg-black border border-bg px-5 text-light fs-5 w-50 ms-5">
              Hire me
            </button>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-3 ms-0">
            <div>
              <span className="text-color pt-0 fs-5">Hello</span>
              <h1 className="text-light fw-normal fs-1 lh-sm pt-1">
                I'm Syed Musawir Rashdi,<br></br> Full Stack Developer and<br></br> only love
                coding
              </h1>
              <p className="fs-5 fw-normal mt-5 my-color">I am so passionate to code and design websites.I specialize in HTML,
              CSS, JavaScript,React to build interesting web applications.</p>
            </div>
            <div className="d-flex justify-content-between text-center w-75 mt-5">
                <div>
                    <h1 className="fs-1 text-color">1+</h1>
                    <span className="my-color fs-5">Year of Experience</span>
                </div>
                <div>
                    <h1 className="fs-1 text-color">10+</h1>
                    <span className="my-color fs-5">Projects</span>
                </div>
                <div>
                    <h1 className="fs-1 text-color">15+</h1>
                    <span className="my-color fs-5">Happy Clients</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
