import React from 'react'
import { Footer } from './components/Footer/Footer'
import { FormBase } from './components/FormBase/FormBase'
import { HeroLeft } from './components/HeroLeft/HeroLeft'
import { NavBar } from './components/NavBar/NavBar'

export const LandingApp = () => {
    return (
        <main>
            <NavBar />
            <section className="container-fluid">
                <div className="row">
                    <article className="col-md-6 px-0 proyect">
                        <HeroLeft />
                    </article>
                    <article className="col-md-6 form_lp">
                        <FormBase />
                    </article>
                </div>
            </section>
            <Footer />
        </main>

    )
}
