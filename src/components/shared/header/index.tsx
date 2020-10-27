import { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  Classes,
  Alignment,
  NavbarDivider,
  H4,
} from '@blueprintjs/core';
import PageDrawer from '@components/shared/pageDrawer';

interface ILinkTypes {
  label: string;
  href: string;
}

const Header = ({ filenames, currentUser }: any) => {
  let links = [] as Array<ILinkTypes>;

  links = [
    // @ts-ignore
    !currentUser && { label: 'Login', href: '/login' },
    currentUser && { label: 'Logout', href: '/logout' },
    { label: 'Home', href: '/' },
  ];
  const navItems = () => {
    return links
      .filter((linkConfig: ILinkTypes) => linkConfig)
      .map((item: ILinkTypes) => {
        return (
          <Link key={item.href} href={item.href}>
            <Button className={Classes.MINIMAL}>{item.label}</Button>
          </Link>
        );
      });
  };

  return (
    <div>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          {/* <img style={{ width: '45%' }} src="images/chintai_admin_logo.svg" /> */}
          <H4>Chintai Prototyping</H4>
          <NavbarDivider />
          <PageDrawer filenames={filenames} />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>{navItems()}</NavbarGroup>
      </Navbar>
    </div>
  );
};

export default Header;
