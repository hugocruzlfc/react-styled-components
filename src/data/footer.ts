import React, { ReactElement } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

interface SocialData {
  name: string;
  icon: ReactElement;
}

const iconStyle = (Icon: React.ElementType): ReactElement =>
  React.createElement(Icon);

export const footerSocialData: SocialData[] = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
  },
  {
    name: "YouTube",
    icon: iconStyle(FaYoutube),
  },
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
  },
];

interface FooterData {
  title: string;
  links: string[];
}

export const footerData: FooterData[] = [
  {
    title: "Main",
    links: ["Blog", "FAQs", "Support", "About us"],
  },
  {
    title: "Product",
    links: ["Login", "Personal", "Business", "Team"],
  },
  {
    title: "Press",
    links: ["Logos", "Events", "Stories", "Office"],
  },
  {
    title: "Legal",
    links: ["GDPR", "Privacy Policy", "Terms of Service", "Disclaimer"],
  },
];
