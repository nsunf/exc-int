import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from "styled-components";

const NavItemBlock = styled.li<{selected: boolean}>`
  padding: 8px 0 8px 32px;
  a {
    display: flex;
    color: ${({ theme, selected }) => selected ? theme.color.main : theme.color.gray1};
    font-weight: bold;
    text-decoration: none;
  }
`;

const ItemName = styled.span`
  flex-grow: 1;
  padding-left: 8px;
`;

const SelectedBlock = styled.div<{ selected: boolean }>`
  width: ${({ selected }) => selected ? "10px" : "0px"};
  background: ${({ theme }) => theme.color.main};
  transition: 250ms ease-out;
`;

interface NavItemProps {
  name: {
    eng: string,
    ko: string
  }
  imgSrc: {
    enable: string,
    disable: string
  };
  selected: boolean;
}

function NavItem({ name, imgSrc, selected }: NavItemProps) {
  return (
    <NavItemBlock selected={selected}>
      <Link to={"/" + name.eng}>
        <img
          src={selected ? imgSrc.enable : imgSrc.disable}
          alt={name.eng + selected ? "enable" : "disable"}
        />
        <ItemName>{name.ko}</ItemName>
        <SelectedBlock selected={selected}></SelectedBlock>
      </Link>
    </NavItemBlock>
  )
}

const NavBlock = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 16px;
`;

function Nav() {
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname.split('/')[1])
  }, [location]);

  return (
    <NavBlock>
      <NavItem
        name={{ eng: "exchange", ko: "환율" }}
        imgSrc={{ enable: process.env.PUBLIC_URL + '/icon/exchange_icon_enable.png', disable: process.env.PUBLIC_URL + '/icon/exchange_icon_disable.png'}}
        selected={pathname === 'exchange' || pathname === ''}
      />
      <NavItem
        name={{ eng: "interest", ko: "대출 금리" }}
        imgSrc={{ enable: process.env.PUBLIC_URL + '/icon/interest_icon_enable.png', disable: process.env.PUBLIC_URL + '/icon/interest_icon_disable.png'}}
        selected={pathname === 'interest'}
      />
      <NavItem
        name={{ eng: "international", ko: "국제 금리" }}
        imgSrc={{ enable: process.env.PUBLIC_URL + '/icon/international_icon_enable.png', disable: process.env.PUBLIC_URL + '/icon/international_icon_disable.png'}}
        selected={pathname === 'international'}
      />
    </NavBlock>
  )
}

export default Nav;