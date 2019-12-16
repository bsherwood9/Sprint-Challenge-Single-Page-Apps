import React from "react";
import logo from "../assets/rmlogo.png";
import styled from "styled-components";

export default function Header() {
  const Header = styled.div`
    text-align: center;
  `;
  const Logo = styled.img`
    width: 500px;
    margin-bottom: -50px;
  `;
  const Title = styled.h1`
    padding-right: 40px;
  `;
  return (
    <Header className="ui centered">
      <Logo src={logo} />
      <Title className="ui center">Fan Page</Title>
    </Header>
  );
}
