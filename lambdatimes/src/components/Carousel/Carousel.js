import React, { Component } from 'react';
import CarouselBox from './StyledComponents/Carousel';
import { carouselData,} from '../../data';
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selected: 0,
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData,
    });
  }

  leftClick = () => {
    if (this.state.selected > 0) {
      this.setState(prevState => ({selected: prevState.selected - 1}));
    }
  }

  rightClick = () => {
    if (this.state.selected < (this.state.images.length - 1)) {
      this.setState(prevState => ({selected: prevState.selected + 1}));
    }
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.selected]} alt='Carousel' style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselBox>
        <div onClick={this.leftClick}>{"<"}</div>
        <div onClick={this.rightClick}>{">"}</div>
        {this.selectedImage()}
      </CarouselBox>
    )
  }
}