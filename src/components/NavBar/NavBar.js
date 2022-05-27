import React from 'react';
import "./navbar.scss";
export const NavBar = () => {
    return (
        <nav>
            <section className='container'>
                <div className="row">
                    <div className="col-6 col-md-6">
                        <a href="https://www.fincaraiz.com.co/">
                            <img src="https://fincaraiz.com.co/App_Theme/images//nuevosLogos/MainLogoNew.svg"
                                loading="lazy"
                                className="logo"
                                alt='logo' />
                        </a>
                    </div>
                    <div className="col-6 col-md-6">
                        <div className="float-right">
                            <img alt="logo"
                                src="https://s3.amazonaws.com/imagenes.fincaraiz.com.co/FC_COL/Landing/28140_LGLP_2022-3-9.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}
