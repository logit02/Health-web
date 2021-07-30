import React from "react";

import './services.css';

import search from './Group.png'


function Services(){
    return(
        <div className='all'>
            <div className='puretext'>

                    <h1 className='title_services'>Our Services</h1>
                    <p className='puk'></p>
                    <p className='desc'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health.</p>


            </div>



            <div className='items'>
                <div className='item1'>
                    <img src={search} alt='#' className='img'/>
                    <h1>Search Doctor</h1>
                    <p className='search_desc'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>

                </div>
                <div className='item1'>
                    <img src={search} alt='#' className='img'/>
                    <h1>Online pharmacy</h1>
                    <p className='search_desc'>Buy your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className='item1'>
                    <img src={search} alt='#' className='img'/>
                    <h1>Consultation</h1>
                    <p className='search_desc'> Free consultation with our trusted doctors and get the best recomendations</p>
                </div>

            </div>


        </div>


    )
}


export default Services;