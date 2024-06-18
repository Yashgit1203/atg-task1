import Hero from './Hero'
import InnerNav from './InnerNav'
import AllPosts from './AllPosts'
import Sidebar from './Sidebar'
import Button from './Button'
import { useState } from 'react'
const MainContent = () => {

    const [group,setgroup] = useState(false);
    const onclick =()=> {
        setgroup(!group)
        
    }
  return (
    
    <div>
      <Hero group={group} onclick = {onclick}/>
      <div className='container mt-4'>
        <InnerNav group={group} onclick = {onclick}/>
        <div className='m_in'>
        <div className='m_post '>
            <h6 className='fw-bold'> Posts(368) </h6>
        </div>
        <div className='m_filter'>
            <Button text='Filter:All' fsize='0.9rem' color='#F1F3F5' icon="fa-solid fa-caret-down"/>
        </div>
        </div>
        <div className='row mt-4'>
            <div className='col-lg-8 col-sm-12'>
                <AllPosts/>
            </div>
            <div className='col-4'>
                <Sidebar/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
