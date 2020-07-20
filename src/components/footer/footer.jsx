import React from 'react';

import './footer-style.scss';


const Footer = () => {
    return(
        <div>
            <footer>

            <div className="footer-container">
                <div className="footer-logo">
                    {/*<img src="https://f2.pngfuel.com/png/247/208/1007/covid19-coronavirus-virus-green-cartoon-smile-png-clip-art.png" alt="COVID-19" />
                    */}                    
                </div> 

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea assumenda numquam porro provident facilis veniam a, nisi voluptatem possimus hic earum obcaecati cum autem suscipit, in tempore eum nam?</span>               
            </div>

            <div className="footer-social">
                <span> &copy;Developed by Allan Viveiros </span>

            </div>
            
            </footer>
        </div>
    )
}


export default Footer;
