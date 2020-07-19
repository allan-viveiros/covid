import React from 'react';

import TipsComponent from '../components/tips/tipComponent';
import './tips-style.scss';


const Tips = () => {
    return(
        <div className="tips-container">
            <h1> Tips </h1>
            <div className="main-container">           

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

        </div>
    )
}


export default Tips;
