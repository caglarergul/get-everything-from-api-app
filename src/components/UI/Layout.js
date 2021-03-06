import React, {Component} from 'react';
import Aux from './Auxilary';
import GetSidebar from '../../pages/GetSidebar';
import {Route, BrowserRouter} from "react-router-dom";
import GetProductList from "../../pages/GetProductList";
import Home from "../../pages/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GetProductDetails from "../../pages/GetProductDetails";
import GetSearchResults from "../../pages/GetSearchResults";
import Contact from "../../pages/Contact";
import BankAccount from "../../pages/BankAccount";

class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Aux>

                    <Header/>

                    <div className="body-content outer-top-vs" id="top-banner-and-menu">
                        <div className="container-fluid">
                            <div className="row single-product">
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 sidebar">
                                    <GetSidebar/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10">
                                    <Route path="/category/:id" exact component={GetProductList}/>
                                    <Route path="/product/:id" exact component={GetProductDetails}/>
                                    <Route path="/search/:name" exact component={GetSearchResults}/>
                                    <Route path="/iletisim" exact component={Contact}/>
                                    <Route path="/banka-hesap-bilgileri" exact component={BankAccount}/>
                                    <Route path="/" exact component={Home}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </Aux>
            </BrowserRouter>
        );
    }
}

export default Layout;