import React, { Component } from "react";
// import Total from "./Total"
// import Service from "../Service"
import ButtonInstance from "./ButtonInstance";
import { Link } from "react-router-dom";
import SpecialsMenu from "./SpecialsMenu";
import Home from "../pages/home";



class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggle: false, tot: this.props.tot, menu_toggle: false }
    this.btn = new ButtonInstance()
    this.addMenuOverlay = this.addMenuOverlay.bind(this);
    this.removeMenuOverlay = this.removeMenuOverlay.bind(this)
    this.close_menu_frame = this.close_menu_frame.bind(this)
    this.open_menu_frame = this.open_menu_frame.bind(this);

  }
  close_menu_frame() {
    this.setState({ menu_toggle: false });

  }
  open_menu_frame() {
    this.setState({ menu_toggle: true });
  }


  removeMenuOverlay() {
    this.setState({ isToggle: !this.state.isToggle });
  }

  addMenuOverlay() {

    this.setState({ isToggle: !this.state.isToggle });
  }
  render() {

    return (
      <>
        <div className="menu_frame" style={{ display: this.state.menu_toggle ? "flex" : "none" }}>
            <div className="menu_close_x" onClick={this.close_menu_frame}>X</div>
            <Link to={"/"} element={<Home />}>
          <div className="menu_flex_r" style={{ minWidth: "130" }}>
              <img style={{ marginLeft: 10, marginRight: 5 }} src="./home.svg" alt="" />
              <p className="menu_typo">Home</p>
          </div>
            </Link>


          <Link to={"/specials"} element={<SpecialsMenu />}>
            <div className="menu_flex_r">
              <img style={{ marginLeft: 10, marginRight: 5 }} src={"/specials.svg"} alt="" /><p className="menu_typo">Specials</p>
            </div>
          </Link>

          <div className="menu_flex_r">
            <img style={{ marginLeft: 10, marginRight: 5 }} src="./contact.svg" alt="" /><p className="menu_typo">Contact</p>
          </div>
          <div className="menu_flex_r">
            <img style={{ marginLeft: 10, marginRight: 5 }} src="./locator.svg" alt="" /><p className="menu_typo">Locator</p>
          </div>
          <div className="menu_flex_r">
            <img style={{ marginLeft: 10, marginRight: 5 }}  src="/about.svg" alt="" /><p className="menu_typo">About</p>
          </div>
        </div><nav>
          <div onClick={this.open_menu_frame} className="hambuger_container">
            <div className="hamburger_menue">
            </div>
            <div className="hamburger_menue">
            </div>
            <div className="hamburger_menue">
            </div>
            <div className="hamburger_menue">
            </div>
          </div>
          <h1 className="pizza_title">Pizza Cave <img className="pizza_logo" src="./pizza.png" alt="" /></h1>

          {this.state.tot}
        </nav></>
    )
  }
}

export default Nav;