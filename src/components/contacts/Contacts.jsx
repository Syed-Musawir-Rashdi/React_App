import "./contact.css"

const Contact = ()=>{
    return(
        <section className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <span className="text-color pt-1 d-block fs-24">Contact</span>
                    <h1 className="fs-1 web-text mt-3 mb-3 fw-normal">Let's work together!</h1>
                    <p className="my-color fs-5 mt-4">Full name </p>
                    <input type="text" className="pe-5 py-2 bg-black border-0 border-bottom mb-4 web-text w-75" placeholder="Full name"/>
                    <p className="my-color fs-5 mt-3">Email</p>
                    <input type="email" className="pe-5 py-2 bg-black border-0 border-bottom mb-4 web-text w-75" placeholder="INFO@gmail.com"/>
                    <p className="my-color fs-5 mt-3">Phone</p>
                    <input type="number" className="pe-5 py-2 bg-black border-0 border-bottom mb-4 web-text w-75" placeholder="+92-8257858292"/>
                    <p className="my-color fs-5 mt-3">Message</p>
                    <textarea placeholder="Message" className="pe-5 pb-5 bg-black border-0 border-bottom mb-4 web-text w-75"></textarea>
                    <button type="button" className="d-block px-5 btn btn-outline-secondary mb-5">Send</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;