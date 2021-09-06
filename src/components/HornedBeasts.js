import React, { Component } from 'react'

 class HornedBeasts extends Component {
    render() {

        let fav = 0;


        return (
            <>
                <h2>Title : {this.props.title}</h2>

                <h3>Name : {this.props.keyword}</h3>

                <img onClick={fav++} src={this.props.img} alt={this.props.title} title="animal"/>

                <h3>#of Horns : {this.props.horns}</h3>

                <p>Descreption : {this.props.descreption}</p>

              
            </>
        )
    }
}

export default HornedBeasts
