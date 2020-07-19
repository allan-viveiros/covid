import React from 'react';

import './home-style.scss';
import TipsComponent from '../components/tips/tipComponent';


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
                    title="Tip 1"
                    imageUrl="https://www.ub.edu/web/ub/galeries/imatges/noticies/2020/02/coronavirusDEF.jpg" 
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea assumenda numquam porro provident facilis veniam a, nisi voluptatem possimus hic earum obcaecati cum autem suscipit, in tempore eum nam?"
                />

                <TipsComponent
                    title="Tip 2"
                    imageUrl="https://www.ub.edu/web/ub/galeries/imatges/noticies/2020/02/coronavirusDEF.jpg" 
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea assumenda numquam porro provident facilis veniam a, nisi voluptatem possimus hic earum obcaecati cum autem suscipit, in tempore eum nam?"
                />

                <TipsComponent
                    title="Tip 3"
                    imageUrl="https://www.ub.edu/web/ub/galeries/imatges/noticies/2020/02/coronavirusDEF.jpg" 
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea assumenda numquam porro provident facilis veniam a, nisi voluptatem possimus hic earum obcaecati cum autem suscipit, in tempore eum nam?"
                />
            </div>  

            https://www.youtube.com/watch?v=8b2mTq0Xrtw&list=PLseEjOQBo8bdJebTFf0w2WUSMHMWxjmUN&index=58&t=53s
        </div>
    )
}


export default Home;
