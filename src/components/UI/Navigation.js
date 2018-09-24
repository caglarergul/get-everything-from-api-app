import React, {Component} from 'react';

class Navigation extends Component {
    state = {
        categoryList: []
    };

    getCategoriesFromAPI = () => {
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
                    let newCategoryList = [];

                    for (let i = 0; i < x.length; i++) {

                        let ProductCategoryName = x[i].childNodes[34].textContent; // Category Name
                        let CategoryId = x[i].childNodes[32].textContent; // Category Id

                        if(newCategoryList.indexOf(newCategoryList[i].CategoryId) === -1) {
                            newCategoryList.push({
                                CategoryId: CategoryId,
                                CategoryName: ProductCategoryName

                            });
                        }


                    }

                    console.log(newCategoryList);

                    this.setState({
                        categoryList: newCategoryList
                    });
                });

        });
    };


    componentDidMount() {
        this.getCategoriesFromAPI();
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Navigation;