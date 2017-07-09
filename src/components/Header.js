import React from 'react';
import styled from 'styled-components';
import StarBackground from '../sunflower-and-stars-background.jpeg';

const Logo = styled.div`
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 24px;
  text-transform: uppercase;
  font-style: normal;
  color: #fff;
  margin-right: auto;
`
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`
const A = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;

  &:hover {
    color: #9c9999;
  }

  padding: 11px 17px;

  &:last-of-type {
    border: 2px solid #fff;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`


const Background = styled.div`
  padding: 24px 20px;
  height: 483px;
  background-image: url(${StarBackground});
  background-size: cover;
  background-position: 0 -258px;
  background-repeat: no-repeat;
  color: #fff;

  @media (max-width: 667px) {
    background-size: 200% 789px;
    background-position: 50% -258px !important;
  }
`

const HeroText = styled.div`
  margin-top: 128px;
  text-align: center;
  font-size: 64px;
`

const Header = () => (
  <Background>
    <Nav>
      <Logo>Veradical</Logo>
      <A target="_blank" href="http://www.masonforest.com/">Blog</A>
      <A target="_blank" href="mailto:mason@kissr.co">Hire Me</A>
    </Nav>
    <HeroText>Let&apos;s Build Something Together. </HeroText>
  </Background>
);

export default Header;
