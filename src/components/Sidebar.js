import Recomend from './Recomend'
import './css/Sidebar.css';
const Sidebar = () => {
  return (
    <div className='container sidebar'>
        <div className='s_bar border-bottom d-flex justify-content-around mb-6'>
            <i className='fa-solid fa-location-dot'></i>
            <input type="text" style={{border:"none",backgroundColor:"#fff"}} className='mb-3' placeholder='Enter your location'></input>
            <i className='fa-solid fa-xmark'></i>
        </div>
        <div className='d-flex mt-4'>
        <i class="fa-solid fa-circle-exclamation mt-2 px-3"></i>
        <p>Your location will help us serve better and extend a personalised experience.</p>
        </div>
        <Recomend/>
    </div>
  )
}

export default Sidebar
