import React from 'react';

import './home-style.scss';

///import Teste from './teste';


const Home = () => {
    return(
        <div>
            <div>
                <section className='gridtemplate'>
                    <div className='banner'>
                        <div className="image-banner">
                            <p> COVID-19 </p>
                        </div>
                    </div>

                    <div className='content1'>
                        <div >
                            <img src="https://i.pinimg.com/236x/a6/c5/d2/a6c5d2ba0bdf29da83facb8580dae9da.jpg" alt=""/>
                        </div>
                    </div>
                    
                    <div className='content2'>
                        <div >
                        <img src="https://i.pinimg.com/236x/a6/c5/d2/a6c5d2ba0bdf29da83facb8580dae9da.jpg" alt=""/>
                        </div>
                   
                    </div>

                    <div className='content3'>
                        <div >
                        <img src="https://i.pinimg.com/236x/a6/c5/d2/a6c5d2ba0bdf29da83facb8580dae9da.jpg" alt=""/>
                        </div>
                    
                    </div>

                </section>
            </div>
        </div>
    )
}


export default Home;
