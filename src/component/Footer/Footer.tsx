import React from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Container
const FooterContainer = styled.div`
  background-color: #111;
  color: #f0f0f0;
  padding: 60px 20px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 100px;
  gap: 100px;

`;

// Sections
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Heading = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const EmailLink = styled.a`
  color: #f0f0f0;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: #00d8ff;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #f0f0f0;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    color: #00d8ff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  a {
    color: #f0f0f0;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #00d8ff;
    }
  }
`;

const Divider = styled.hr`
  width: 80%;
  border: 0.5px solid #333;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #888;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Section>
        <Heading>Sponsor Us</Heading>
        <EmailLink href="mailto:contact@example.com">
          <FontAwesomeIcon icon={faEnvelope} />
          contact@example.com
        </EmailLink>
      </Section>

      <Section>
        <Heading>Quick Links</Heading>
        <LinkGroup>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Add</FooterLink>
          <FooterLink href="#">Support</FooterLink>
        </LinkGroup>
      </Section>

      {/* Social Media Section */}
      <Section>
        <Heading>Follow Us</Heading>
        <SocialIcons>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </SocialIcons>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
