import React from 'react';

import './home-style.scss';
import TipsComponent from '../components/tips/tipComponent';
import PicBox from '../components/home-box/pic-box';


const Home = () => {
    return(
        <div className="home-div">
            <div className='gridtemplate'>

                <div className='banner'>
                    <img src="https://www.mapleridge.ca/ImageRepository/Document?documentID=24527" alt="COVID-19" />
                </div> 

            </div>

            <div className="tips">           

                <TipsComponent
                    title="Why singing can make you feel better in lockdown"
                    imageUrl="https://ichef.bbci.co.uk/wwfeatures/live/1600_900/images/live/p0/8d/hz/p08dhzgp.jpg" 
                    content="Whether you have the voice of a songbird or sound like some ball-bearings in a blender, singing can have some remarkably positive effects."
                />

                <TipsComponent
                    title="What we know about anti-malarial drugs and Covid-19"
                    imageUrl="https://s.france24.com/media/display/bf800c80-90b1-11ea-8ca8-005056a98db9/w:980/p:16x9/73084772d55da50f1e6c8a116626f576b2b5078f.webp" 
                    content="Studies are underway to examine if hydroxychloroquine (and a similar drug chloroquine) is effective against the coronavirus."
                />

                <TipsComponent
                    title="Why more forest are being chopped down"
                    imageUrl="https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/8d/hl/p08dhltl.jpg" 
                    content="With fewer planes in the sky and cars on the road, lockdown has brought many benefits to the environment. So why is it harming tropical rainforests?"
                />

                <TipsComponent
                    title="How exposed is your job to coronavirus"
                    imageUrl="https://ichef.bbci.co.uk/news/660/cpsprodpb/97A9/production/_112252883_coronavirus_jobs_by_risk_index_976.jpg" 
                    content="Millions of workers are doing their day jobs from makeshift setups in their living rooms and kitchens, while those who can't work from home are not encouraged to go back in if they can do so safely."
                />

                <PicBox 
                    imageUrl="https://www.bio-rad.com/webroot/web/images/tlp/coronavirus/covid-19-th.png"
                />

            </div>  

            https://www.youtube.com/watch?v=8b2mTq0Xrtw&list=PLseEjOQBo8bdJebTFf0w2WUSMHMWxjmUN&index=58&t=53s
        </div>
    )
}


export default Home;
