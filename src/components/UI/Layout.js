import React, {Component} from 'react';
import Aux from './Auxilary';
import GetSidebar from './GetSidebar';
import {Route, BrowserRouter} from "react-router-dom";
import GetProductList from "../../pages/GetProductList";
import GetCategories from "../../pages/GetCategories";
import Home from "../../pages/Home";
import Header from "../../pages/Header";

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

                            <Route path="/products/:id" exact component={GetProductList}/>

                        <Route path="/categories" exact component={GetCategories}/>
                        <Route path="/" exact component={Home}/>
                    </main>
                </Aux>
            </BrowserRouter>
        );
    }
}

export default Layout;