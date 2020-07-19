import React from 'react';

import Menu from './components/menu/menu';
import './app-style.css';
import Footer from './components/footer/footer';


class App extends React.Component {   


    render() {
      
        return (
            <div className="main-app">
            
                <Menu />      

                <div className="main-footer">    
                    <Footer />
                </div>

            </div>
        )
    }


    

}


export default App;
