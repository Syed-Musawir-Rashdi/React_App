import "./skill.css"
import figmaImage from "../Images/Figma-logo.svg"
import Html from "../Images/html.svg"
import thirdImage from "../Images/thirdImage.png"
import nodeImage from "../Images/Node.js_logo.svg"
import Js from "../Images/JS.png"
const Skill =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <span className="text-color fs-3">Skills</span>
                    <h1 className="fs-1 web-text mt-3 fw-normal">My skills and knowledge</h1>
                    <div className="row justify-content-between align-items-center my-5 w-75">
                        <img className="img-fluid w-20 Image" src={figmaImage}></img>
                        <img className="img-fluid w-20 Image" src={Html}></img>
                        <img className="img-fluid w-20 Image" src={thirdImage}></img>
                        <img className="img-fluid w-20 Image" src={Js}></img>
                        <img className="img-fluid w-20 Image" src={nodeImage}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;