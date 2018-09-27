import Image from "react-lazy-image";
import React from "react";
var style = {
    color: "#ffffff"
};
const productsPartial = (props) => (




        <div className="detail-block">
            <div className="row">

                <div className="col-xs-12 col-sm-6 col-md-5 gallery-holder">
                    <div className="product-item-holder size-big single-product-gallery small-gallery">

                        <div id="owl-single-product">
                            <div className="single-product-gallery-item" id="slide1">
                                    <Image source={props.ProductImage} className="img-responsive" width="100%" />
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
                        <h1 className="name">{props.ModelName}</h1>



                        <div className="stock-container info-container m-t-10">
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="stock-box">
                                        <span className="label"><b>Toplam Stok :</b></span>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="stock-box">
                                        <span className="value badge" style={style}>{props.UnitInStock} Adet</span>
                                    </div>
                                </div>
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.stock-container */}

                        <div className="description-container m-t-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat.
                        </div>
                        {/* /.description-container */}

                        <div className="price-container info-container m-t-20">
                            <div className="row">


                                <div className="col-sm-6">
                                    <div className="price-box">
                                        <span className="price">Kdv Dahil: {props.ProductKDVPrice} ₺</span>

                                    </div>
                                </div>



                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.price-container */}

                    </div>
                    {/* /.product-info */}
                </div>
                {/* /.col-sm-7 */}
            </div>
            {/* /.row */}
        </div>
);
export default productsPartial;