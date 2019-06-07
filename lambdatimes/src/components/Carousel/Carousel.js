import React, { Component } from 'react';
import CarouselBox from './StyledComponents/Carousel';
import { carouselData } from '../../data';
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
    }
  }
  componentDidMount(){
    this.setState({images: carouselData});
  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselBox>
        <div onClick={this.leftClick}>{"<"}</div>
        <div onClick={this.rightClick}>{">"}</div>
      </CarouselBox>
    )
  }
}