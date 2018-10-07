import React, {Component} from 'react';
import Aux from "../components/UI/Auxilary";
import DuvarSaatleriSlider from "../images/sliders/duvar-saatleri-slider.jpg";
import HediyelikEsyalarSlider from "../images/sliders/hediyelik-esyalar-slider.jpg";
import VipSetlerSlider from "../images/sliders/vip-setler.jpg";
import AjandalarSlider from "../images/sliders/ajandalar-slider.jpg";
import {NavLink} from 'react-router-dom';

import Ajandalar from "../images/kategoriler/ajandalar-01.png";
import Anahtarliklar from "../images/kategoriler/ANAHTARLIKLAR-01.png";
import Bardaklar from "../images/kategoriler/bardaklar-01.png";
import BezCantalar from "../images/kategoriler/BEZ ÇANTALAR TAKVİMLER-01.png";
import Defterler from "../images/kategoriler/defterler-01.png";
import DijitalUrunler from "../images/kategoriler/DİJİTAL ÜRÜNLER-01.png";
import DuvarSaatleri from "../images/kategoriler/DUVAR SAATİ-01.png";
import GeriDonusum from "../images/kategoriler/geridonusumluurunler.png";
import HediyelikEsya from "../images/kategoriler/HEDİYELİK EŞYA-01.png";
import HediyelikGida from "../images/kategoriler/HEDİYELİK GIDA-01.png";
import Kalemler from "../images/kategoriler/kalemler-01.png";
import KalemSetleri from "../images/kategoriler/kalem setleri-01.png";
import KalemlikCakmakBalon from "../images/kategoriler/kalemlik çakmak balon-01.png";
import KursunKalem from "../images/kategoriler/KURŞUN KALEMLER-01.png";
import MasaSetleri from "../images/kategoriler/masa setleri-01.png";
import Kartvizitlik from "../images/kategoriler/kartvizitlik çakı cep aynası elfenerleri-01.png";
import PiereCardin from "../images/kategoriler/pierre cardin-01.png";
import Cantalar from "../images/kategoriler/SEKRETELİK ÇANTALAR-01.png";
import OtoKokusu from "../images/kategoriler/OTO KOKUSU GÜNEŞLİK-01.png";
import PlaketKristal from "../images/kategoriler/PLAKETLER KRİSTALLER-01.png";
import TabloSaatler from "../images/kategoriler/TABLO SAATLER-01.png";
import MousePad from "../images/kategoriler/mousepad bardakaltlığı-01.png";
import Postit from "../images/kategoriler/yapışkanlı not kağıtları-01.png";
import Organizerler from "../images/kategoriler/organizerler-01.png";
import Tekstil from "../images/kategoriler/tekstil ürünleri-01.png";
import Sapkalar from "../images/kategoriler/şapkalar-01.png";
import MasaSaatleri from "../images/kategoriler/MASA SAATLERİ-01.png";
import VipSetler from "../images/kategoriler/VIP SETLER-01.png";


class Home extends Component {
    render() {
        return (
            <Aux>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src={AjandalarSlider} alt="..." />
                                <div className="carousel-caption">
                                    ...
                                </div>
                        </div>
                        <div className="item">
                            <img src={HediyelikEsyalarSlider} alt="..." />
                                <div className="carousel-caption">
                                    ...
                                </div>
                        </div>

                        <div className="item">
                            <img src={VipSetlerSlider} alt="..." />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>

                        <div className="item">
                            <img src={DuvarSaatleriSlider} alt="..." />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>

                    </div>


                    <a className="left carousel-control" href="#carousel-example-generic" role="button"
                       data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button"
                       data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
<br />
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}   >
                          <img width="100%" src={Ajandalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}   >
                            <img width="100%" src={Anahtarliklar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}   >
                            <img width="100%" src={Bardaklar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={BezCantalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Defterler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={DijitalUrunler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={DuvarSaatleri} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={GeriDonusum} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={HediyelikEsya} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={HediyelikGida} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Kalemler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={KalemSetleri} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={KalemlikCakmakBalon} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={KursunKalem} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={MasaSetleri} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Kartvizitlik} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={MasaSaatleri} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={PiereCardin} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Cantalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={OtoKokusu} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={PlaketKristal} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={TabloSaatler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={MousePad} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Postit} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Organizerler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Tekstil} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/"}  exact >
                            <img width="100%" src={Sapkalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                    <NavLink to={"/category/"}  exact >
                        <img width="100%" src={VipSetler} />
                    </NavLink>
                </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default Home;