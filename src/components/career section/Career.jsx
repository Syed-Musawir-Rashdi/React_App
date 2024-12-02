import "./career.css"
const Career = ()=>{
    return(
        <>
        <section className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <span className="text-color fs-3">Career</span>
                    <h1 className="web-text fs-1 fw-normal">Education & Experience</h1>
                    <div className="pt-4">
                        <span className="fs-6 my-color pt-5">May 2024- Present</span>
                        <p className="web-text fs-3 fw-normal">Full Stack Web Development Course</p>
                    </div>
                    <div className="pt-4">
                        <span className="fs-6 my-color pt-5">August 2023- August 2024</span>
                        <p className="web-text fs-3 fw-normal">11th Standard</p>
                    </div>
                    <div className="pt-4">
                        <span className="fs-6 my-color pt-5">May 2022- May 2023</span>
                        <p className="web-text fs-3 fw-normal">Matriculation</p>
                    </div>
                </div>
            </div>
    </section>
        </>
    )
}

export default Career;