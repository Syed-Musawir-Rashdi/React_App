import "./testimonial.css"
import img from "../Images/testimonial-img.png"

const Testimonial = ()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <span className="text-color fs-3">Testimonial</span>
                <h1 className="fs-1 web-text mt-3 fw-normal">Trusted by many clients</h1>
                <div className="w-100 h-75 mb-3">
                <div className="w-100 h-100 mt-3 p-5 border border-light rounded-5">
                    <div className="d-flex align-items-center gap-4">
                        <img src={img} alt=""></img>
                        <div>
                            <h5 className="web-text fs-5 fw-semibold">Jimmy Fermin</h5>
                            <p className="web-text fs-5 fw-lighter">Software Engineer</p>
                        </div>
                    </div>
                    <p className="mt-5 ms-5 web-text fs-4 fw-normal">“Musawir has demonstrated outstanding performance in his work. He is not only creative in finding innovative solutions, but also efficient in delivering high-quality results.”</p>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;