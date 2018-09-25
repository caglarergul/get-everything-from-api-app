import React, {Component} from 'react';
import Aux from './Auxilary';
import GetSidebar from '../../pages/GetSidebar';
import {Route, BrowserRouter} from "react-router-dom";
import GetProductList from "../../pages/GetProductList";
import Home from "../../pages/Home";
import Header from "../../pages/Header";
import GetProductDetails from "../../pages/GetProductDetails";

class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Aux>
                    <header className="container">
                        <Header/>
                    </header>
                    <aside className="col-md-2 col-lg-2">
                        <GetSidebar/>
                    </aside>
                    <main className="col-md-10 col-lg-10">
                        <Route path="/category/:id" exact component={GetProductList}/>
                        <Route path="/product/:id" exact component={GetProductDetails}/>
                        <Route path="/" exact component={Home}/>
                    </main>
                </Aux>
            </BrowserRouter>
        );
    }
}

export default Layout;