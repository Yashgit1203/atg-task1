import Post from './Post'
import { useState } from 'react'
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle5_2 from "../assets/Rectangle5_2.png";
import Rectangle5_3 from "../assets/Rectangle5_3.png";
import Rectangle3_1 from "../assets/Rectangle3_1.png";
import Rectangle3_2 from "../assets/Rectangle3_2.png";
import Rectangle3_3 from "../assets/Rectangle3_3.png";
import Rectangle3_4 from "../assets/Rectangle3_4.png";
const AllPosts = () => {
    const [posts, setpost] = useState([
        {
            type:"✍️ Article",
            title:"What if famous brands had regular fonts? Meet RegulaBrands!",
            description:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            ph_1:Rectangle5,
            ph_2:Rectangle3_1,
            p_name:"Sarthak Kamra"
        },
        {
            type:"🔬️ Education",
            title:"Tax Benefits for Investment under National Pension Scheme launched by Government",
            description:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            ph_1:Rectangle5_2,
            ph_2:Rectangle3_2,
            p_name:"Sarah West"
        },
        {
            type:"🗓️ Meetup",
            title:"Finance & Investment Elite Social Mixer @Lujiazui",
            descr:"Fri, 12 Oct, 2018",
            location:"Ahmedabad, India",
            icon:"fa-solid fa-calendar-day",
            ph_1:Rectangle5_3,
            ph_2:Rectangle3_4,
            p_name:"Ronal Jones",
            color:"#E56135",
            btn_text:"Visit Website"
        },
        {
            type:"💼️ Job",
            title:"Software Developer",
            descr:"Innovaccer Analytics Private Ltd.",
            ph_2:Rectangle3_3,
            p_name:"Joseph Gray",
            location:"Noida, India",
            icon:"fa-solid fa-briefcase",
            color:"#02B875",
            btn_text:"Apply on Timesjobs"
        }
       
    ])
  return (
    <div>
      {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
    </div>
  )
}

export default AllPosts
