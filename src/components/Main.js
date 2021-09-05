import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';


// props is an object to  
class Main extends Component {
    render() {
        
        return (
            <>
                <><h1>the main </h1></>
                    <p> displays images and information of horned animals. 
                        This application will allow you to filter the images by 
                        number of horns and chose your favorite image.</p>
                
                  <HornedBeasts/>
                  <HornedBeasts/>

                
            </>
        )
    }
}

export default Main
