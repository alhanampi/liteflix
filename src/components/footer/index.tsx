import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { FooterContainer, Left, Right } from './styles';

const Footer = () => (
  <FooterContainer>
    <Left>
      <p>
        Hecho por Pam para
        &nbsp;
        <span>Litebox</span>
      </p>
    </Left>
    <Right>
      <a
        href="https://www.linkedin.com/in/pamina-goldenberg-thiery/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsLinkedin size={ 35 } />
      </a>

      <a
        href="https://github.com/alhanampi"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsGithub size={ 35 } />
      </a>

      <a href="mailto:alhanampi@gmail.com" rel="noopener noreferrer">
        <SiGmail size={ 35 } />
      </a>
      <a
        href="https://wa.me/541167955422"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsWhatsapp size={ 35 } />
      </a>
    </Right>
  </FooterContainer>
);

export default Footer;
