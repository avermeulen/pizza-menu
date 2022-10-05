import Nav from "../components/nav"
import React, { Component } from "react"
import Main from "../components/main"
// import Footer from "../components/footer"
import ButtonInstance from "../components/ButtonInstance"


class Home extends Component {

    constructor(props) {
        super(props)
        this.btn = new ButtonInstance()

    }

    render() {
        return (
            <>
                <Nav />
                <Main />
                {/* <Footer home={this.btn.homeBtn()} cart={this.btn.cartBtn()} /> */}
                

                </>)

    }

}

                export default Home;