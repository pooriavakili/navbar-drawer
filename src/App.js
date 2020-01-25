import React, {useState} from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import './index.css'
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
export default function App() {
    const [drawer, setDrawer] = useState({
        sideDrawerOpen: false
    })
    const drawerToggleClickHandler = () => {
        setDrawer({
            sideDrawerOpen: !drawer.sideDrawerOpen
        })
    };
    const backDropClickHandler = () => {
        setDrawer({
            sideDrawerOpen: false

        })
    }
    let backdrop;
    if (this.state.sideDrawerOpen){
        backdrop=<BackDrop click={backDropClickHandler}/>
    }
    return (
        <div className='App'>
            <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
            <main className='main'>
                <p>this is page content</p>
            </main>
        </div>
    )


}
