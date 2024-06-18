import Rectangle2 from "../assets/Rectangle2.png";
import Button from "./Button";
import "./css/Hero.css";
const Hero = ({group,onclick}) => {
    
  return (
    <div className="hero">
    <div className="hero_back">
        <Button icolor="#fff" icon="fa-solid fa-arrow-left" />
    </div>
    <div onClick={onclick} className="hero_btn">
        { group ? <Button icolor="#fff" text="Join Group" fsize='0.8rem' bo='2px solid #fff' tcolor='#fff' /> : <Button icolor="#fff" text="Leave Group" fsize='0.8rem' bo='2px solid #fff' tcolor='#fff' />}
    </div>
      <div className="hero_text">
        <div className="branding">Computer Engineering</div>
        <div className="tag-line">142,765 Computer Engineers follow this</div>
      </div>
      <div className="hero_img">
        <img src={Rectangle2} alt="Hero_Section" />
      </div>
    </div>
  );
};

export default Hero;
