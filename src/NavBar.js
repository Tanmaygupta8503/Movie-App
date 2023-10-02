import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: 'Times New Roman', 'Times' , 'serif';
  text-transform: uppercase;
  margin-left: 20px;
  &:hover{
    color : #000;
  }
`;

const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.div`
  background-color: ${(props) => props.color}; /* Removed quotes */
  border-radius: 50%; /* Changed to dash syntax */
  padding: 4px 8px;
  position: absolute;
  right: 10px; /* Added "px" unit */
  top: -5px; /* Added "px" unit */
  font-size: 12px; /* Added "px" unit */
  visibility:${(props) => !props.show ? "hidden" : "visible"};
`;

class Navbar extends Component {
  render() {
    const {cartCount} = this.props;
    return (
      <Nav>
        <Title>Movie-App</Title>
        <CartIconContainer>
          <CartImg
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <CartCount color="pink" show = {true}>{cartCount}</CartCount>
        </CartIconContainer>
      </Nav>
    );
  }
}

export default Navbar;
