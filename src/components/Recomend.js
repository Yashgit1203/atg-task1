import React from 'react'
import R_profile from './R_profile'
import Rectangle6 from '../assets/Rectangle6.png';
import Rectangle6_1 from '../assets/Rectangle6_1.png';
import Rectangle6_2 from '../assets/Rectangle6_2.png';
import Rectangle6_3 from '../assets/Rectangle6_3.png';
import { useState } from 'react'
const Recomend = () => {
    const [suggetions, setsuggetions] = useState([
        {
            r_profile: Rectangle6,
            r_name:"Leisure"
        },
        {
            r_profile: Rectangle6_1,
            r_name:"Philosophy"
        },
        {
            r_profile: Rectangle6_2,
            r_name:"MBA"
        },
        {
            r_profile: Rectangle6_3,
            r_name:"Activism"
        }
    ])
  return (
    <div className='container mt-4'>
        <div className='title d-flex'>
        <i class="fa-solid fa-thumbs-up mt-1 px-2"></i> <p>RECOMMENDED GROUPS</p>
        </div>
        {suggetions.map((suggestion,index)=>(
            <R_profile key={index} suggestion={suggestion}/>
        ))}
    </div>
  )
}

export default Recomend
