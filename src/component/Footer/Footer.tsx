import React from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Container
const FooterContainer = styled.div`
  background-color: #000000;
  color: #FFFFFF;
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
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterHeading = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const FooterEmailLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: #7D46F2;
  }
`;

const FooterLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterPageLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    color: #7D46F2;
  }
`;

const FooterSocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  a {
    color: #FFFFFF;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #7D46F2;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterHeading>Sponsor</FooterHeading>
        <FooterEmailLink href="mailto:contact@example.com">
          <FontAwesomeIcon icon={faEnvelope}/>
          contact@example.com
        </FooterEmailLink>
      </FooterSection>

      <FooterSection>
        <FooterHeading>Quick Links</FooterHeading>
        <FooterLinkGroup>
          <FooterPageLink href="#">Home</FooterPageLink>
          <FooterPageLink href="/add">Add</FooterPageLink>
          <FooterPageLink href="#">Support</FooterPageLink>
        </FooterLinkGroup>
      </FooterSection>

      {/* Social Media Section */}
      <FooterSection>
        <FooterHeading>Follow Us</FooterHeading>
        <FooterSocialIcons>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </FooterSocialIcons>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
