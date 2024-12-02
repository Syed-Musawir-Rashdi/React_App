import "./brands.css"
import img1 from "../Images/Google svg.svg"
import img2 from "../Images/Amazon svg.svg"
import img3 from "../Images/Nike svg.svg"
import img4 from "../Images/T-Mobile svg.svg"

const Brands = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="w-100 mt-5">
                        <span className="text-color fs-3">Brands</span>
                        <h1 className="fs-1 web-text mt-3 fw-normal">Work with brands worldwide</h1>
                        <div className="d-flex align-items-center gap-3">
                            <img className="mt-3 w-20 img-fluid" src={img1} alt="Google" />
                            <img className="mt-3 w-20 img-fluid" src={img2} alt="Amazon" />
                            <img className="mt-3 w-20 img-fluid" src={img3} alt="Nike" />
                            <img className="mt-3 w-20 img-fluid" src={img4} alt="T-Mobile" />
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Brands;