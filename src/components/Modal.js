import "./css/Modal.css";
import Form from "./Form";
import Group3 from "../assets/Group_3.png";
const Modal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
   
      <div className="modal-dialog modal-dialog-centered modal-lg ">
      <div className="d-flex flex-column align-items-end">
      <button
            type="button"
            className="btn-close trans mb-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        <div className="modal-content">
          
          <div style={{backgroundColor:"#EFFFF4"}} className="modal-title p-4">
            <h6 style={{color:"#008A45"}}>
              Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </h6>
          </div>
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                Create Account
            </h1>
            <p style={{color:"#3D3D3D"}}>
                 Already have an account? <span style={{color:"#2F6CE5"}}>Sign In</span>
            </p>
          </div>
          <div className="modal-body row">
                <div className="modal_form_l col-6">
                    <Form />
                </div>
                <div className="modal_form_r  col-6">
                    <img src={Group3}  alt="form_img"/>
                    <p style={{fontSize:"1rem",textAlign:"center"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
          </div>    
        </div>
      </div>
      </div>
    </div>
  );
};

export default Modal;
