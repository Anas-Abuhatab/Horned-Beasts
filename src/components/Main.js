import React, { Component } from 'react';
import Data from './data.json';
import HornedBeasts from './HornedBeasts';




class Main extends Component {
    
    render() {   
        return (
            <>
                <h1>Horned Beasts </h1>
                    <p> displays images and information of horned animals. 
                        This application will allow you to filter the images by 
                        number of horns and chose your favorite image.</p>

                
                <div>{
                        Data.map(element =>{
                            return <HornedBeasts kk={this.rise}
                                                
                                                  horns={element.horns} 
                                                  title={element.title} 
                                                  descreption={element.description} 
                                                  keyword={element.keyword} 
                                                  img={element.image_url}/>
                        })
                      }
                </div>   
                
          </>
        )
    }
}

export default Main
