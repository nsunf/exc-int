import styled from "styled-components";

import NavItem from "../components/NavItem";

const NavBlock = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 16px;
`;

interface NavPresenterProps {
  pathname: string;
}

function NavPresenter({ pathname }: NavPresenterProps) {
  return (
    <NavBlock>
      <NavItem
        name={{ eng: "exchange", ko: "환율" }}
        imgSrc={{ enable: process.env.PUBLIC_URL + '/icon/nav/exchange_icon_enable.png', disable: process.env.PUBLIC_URL + '/icon/nav/exchange_icon_disable.png'}}
        selected={pathname === 'exchange' || pathname === ''}
      />
      <NavItem
        name={{ eng: "interest", ko: "대출 금리" }}
        imgSrc={{ enable: process.env.PUBLIC_URL + '/icon/nav/interest_icon_enable.png', disable: process.env.PUBLIC_URL + '/icon/nav/interest_icon_disable.png'}}
        selected={pathname === 'interest'}
      />
      <NavItem
        name={{ eng: "international", ko: "국제 금리" }}
        imgSrc={{ enable: process.env.PUBLIC_URL + '/icon/nav/international_icon_enable.png', disable: process.env.PUBLIC_URL + '/icon/nav/international_icon_disable.png'}}
        selected={pathname === 'international'}
      />
    </NavBlock>
  )
}

export default NavPresenter;