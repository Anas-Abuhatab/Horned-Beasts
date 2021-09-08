import React, { Component } from 'react';
// import App from '../App';
import {
    Card,
    Button,
    Col
} from 'react-bootstrap'


class SelectedBeast extends Component {
    constructor(fav) {
        super(fav);
        this.state = {
            fav: 0
        }
    }

    favFun = () => {
        this.setState({
            fav: this.state.fav + 1
        });
    }


    render() {
        return (
            <>
                {/* <h2>Title : {this.props.title}</h2>

                <h3>Name : {this.props.keyword}</h3>

                <img onClick={this.favFun} src={this.props.img} alt={this.props.title} title="animal" />

                <h3>#of Horns : {this.props.horns}</h3>

                <p>Descreption : {this.props.descreption}</p>

                <h3>likes:&#128151;{this.state.fav}</h3> */}



                <Col>
                    <Card style={{ width: '19rem' ,height:'auto' }}>
                        <Card.Img style={{margin:'auto' ,background:'cover',height:'19rem'}} 
                        variant="top" 
                        onClick={this.favFun} 
                        src={this.props.img} />
                        <Card.Body>
                            <Card.Title>{this.props.keyword}</Card.Title>
                            <Card.Text>
                                 <h3>likes:&#128151;{this.state.fav}</h3>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default SelectedBeast
