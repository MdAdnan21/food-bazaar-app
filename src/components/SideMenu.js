import React from 'react'

const SideMenu = ({show, setShowSideMenu}) => {

  return (
    <div className='absolute h-screen shadow-lg'>
      <h1>Side Menu</h1>
      <button onClick={setShowSideMenu(!show)}>Close</button>
    </div>
  )
}

export default SideMenu
