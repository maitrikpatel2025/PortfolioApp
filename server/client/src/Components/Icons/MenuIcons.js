import React from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #00000f;
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {

    }
    &:nth-child(2) {
      width: 1rem;
    }
    &:nth-child(3) {
    }
  }
`;

const MenuIcons = ({onClick}) => {
  return (
    <div className="MenuButton" onClick={onClick}>
      <StyledBurger>
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  );
};
export default MenuIcons;
