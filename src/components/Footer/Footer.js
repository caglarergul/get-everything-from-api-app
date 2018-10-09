import React, {Component} from 'react';
import Aux from "../UI/Auxilary";
import {NavLink} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <Aux>
                <footer id="footer" className="footer color-bg">
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="module-heading">
                                        <h4 className="module-title">Bize Ulaşın</h4>
                                    </div>


                                    <address>
                                        <ul className="toggle-footer">
                                            <li className="media">
                                                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                                                <div className="media-body">
                                                    <p>KONAK MAHALLESİ 863 SOKAK NO: 49 KONAK / İZMİR

                                                        </p>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse"></i> </span> </div>
                                                <div className="media-body">
                                                    <p><a href="tel:+905538410308">0553 841 03 08</a> - <a href="tel:+9002324410808">0232 441 08 08</a></p>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse"></i> </span> </div>
                                                <div className="media-body outer-top-xsm"> <span><a href="mailto:satis@binbirpromosyon.com.tr">satis@binbirpromosyon.com.tr</a></span> </div>
                                            </li>
                                        </ul>
                                    </address>

                                </div>


                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="module-heading">
                                        <h4 className="module-title">Genel</h4>
                                    </div>


                                    <div className="module-body">
                                        <ul className='list-unstyled'>
                                            <li className="first"><a href="/iletisim" title="Contact us">İletişim</a></li>
                                            <li><a href="/banka-hesap-bilgileri" title="About us">Banka Hesap Bilgileri</a></li>
                                        </ul>
                                    </div>

                                </div>


                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="module-heading">
                                        <h4 className="module-title">2019 Promosyon</h4>
                                    </div>


                                    <div className="module-body">
                                        <ul className='list-unstyled'>
                                            <li className="first"><a title="Fiyat Listesi" href="http://www.binbirpromosyon.com.tr/fiyatlistesi-2019.pdf">Fiyat Listesi</a></li>
                                            <li><a title="Information" href="https://www.dropbox.com/s/8k7ys5n81dpw2v0/2019-digitalKatalog.pdf?dl=0">Dijital Katalog</a></li>
                                        </ul>
                                    </div>

                                </div>


                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="module-heading">
                                        <h4 className="module-title">Promosyon</h4>
                                    </div>


                                    <div className="module-body">
                                        <ul className='list-unstyled'>
                                            <li>
                                            <NavLink to={"/category/145"}   >
                                                Ajandalar
                                            </NavLink>
                                            </li>
                                            <li>
                                            <NavLink to={"/category/142"}   >
                                                Takvimler
                                            </NavLink>
                                            </li>
                                            <li>
                                            <NavLink to={"/category/182"}   >
                                                Defterler
                                            </NavLink>
                                            </li>
                                            <li>
                                            <NavLink to={"/category/196"}   >
                                                Saatler
                                            </NavLink>
                                            </li>
                                            <li>
                                            <NavLink to={"/category/94"}   >
                                                Masa Setleri
                                            </NavLink>
                                            </li>


                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </footer>

            </Aux>
        );
    }
}

export default Footer;