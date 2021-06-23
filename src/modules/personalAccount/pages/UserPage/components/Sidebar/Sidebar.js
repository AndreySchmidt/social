import React from 'react'
import MenuBlock from './../MenuBlock/MenuBlock'
import AdsList from './../AdsList/AdsList'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MenuBlock />
      <AdsList />
    </div>
  )
}

export default Sidebar
