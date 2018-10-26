import React from "react";
import styled from "styled-components";
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #1361a5;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
    background-color: #000;
  }
`;

class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      popoverOpen: false
    }
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return(
      <div>
        <Wrapper
          alt={this.props.text}
          onClick={this.toggle}
        id={'Popover-'+ this.props.id}/>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'Popover-'+ this.props.id} toggle={this.toggle}>
          <PopoverHeader><i className="ti-car mr-2 ml-1" />{this.props.text}</PopoverHeader>
          <PopoverBody>
            Direction: {this.props.direction}<br/>
            Destination: {this.props.destination}
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Marker;
