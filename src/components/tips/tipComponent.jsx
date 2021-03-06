import React from 'react';

import './tipcomponent.scss';


const TipsComponent = ({title, imageUrl, content}) => {
    return(
        <div>
            <div className="container-tip">
                <h1> {title} </h1>

                <div className="img-tip">
                    <img src={imageUrl} alt={title} />
                </div>

                <div className="content-tip">
                    {content}
                </div>

            </div>

        </div>
    )
}


export default TipsComponent;
