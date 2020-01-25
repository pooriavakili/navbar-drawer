import React,{Component} from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import './index.css'
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
export default class App extends Component {
    state={
      sideDrawerOpen:false
    };
    drawerToggleClickHandler=()=>{
this.setState((prevState)=>{
    return{sideDrawerOpen: !prevState.sideDrawerOpen}
})
    };
    backDropClickHandler=()=>{
        this.setState({
            sideDrawerOpen:false
        })
    }
  render() {
      let backdrop;
      if (this.state.sideDrawerOpen){
          backdrop=<BackDrop click={this.backDropClickHandler}/>
      }
    return (
        <div className='App'>
<Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
           <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop }
<main className='main'>
    <p>this is page content</p>
</main>
        </div>
    );
  }
}
