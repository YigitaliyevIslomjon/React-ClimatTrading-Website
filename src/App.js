import React from 'react'
import Navber from './components/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import Arenda from './components/Arenda/Arenda'
import { Switch, Route } from "react-router-dom";
import ProductRent from './components/ProductRent/ProductRent'
import Sales from './components/Sales/Sale'
import Service from './components/Service/index'
import AboutCopany from './components/AboutCompany/index'
import Contact from './components/Contact/Contact'
function App() {
    return (
        <div>
            <Navber/>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/rent'>
                        <Arenda/>
                    </Route>
                    <Route exact path='/product'>
                        <ProductRent/>
                    </Route>
                    <Route exact path='/sales'>
                        <Sales/>
                    </Route>
                    <Route exact path='/service'>
                        <Service/>
                    </Route>
                    <Route exact path='/about'>
                        <AboutCopany/>
                    </Route>
                    <Route exact path='/contact'>
                        <Contact/>
                    </Route>
                </Switch>
            <Footer/>       
            
        </div>
    )
}

export default App;
