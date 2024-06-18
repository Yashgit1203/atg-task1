import React from 'react'

import Button from './Button';
const R_profile = ({suggestion}) => {
  return (
    <div className='d-flex px-2 justify-content-between mb-4'>
      <div className='d-flex align-items-center'>
      <img src={suggestion.r_profile} alt='img'/>
      <h6 className='mx-2'>{suggestion.r_name}</h6>
      </div>
        <Button text='Follow' color='#EDEEF0'/>
    </div>
  )
}

export default R_profile
