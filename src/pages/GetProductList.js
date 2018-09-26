import React, {Component} from 'react';
import Products from "../components/Products/Products";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Pace from 'react-pace-progress'

class GetProductList extends Component {
    state = {
        productList: [],
        categoryId: this.props.match.params.id,
        categoryName: null,
        isLoading: true
    };


    getProductsFromAPI = (propsCatId) => {
        let request = new Request('https://www.promiks.com.tr/WS/WSANXMLPublish.aspx?xmlpid=6');

        fetch(request).then((results) => {
            // results returns XML. lets cast this to a string, then create
            // a new DOM object out of it!
            results
                .text()
                .then((str) => {
                    let parser = new DOMParser();
                    let responseDoc = parser.parseFromString(str, 'application/xml');
                    let x = responseDoc.documentElement.childNodes;
                    let newProductList = [];

                    for (let i = 0; i < x.length; i++) {
                        // eslint-disable-next-line to
                        if (x[i].childNodes[32].textContent === propsCatId) {
                            let ModelNameValue = x[i].childNodes[6].textContent; // Model Name
                            let ProductIdValue = x[i].childNodes[1].textContent; // Model Name
                            let ProductImageValue = x[i].childNodes[30].textContent; // Model Name
                            let ProductListPrice = x[i].childNodes[18].textContent; // Price
                            let UnitInStock = x[i].childNodes[13].textContent; // Price
                            let ProductCategoryName = x[i].childNodes[34].textContent; // Category Name
                            newProductList.push({
                                ModelName: ModelNameValue,
                                ProductId: ProductIdValue,
                                ProductImage: ProductImageValue,
                                ProductListPrice: ProductListPrice,
                                UnitInStock: UnitInStock,
                                ProductCategoryName: ProductCategoryName

                            });
                            this.setState({categoryName: ProductCategoryName});

                        }

                    }

                    // console.log(newProductList);


                    this.setState({
                        productList: newProductList,
                        isLoading: false
                    });
                });

        });
    };



    componentDidMount() {
        this.getProductsFromAPI(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: true
        });
        this.getProductsFromAPI(nextProps.match.params.id);
    }

    render() {

        const products = Object.values(this.state.productList).map((data) =>
            <Products
                key={data.ProductId} ModelName={data.ModelName} ProductId={data.ProductId}
                ProductImage={data.ProductImage} ProductListPrice={data.ProductListPrice}
                UnitInStock={data.UnitInStock} ProductCategoryName={data.ProductCategoryName}/>
        );

        const { isLoading } = this.state;
        if (isLoading) {
            return <Pace color="#27ae60"/>
        } else {

            return (
                <div>
                    <h1>{this.state.categoryName}</h1>
                    <div className="row">
                        <LazyLoadComponent>
                            {products}
                        </LazyLoadComponent>
                    </div>
                </div>
            );

        }


    }
}

export default GetProductList;