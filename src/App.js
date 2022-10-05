import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from "./pages/Test";
import './App.css';
import Confirmation from "./pages/confirmation"
import SpecialsMenu from './components/SpecialsMenu';
import Cart from './pages/Cart';



import Home from './pages/home';
import Thanks from './pages/thanks';
import ErrorMsg from './pages/ErrorMsg';
import Ctx from './Ctx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0.00 }

    // this.gtot =  AddRemove()

  }
  render() {
    return (

      <BrowserRouter>
        <Ctx>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Cart/:total/:order" element={<Cart />} />
            <Route exact path="/Specials" element={<SpecialsMenu />} />

            <Route exact path='/thanks' element={<Thanks />} />
            <Route exact path='/test' element={<Test />} />
            <Route exact path='/ErrorMsg' element={<ErrorMsg />} />
            <Route exact path='/Ctx' element={<Ctx />} />
            <Route exact path='/Confirmation' element={<Confirmation />} />
          </Routes>
        </Ctx>

      </BrowserRouter>

    )
  }
}

export default App;



