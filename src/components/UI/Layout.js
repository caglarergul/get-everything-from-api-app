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

                    <Header/>

                    <div className="body-content outer-top-vs" id="top-banner-and-menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-2 sidebar">


                                    <GetSidebar/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-10">
                                    <Route path="/category/:id" exact component={GetProductList}/>
                                    <Route path="/product/:id" exact component={GetProductDetails}/>
                                    <Route path="/" exact component={Home}/>
                                </div>
                            </div>
                        </div>
                    </div>


                </Aux>
            </BrowserRouter>
        );
    }
}

export default Layout;