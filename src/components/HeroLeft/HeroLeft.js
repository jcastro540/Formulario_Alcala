import React from 'react';
import './heroleft.scss';

export const HeroLeft = () => {
    return (
        <section className='position-relative'>
            <div className="hero-img">
                <img src="../../assets/bg.png"
                    alt="Áreas de 173m² y 215m² desde $1.373.250.000" 
                    loading="lazy"/>
            </div>

            <div className="description">
                <h1>Sé parte del nuevo proyecto de casas campestres Alcalá, en Cota.</h1>
                <p>¡Disfruta del mejor lugar para vivir a las afueras de Bogotá! Sé uno de los 
                    76 propietarios y disfruta de vivir con comodidad y naturaleza, podrás encontrar: zonas verdes, 
                    club house, senderos de trote, zonas de entrenamiento y mucho más. El lugar ideal para ti te espera 
                    en el Km 5 vía Siberia – Cota.</p>
            </div>
        </section>
    )
}
