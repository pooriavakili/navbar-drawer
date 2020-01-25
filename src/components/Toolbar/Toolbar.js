import React from 'react'
import './Toolbar.css'
import DrawerToggleToButtons from "../SideDrawer/DrawerToggleToButtons";
const Toolbar=props=>(
    <header className='toolbar'>
        <nav className='toolbar-navigation'>
            <div className='toolbar-toggle-button'>
                <DrawerToggleToButtons click={props.drawerClickHandler}/>
            </div>
            <div className='toolbar-logo'><a href="/">the logo</a></div>
            <div className='spacer'/>
            <div className='toolbar-navigation-items'>
                <ul>
                    <li>
                        <a href="/">users</a>
                    </li>
                    <li>
                        <a href="/">products</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

)
export default Toolbar