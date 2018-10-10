import React, {Component} from 'react';
import Aux from "../components/UI/Auxilary";
import DuvarSaatleriSlider from "../images/sliders/duvar-saatleri-slider.jpg";
import GeriDonusumSlider from "../images/sliders/geri-donusumlu-urunler.jpg";
import VipSetlerSlider from "../images/sliders/hediyelik-esyalar-slider.jpg";
import AjandalarSlider from "../images/sliders/ajandalar-slider.jpg";
import {NavLink} from 'react-router-dom';

import Ajandalar from "../images/kategoriler/6_ajandalar.png";
import Anahtarliklar from "../images/kategoriler/13_anahtarliklar.png";
import Bardaklar from "../images/kategoriler/8_mug_kupalar.png";
import BezCantalar from "../images/kategoriler/21_bez-cantalar.png";
import Defterler from "../images/kategoriler/9_defterler.png";
import DijitalUrunler from "../images/kategoriler/4_dijital_urunler.png";
import DuvarSaatleri from "../images/kategoriler/1_duvar_saatleri.png";
import GeriDonusum from "../images/kategoriler/16_geri_donusum.png";
import HediyelikEsya from "../images/kategoriler/22_hediyelik_esya.png";
import HediyelikGida from "../images/kategoriler/23_hediyelik_gida.png";
import Kalemler from "../images/kategoriler/5_metal_kalemler.png";
import KalemSetleri from "../images/kategoriler/24_kalem_setleri.png";
import KalemlikCakmakBalon from "../images/kategoriler/17_kagitlik_kalemlik.png";
import KursunKalem from "../images/kategoriler/25_kursun_kalemler.png";
import MasaSetleri from "../images/kategoriler/14_masa_setleri_sumenler.png";
import Kartvizitlik from "../images/kategoriler/19_caki_el_feneri.png";
import PiereCardin from "../images/kategoriler/27_piere_cardin.png";
import Cantalar from "../images/kategoriler/15_cantalar.png";
import OtoKokusu from "../images/kategoriler/2_oto_kokulari.png";
import PlaketKristal from "../images/kategoriler/18_plaketler.png";
import TabloSaatler from "../images/kategoriler/12_tablo_saatler.png";
import MousePad from "../images/kategoriler/26_mousepad.png";
import Postit from "../images/kategoriler/29_yapiskanli_notlar.png";
import Organizerler from "../images/kategoriler/10_organizer.png";
import Tekstil from "../images/kategoriler/28_tekstil.png";
import Sapkalar from "../images/kategoriler/3_sapkalar.png";
import MasaSaatleri from "../images/kategoriler/20_vip_masa_setleri.png";
import VipSetler from "../images/kategoriler/7_vip_setler.png";


class Home extends Component {
    render() {
        return (
            <Aux>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active">&nbsp;</li>
                        <li data-target="#carousel-example-generic" data-slide-to="1">&nbsp;</li>
                        <li data-target="#carousel-example-generic" data-slide-to="2">&nbsp;</li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img alt="kategoriler" src={AjandalarSlider}  />

                        </div>
                        <div className="item">
                            <img alt="kategoriler" src={GeriDonusumSlider} />

                        </div>

                        <div className="item">
                            <img alt="kategoriler" src={VipSetlerSlider}  />

                        </div>

                        <div className="item">
                            <img alt="kategoriler" src={DuvarSaatleriSlider}  />

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
                    <div className="col-lg-10 col-lg-offset-1">
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/145"}   >
                          <img alt="kategoriler" width="100%" src={Ajandalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/175"}   >
                            <img alt="kategoriler" width="100%" src={Anahtarliklar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/144"}   >
                            <img alt="kategoriler" width="100%" src={Bardaklar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/189"}  exact >
                            <img alt="kategoriler" width="100%" src={BezCantalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/181"}  exact >
                            <img alt="kategoriler" width="100%" src={Defterler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/129"}  exact >
                            <img alt="kategoriler" width="100%" src={DijitalUrunler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/196"}  exact >
                            <img alt="kategoriler" width="100%" src={DuvarSaatleri} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/179"}  exact >
                            <img alt="kategoriler" width="100%" src={GeriDonusum} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/193"}  exact >
                            <img alt="kategoriler" width="100%" src={HediyelikEsya} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/192"}  exact >
                            <img alt="kategoriler" width="100%" src={HediyelikGida} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/187"}  exact >
                            <img alt="kategoriler" width="100%" src={Kalemler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/131"}  exact >
                            <img alt="kategoriler" width="100%" src={KalemSetleri} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/126"}  exact >
                            <img alt="kategoriler" width="100%" src={KalemlikCakmakBalon} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/194"}  exact >
                            <img alt="kategoriler" width="100%" src={KursunKalem} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/94"}  exact >
                            <img alt="kategoriler" width="100%" src={MasaSetleri} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/146"}  exact >
                            <img alt="kategoriler" width="100%" src={Kartvizitlik} />
                        </NavLink>
                    </div>

                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/195"}  exact >
                            <img alt="kategoriler" width="100%" src={MasaSaatleri} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/200"}  exact >
                            <img alt="kategoriler" width="100%" src={PiereCardin} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/127"}  exact >
                            <img alt="kategoriler" width="100%" src={Cantalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/124"}  exact >
                            <img alt="kategoriler" width="100%" src={OtoKokusu} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/137"}  exact >
                            <img alt="kategoriler" width="100%" src={PlaketKristal} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/182"}  exact >
                            <img alt="kategoriler" width="100%" src={TabloSaatler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/132"}  exact >
                            <img alt="kategoriler" width="100%" src={MousePad} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/138"}  exact >
                            <img alt="kategoriler" width="100%" src={Postit} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/174"}  exact >
                            <img alt="kategoriler" width="100%" src={Organizerler} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/143"}  exact >
                            <img alt="kategoriler" width="100%" src={Tekstil} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                        <NavLink to={"/category/150"}  exact >
                            <img alt="kategoriler" width="100%" src={Sapkalar} />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 categories">
                    <NavLink to={"/category/186"}  exact >
                        <img alt="kategoriler" width="100%" src={VipSetler} />
                    </NavLink>
                </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default Home;