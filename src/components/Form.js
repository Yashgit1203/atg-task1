import Button from "./Button";
import search from '../assets/search.png';
import f_logo from "../assets/f_logo.png";

const Form = ({colsize}) => {
  return (
    <div className="conatiner">
      <div className="row">
      <form className={`${colsize} p-4`}>
        <div class="d-flex">
          <input
            type="text"
            class="form-control custom-input"
            placeholder="First Name"
          />
          <input
            type="text"
            class="form-control custom-input"
            placeholder="Last Name"
          />
        </div>
        <div class="col-lg-12">
          <input
            type="email"
            class="form-control custom-input"
            placeholder="Email"
          />
        </div>
        <div class="col-lg-12">
          <input
            type="password"
            class="form-control custom-input"
            placeholder="Password"
            id="inputPassword4"
          />
        </div>
        <div class="col-lg-12">
          <input
            type="password"
            class="form-control custom-input"
            placeholder="Confirm Password"
            id="inputPassword4"
          />
        </div>

        <div class="col-12 my-3 d-flex justify-content-between">
            <Button text='Create Account' color='#2F6CE5' tcolor="#fff" bor="1.25rem"/>
            <a href="#" style={{color:"#495057"}}>or, Sign In</a>
        </div>

        <div className=" btn mb-2 signUp col-12 d-flex align-items-center justify-content-center" style={{border:"2px solid #D9D9DB"}}>
            <img src={f_logo} alt="fb_logo"/>
            <Button text="Sign up with Facebook"/>
        </div>
        <div className=" mb-2 btn signUp col-12 d-flex align-items-center justify-content-center" style={{border:"2px solid #D9D9DB"}}>
            <img src={search} alt="search_logo"/>
            <Button text="Sign up with Google"/>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <p style={{margin:"0"}}>By signing up, you agree to our Terms &</p>
            <p style={{margin:"0"}}> conditions, Privacy policy</p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Form;
