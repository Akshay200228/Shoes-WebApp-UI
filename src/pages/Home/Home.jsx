import React from 'react'
import { CustomerReview, Footer, Hero, PopularProducts, Services, SpeacialOffer, Subscribe, SuperQuality } from '../../sections'
import { useDarkMode } from '../../context/DarkModeContext';

const Home = () => {
    const { darkMode } = useDarkMode(); // Access dark mode state

    return (
        <>
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>

            <section className="padding">
                <PopularProducts />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="py-10 padding-x">
                <Services />
            </section>

            <section className="padding">
                <SpeacialOffer />
            </section>
            <section className={`${darkMode ? 'bg-[#262626]' : 'bg-pale-blue'} padding`}>
                <CustomerReview />
            </section>
            <section className="w-full py-16 padding-x sm:py-32">
                <Subscribe />
            </section>
            <section className="pb-8 bg-black padding-x padding-t">
                <Footer />
            </section>
        </>
    )
}

export default Home
