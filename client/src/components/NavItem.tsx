import { Link } from "react-router-dom";

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

export default NavItem;