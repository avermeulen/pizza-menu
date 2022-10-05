import Nav from "../components/nav"
import React from "react"
import SpecialsMenu from "../components/SpecialsMenu"
import Footer from "../components/footer"
import ButtonInstance from "../components/ButtonInstance"
import Total from "../components/Total"








export default class Specials extends React.Component {

    constructor(props) {
        super(props)
        this.btn = new ButtonInstance()

    }

    render() {
        return (
            <>
                <Nav />
                <Total />
                <SpecialsMenu />
                <Footer home={this.btn.homeBtn()} cart={this.btn.cartBtn()} />
            </>)

    }

}

