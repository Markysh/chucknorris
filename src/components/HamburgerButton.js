import React from "react";
import styled from "styled-components";
import {mediaMobile, mediaTablet} from "../mediaBreakpointsMixin";

export const HamburgerButton = props => {
  const {isOpen} = props;

  return (
    <Holder>
      <MenuButton className={isOpen ? "active" : " "} onClick={props.onClick}>
        <Bar/>
        <Bar/>
      </MenuButton>
      <Title>Favourite</Title>
    </Holder>
  );
};

const Holder = styled.div`
  display: none;
  
  ${mediaTablet(`
    display: flex;
    align-items: center;
  `)}
  
  ${mediaMobile(`
    display: flex;
  `)}
  
`;

const MenuButton = styled.button`
  width: 28px;
  height: 28px;
  padding: 10px 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #333333;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  
  span {
    transition: all 0.3s ease-in-out;
  }

  &.active {
    position: fixed;
    top: 40.5px;
    left: 30px;
    z-index: 3;
  
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(4px, 5px);
    }

    span:nth-of-type(2) {
      transform: rotate(-45deg) translate(4px, -5px);
    }
  }

`;

const Bar = styled.span`
    width: 14px;
    height: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    background-color: white;
    border-radius: 2px
`;

export const Title = styled.div`
  margin-left: 10px;
  font-size: 20px;
  line-height: 28px;
  color: #ababab;
`;