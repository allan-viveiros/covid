import React from 'react';

import './home-style.scss';
//import TipsComponent from '../components/tips/tipComponent';
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

                <PicBox
                    title="Seniors shake off 4 months of lockdown with drinks and music"
                    imageUrl="https://i.cbc.ca/1.5653703.1595010952!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/alderwood-estates-george-street.JPG" 
                    link="https://www.cbc.ca/news/canada/newfoundland-labrador/alderwood-seniors-george-street-1.5653488"
                    content="Residents of Alderwood Estates in Witless Bay took back some of their freedom Friday afternoon by jumping on a party bus and heading to O'Reilly's Pub on George Street in downtown St. John's."
                />

                <PicBox
                    title="Pandemic-rattled Canadians still cautious about everything"
                    imageUrl="https://i.cbc.ca/1.5652618.1594930497!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/que-covid-20200714.jpg" 
                    link="https://www.cbc.ca/news/politics/grenier-covid-caution-pandemic-polling-1.5652609"
                    content="Most Canadians are still exceedingly cautious when it comes to the COVID-19 pandemic — in favour of mandatory mask laws, concerned about their personal susceptibility to the virus, willing to lock the country down again if cases spike and leaning toward a mix of in-class and at-home learning for children in the fall."
                />

                <PicBox
                    title="Mé​​​​​​​tis artist creates 'wash your hands' posters in 21 Indigenous languages"
                    imageUrl="https://i.cbc.ca/1.5648259.1594678800!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/graphics-21-indigenous-languages.jpg" 
                    link="https://www.cbc.ca/news/canada/ottawa/21-languages-covid-art-1.5645150"
                    content="When Colleen Gray saw that the United Nations had put out a call for artists to join the fight against COVID-19, her first thought was how to get the message out to Canada's Indigenous communities."
                />

                <PicBox
                    title="COVID-19 inspired this 86-year-old musician to write a pandemic waltz"
                    imageUrl="https://i.cbc.ca/1.5649233.1594845397!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/margaret-macgregor-macdonald.jpg" 
                    link="https://www.cbc.ca/news/canada/nova-scotia/pandemic-waltz-antigonish-music-piano-family-tradition-margaret-1.5649169"
                    content="The notes seemed to fall from her fingertips and onto the keys.
                    That's how 86-year-old Margaret MacGregor-MacDonald from Antigonish, N.S., describes the moment inspiration struck for a piece of piano music she calls, The Pandemic Waltz."
                />

                <PicBox
                    title="Why singing can make you feel better in lockdown"
                    imageUrl="https://ichef.bbci.co.uk/wwfeatures/live/1600_900/images/live/p0/8d/hz/p08dhzgp.jpg" 
                    content="Whether you have the voice of a songbird or sound like some ball-bearings in a blender, singing can have some remarkably positive effects."
                />

                <PicBox
                    title="What we know about anti-malarial drugs and Covid-19"
                    imageUrl="https://s.france24.com/media/display/bf800c80-90b1-11ea-8ca8-005056a98db9/w:980/p:16x9/73084772d55da50f1e6c8a116626f576b2b5078f.webp" 
                    content="Studies are underway to examine if hydroxychloroquine (and a similar drug chloroquine) is effective against the coronavirus."
                />

                <PicBox
                    title="Why more forest are being chopped down"
                    imageUrl="https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/8d/hl/p08dhltl.jpg" 
                    content="With fewer planes in the sky and cars on the road, lockdown has brought many benefits to the environment. So why is it harming tropical rainforests?"
                />

                <PicBox
                    title="How exposed is your job to coronavirus"
                    imageUrl="https://ichef.bbci.co.uk/news/660/cpsprodpb/97A9/production/_112252883_coronavirus_jobs_by_risk_index_976.jpg" 
                    content="Millions of workers are doing their day jobs from makeshift setups in their living rooms and kitchens, while those who can't work from home are not encouraged to go back in if they can do so safely."
                />

            </div>  

            
        </div>
    )
}


export default Home;
