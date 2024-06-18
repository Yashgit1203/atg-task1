const Button = ({ text = "", icon, color,tcolor,icolor,fsize,bor,bo,pad,isize }) => {
  return (
    <div className="btn mx-2" style={{ backgroundColor: color,fontWeight:"600",padding:pad,border:bo,color:tcolor,fontSize:fsize,borderRadius:bor}}>
      {text === "" ? (
        <i className={icon} style={{color:icolor,fontSize:isize}}></i>
      ) : (
        <div>
          <span className="mx-1">{text}</span> <i className={icon} style={{color:icolor,fontSize:isize}}></i>
        </div>
      )}
    </div>
  );
};

export default Button;
