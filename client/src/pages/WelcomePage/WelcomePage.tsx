import React from 'react';
import { StyledWelcomePage, StyledWelcomeModal, StyledNavLink } from './styled/WelcomePage.styled';
import { Button } from '../../components/Button';

interface NavLinkProps {
  type: 'button';
  href: string;
  text: string;
}

export const WelcomePage = () => {
  const navLinks: NavLinkProps[] = [
    { type: 'button', href: '/signup', text: 'Sign up' },
    { type: 'button', href: '/playground', text: 'Play' },
  ];
  return (
    <StyledWelcomePage>
      <StyledWelcomeModal>
        <h1>Welcome!</h1>
        <div>
          {navLinks.map(link => (
            <StyledNavLink to={link.href} key={link.href}>
              <Button type={link.type} primary>
                {link.text}
              </Button>
            </StyledNavLink>
          ))}
        </div>
      </StyledWelcomeModal>
    </StyledWelcomePage>
  );
};
