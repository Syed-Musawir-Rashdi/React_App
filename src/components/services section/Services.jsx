import "./services.css"

const Services =()=>{
    return(
        <>
            <section className="container my-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                        <span className="text-color pt-1 d-block fs-3">Services</span>
                        <h1 className="fs-1 web-text mt-3 fw-normal">My expertise and services</h1>
                        <div className="row gap-4">
                            <div className="col-11 col-sm-11 col-md-3 col-lg-3 p-3 rounded-5 border border-secondary border-bg text-center">
                                <div>
                                <h1 className="fs-5 web-text">Front-end</h1>
                                <p className="fs-5 my-color">15+ Projects</p>
                                </div>
                            </div>
                            <div className="col-11 col-sm-11 col-md-3 col-lg-3 p-3 rounded-5 border border-secondary border-bg text-center">
                                <div>
                                <h1 className="fs-5 web-text">Back-end</h1>
                                <p className="fs-5 my-color">10+ Projects</p>
                                </div>
                            </div>
                            <div className="col-11 col-sm-11 col-md-3 col-lg-3 p-3 rounded-5 border border-secondary border-bg text-center">
                                <div>
                                <h1 className="fs-5 web-text">Full Stack</h1>
                                <p className="fs-5 my-color">5+ Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;