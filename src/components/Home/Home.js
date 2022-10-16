import Banner from '../Banner/Banner'
import React from 'react'
import LleganMañana from '../LleganMañana/LleganMañana'
import './Home.css'

const Home = () => {




    return (
        <div>
            <Banner/>

            <div>
                <h4 className='titleLleganMañana'>Llegan Mañana</h4>
                <LleganMañana/>
            </div>

        </div>
    )
}

export default Home;