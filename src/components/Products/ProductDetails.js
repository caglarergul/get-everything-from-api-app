import Image from "react-lazy-image";
import React from "react";


let style = {
    color: "#ffffff"
};
const productsPartial = (props) => (


    <div className="detail-block">
        <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-5 gallery-holder">
                <div className="product-item-holder size-big single-product-gallery small-gallery">

                    <div id="owl-single-product">
                        <div className="single-product-gallery-item" id="slide1">
                            <Image source={props.ProductImage} className="img-responsive" width="100%"/>
                        </div>
                    </div>
                    {/* /.single-product-slider */}

                    <div className="single-product-gallery-thumbs gallery-thumbs">

                        <div id="owl-single-product-thumbnails">
                            <div className="item">
                                <a className="horizontal-thumb active" data-target="#owl-single-product"
                                   data-slide="1" href="#slide1">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p17.jpg"/>
                                </a>
                            </div>

                            <div className="item">
                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="2"
                                   href="#slide2">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p18.jpg"/>
                                </a>
                            </div>
                            <div className="item">

                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="3"
                                   href="#slide3">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p19.jpg"/>
                                </a>
                            </div>
                            <div className="item">

                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="4"
                                   href="#slide4">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p20.jpg"/>
                                </a>
                            </div>
                            <div className="item">

                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="5"
                                   href="#slide5">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p21.jpg"/>
                                </a>
                            </div>
                            <div className="item">

                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="6"
                                   href="#slide6">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p22.jpg"/>
                                </a>
                            </div>
                            <div className="item">

                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="7"
                                   href="#slide7">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p23.jpg"/>
                                </a>
                            </div>
                            <div className="item">

                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="8"
                                   href="#slide8">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p24.jpg"/>
                                </a>
                            </div>
                            <div className="item">

                                <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="9"
                                   href="#slide9">
                                    <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif"
                                         data-echo="assets/images/products/p25.jpg"/>
                                </a>
                            </div>
                        </div>
                        {/* /#owl-single-product-thumbnails */}


                    </div>
                    {/* /.gallery-thumbs */}

                </div>
                {/* /.single-product-gallery */}
            </div>
            {/* /.gallery-holder */}
            <div className='col-sm-6 col-md-7 product-info-block'>
                <div className="product-info">

                    <div className="col-md-7">
                    <h1 className="name">{props.ModelName}</h1>


                    <div className="stock-container info-container m-t-10">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="stock-box text-right">
                                    <span className="label"><b>Toplam Stok :</b></span>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <div className="stock-box">
                                    {props.ParentCategoryName === "Duvar Saatleri" ?
                                        <span className="value badge" style={style}>Üretimdir Stok Var!</span>
                                        :
                                        <span className="value badge" style={style}>{props.UnitInStock} Adet</span>
                                    }

                                </div>
                            </div>
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.stock-container */}

                    <div className="description-container m-t-20">
                        <div
                            dangerouslySetInnerHTML={{__html: props.Description.replace(/(<? *script)/gi, 'illegalscript')}}>
                        </div>

                    </div>
                    {/* /.description-container */}

                    <div className="price-container info-container m-t-20">
                        <div className="row">


                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="price-box">
                                    {(props.ProductKDVPrice !== "0.00") ?
                                    <div>
                                        <span className="price">{props.ProductPrice} ₺ + KDV</span><br />
                                        <span className="price-kdv">Kdv Dahil: {props.ProductKDVPrice} ₺</span>
                                    </div>
                                    : <span className="price">Fiyat Sorunuz</span>}
                                </div>
                            </div>


                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.price-container */}
                    </div>
                    <div className="col-md-5">
                        {(props.Variant.length>0) && (props.ParentCategoryName !== "Duvar Saatleri") ?
                        <table className="VariantTable">
                            <thead>
                            <tr>
                                <th>Renk</th>
                                <th>Adet</th>
                            </tr>
                            </thead>

                            <tbody>
                            {props.Variant.map((data, igkey) => {
                                    return (

                                        <tr key={igkey}>
                                            <td>
                                                {data.color}
                                            </td>
                                            <td> {data.stock}</td>
                                        </tr>

                                    );
                                }
                            )}

                            </tbody>
                        </table>
                            : ""}
                    </div>
                </div>
                {/* /.product-info */}


            </div>
            {/* /.col-sm-7 */}
        </div>
        {/* /.row */}
    </div>
);
export default productsPartial;