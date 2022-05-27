import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className="container-fluid custom-container-fluid py-4 mt-5">
            <section className="container custom-container">
                <div className="row">
                    <header className="col-md-12 text-center">
                        <ul className="list-inline text-white d-none d-md-block">
                            <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/proyectos-vivienda-nueva/" target="_blank" rel="noopener noreferrer">Proyectos de vivienda</a>
                            <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/arriendos/" target="_blank" rel="noopener noreferrer">Arriendo</a>
                            <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/finca-raiz/" target="_blank" rel="noopener noreferrer">Venta</a>
                            <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/contactenos.aspx" target="_blank" rel="noopener noreferrer">Servicio al Cliente</a>
                        </ul>

                        <ul className="list-group d-flex d-md-none">
                            <li className="list-group-item">
                                <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/proyectos-vivienda-nueva/" target="_blank" rel="noopener noreferrer">
                                    Proyectos de vivienda
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/arriendos/" target="_blank" rel="noopener noreferrer">
                                    Arriendo
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/finca-raiz/" target="_blank" rel="noopener noreferrer">
                                    Venta
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a className="border rounded-pill px-2" href="http://www.fincaraiz.com.co/contactenos.aspx" target="_blank" rel="noopener noreferrer">
                                    Servicio al Cliente
                                </a>
                            </li>
                        </ul>

                        <div className="full-container bg_footer"></div>
                    </header>
                </div>

                <div className="full-container footer">
                    <div className="address">
                        <h2>Edificio Soko 147, Calle 147 No. 17 - 78 Piso 8 | Bogotá D.C. | Tel. (57) (1) 649 70 01</h2>
                    </div>
                    <div className="container">
                        <div className="wrapper">
                            <div className="social">
                                <div className="spacer"></div>
                                <span className="span2">Haz parte de nuestra comunidad</span>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/fincaraiz.com.co" target="_blank" rel="noreferrer">
                                            <i className="bg-icon bg-fb"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/fincaraizfr" target="_blank" rel="noreferrer">
                                            <i className="bg-icon bg-tw"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/c/fincaraiz" target="_blank" rel="noreferrer">
                                            <i className="bg-icon bg-you"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/fincaraiz-com-co" target="_blank" rel="noreferrer">
                                            <i className="bg-icon bg-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/fincaraiz.com.co/" target="_blank" rel="noreferrer">
                                            <i className="bg-icon bg-itg"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="spacer"></div>
                                <span className="span3">Descarga nuestra app, es gratis</span>
                                <ul>
                                    <li>
                                        <a href="https://itunes.apple.com/co/app/fincaraiz.com.co/id1068634301" target="_blank" rel="noreferrer">
                                            <i className="bg-apple"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://app.appsflyer.com/co.com.fincaraiz.app?pid=Email&amp;c=Particulares" target="_blank" rel="noreferrer">
                                            <i className="bg-android"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="spacer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
