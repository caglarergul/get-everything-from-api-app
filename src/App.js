import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import GetProductList from "./pages/GetProductList";
import GetCategories from "./pages/GetCategories";
import Home from "./pages/Home";
import Layout from "./components/UI/Layout";

class App extends Component {
  render() {
    return (
        <Layout>
        <Switch>
            <Route path="/products/:id" component={GetProductList}/>
            <Route path="/categories" component={GetCategories}/>
            <Route path="/" exact component={Home}/>
        </Switch>
        </Layout>
    );
  }
}

export default App;
