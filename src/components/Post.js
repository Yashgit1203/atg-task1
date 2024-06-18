import React from "react";
import './css/Post.css';
import Button from "./Button";
const Post = ({post}) => {
  return (
    <div class="card mb-3">
      {post.ph_1 && <img src={post.ph_1} class="card-img-top" alt="..." />}
      <div class="card-body container">
        <h5 className="card-text c-type">{post.type}</h5>
        <h4 class="card-title row">
          <span className="col-8">
            {post.title}
          </span>
          <a className="col-4 text-end dropdown ">
            <div className="btn " data-bs-toggle="dropdown"  data-bs-display="static" aria-expanded="false">
                <i style={{color:"#212529"}} class="fa-solid fa-ellipsis"></i>
            </div>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-start">
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Report</a></li>
    <li><a class="dropdown-item" href="#">Option 3</a></li>
  </ul>
          </a>
        </h4>

        {post.description && <p class="post-desc card-text">
          {post.description}
        </p>}
        {post.location && <div className="d-flex justify-content-between descr col-6">
            <div className="descr_left d-flex " >
                <i className={post.icon} style={{marginRight:"0.5rem"}}></i>
                <h6 className="prof_des">{post.descr}</h6>
            </div>
            <div className="descr_right d-flex">
            <i className="fa-solid fa-location-dot " style={{marginRight:"0.5rem"}}></i>
            <h6 className="prof_des">{post.location}</h6>
            </div>
        </div>}
        { post.location && <div className="d-grid mt-2 mb-4 gap-2 " >
  <button className="btn  " style={{width:"100%",height:"100%",border:"2px solid #A9AEB8",color:post.color}} type="button">{post.btn_text}</button>
</div>}

        <div className="c-footer d-flex justify-content-between ">
          <div className="card-profile d-flex align-items-center " style={{height:"100%"}}>
            <img src={post.ph_2} alt="img" />
            <h6 className="prof_name" style={{marginBottom:"0",paddingLeft:"0.7rem" }}>{post.p_name}</h6>
          </div>
          <p class="card-text text-end">
            <small class="text-body-secondary mx-4 p-views"><i class="fa-regular fa-eye"></i> 1.4k views</small>
            <Button color="#EDEEF0" tcolor="#2D2D2D" icon="fa-solid fa-share-nodes" icolor='#2D2D2D' />
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Post;
