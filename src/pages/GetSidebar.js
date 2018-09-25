import React, {Component} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";

class GetSidebar extends Component {
    state = {
        categoryList: []
    };


    removeDuplicateCategories = ( arr, prop ) => {
        let obj = {};
        return Object.keys(arr.reduce((prev, next) => {
            if(!obj[next[prop]]) obj[next[prop]] = next;
            return obj;
        }, obj)).map((i) => obj[i]);
    };

    GetSortOrder = (prop) => {
        return function(a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
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


                            newCategoryList.push({
                                CategoryId: CategoryId,
                                CategoryName: ProductCategoryName

                            });



                    }


                    let updatedCategoryList = this.removeDuplicateCategories(newCategoryList,"CategoryId");


                    delete updatedCategoryList[38];
                    let sortedList = updatedCategoryList.sort(this.GetSortOrder("CategoryName"));
                    // console.log(sortedList);
                    this.setState({
                        categoryList: sortedList
                    });
                });

        });
    };


    componentDidMount() {
        this.getCategoriesFromAPI();
    }
    render() {

        const categories = Object.values(this.state.categoryList).map((data) =>
            <Sidebar
                key={data.CategoryId} CategoryId={data.CategoryId} CategoryName={data.CategoryName} />
        );
        return (
            <div>
                <h1>Kategoriler</h1>
                {categories}
            </div>
        );
    }
}

export default GetSidebar;