import "./portfolio.css"
import img1 from "../Images/Portfolio-1.png"
import img2 from "../Images/Portfolio-2.png"
import img3 from "../Images/Portfolio-3.png"


const Portfolio = ()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <span className="text-color fs-3">Portfolio</span>
                    <h1 className="fs-1 web-text mt-3 fw-normal">Featured Projects</h1>
                    <div className="w-100 h-100 mb-5 mt-5">
                <div>
                    <img className="img-fluid w-100 rounded-3" src={img1} alt=""></img>
                </div>
                <div className="d-flex gap-1 align-items-center mt-3">
                <img className="img-fluid w-50 rounded-3" src={img2} alt=""></img>
                <img className="img-fluid w-50 rounded-3" src={img3} alt=""></img>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;