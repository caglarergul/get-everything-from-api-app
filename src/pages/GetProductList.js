import React, {Component} from 'react';
import Products from "../components/Products/Products";

class GetProductList extends Component {
    state = {
        productList: [],
        categoryId: this.props.match.params.id,
        categoryName: null
    };

    getProductsFromAPI = () => {
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
                        if (x[i].childNodes[32].textContent == this.state.categoryId) {
                            let ModelNameValue = x[i].childNodes[6].textContent; // Model Name
                            let ProductIdValue = x[i].childNodes[1].textContent; // Model Name
                            let ProductImageValue = x[i].childNodes[30].textContent; // Model Name
                            let ProductListPrice = x[i].childNodes[18].textContent; // Price
                            let UnitInStock = x[i].childNodes[13].textContent; // Price
                            let ProductCategoryName =  x[i].childNodes[34].textContent; // Category Name
                            newProductList.push({
                                ModelName : ModelNameValue,
                                ProductId : ProductIdValue,
                                ProductImage : ProductImageValue,
                                ProductListPrice : ProductListPrice,
                                UnitInStock : UnitInStock,
                                ProductCategoryName: ProductCategoryName

                            });
                            this.setState({categoryName: ProductCategoryName});
                        }

                    }

                    console.log(newProductList);

                    /* for (let i = 0; i < 10; i++) {
                         console.log(x[i].childNodes[6]);

                         this.setState({content: x[i].childNodes[6]});


                         //console.log(x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>");
                     }*/

                    this.setState({
                        productList: newProductList
                    });
                });

        });
    };

   

    componentDidMount() {
        this.getProductsFromAPI();
    }
    render() {

        const products = Object.values(this.state.productList).map((data) =>
            <Products
                key={data.ProductId} ModelName={data.ModelName} ProductId={data.ProductId}
                ProductImage={data.ProductImage} ProductListPrice={data.ProductListPrice}
                UnitInStock={data.UnitInStock} ProductCategoryName={data.ProductCategoryName}/>
        );
        return (
            <div>
                <h1>{this.state.categoryName}</h1>



            <div className="row">

                {products}

            </div>


            </div>

        )
            ;
    }
}

export default GetProductList;