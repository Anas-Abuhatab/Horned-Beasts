import React, { Component } from 'react';
 class HornedBeasts extends Component {
    

    constructor(fav){
        super(fav);
        this.state={
            fav:0
        }
    }

    favFun =() => {
        this.setState({
            fav:this.state.fav+1
        });
         }
    
    
    
    
    render() 
    {
        return (
            <>
                <h2>Title : {this.props.title}</h2>

                <h3>Name : {this.props.keyword}</h3>
                
                <img onClick={this.favFun} src={this.props.img} alt={this.props.title} title="animal"/>

                <h3>#of Horns : {this.props.horns}</h3>

                <p>Descreption : {this.props.descreption}</p>

                <h3>likes:&#128151;{this.state.fav}</h3>

                

            </>
            
        )
    }
}

export default HornedBeasts
