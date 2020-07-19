import React from 'react';

import './picbox.scss';


const PicBox = ({title, imageUrl, content}) => {
    return(
        <div>

            <div className="card-box">

                <div className="img-box">
                    <img src={imageUrl} alt={title} />
                </div>

                <div className="content-box">
                    <h2> Card One </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga, nulla facilis saepe officia, nesciunt provident dolores deserunt explicabo esse cumque temporibus ipsum.</p>
                </div>
            </div>

        </div>
    )
}


export default PicBox;
