import React from 'react'
import './DrawerToggleToButtton.css'
const DrawerToggleToButtons=props=>(
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line'/>
        <div className='toggle-button-line'/>
        <div className='toggle-button-line'/>
    </button>
)
export default DrawerToggleToButtons;