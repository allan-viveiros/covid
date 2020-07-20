import React from 'react';

import './picbox.scss';


const PicBox = ({title, imageUrl, content, link}) => {
    return(
        <div>

            <div className="card-box">

                <div className="img-box">
                    <img src={imageUrl} alt={title} />
                </div>

                <div className="content-box">
                    <h2> {title} </h2>
                    <p> {content} </p>
                </div>

                <span> 
                    <a href={link ? link :'#!' }
                    rel="noopener noreferrer" 
                    target="_blank"> 
                        Read more 
                    </a> 
                </span>

            </div>

        </div>
    )
}


export default PicBox;
