import styled from "styled-components";

import Logo from "./Logo";
import Nav from "./Nav";

const AsideBlock = styled.div`
  width: 180px;
  height: 100%;

  background: ${({ theme }) => theme.color.subBackground};

  border-radius: 32px 0 0 32px;
`;

function Aside() {
  return (
    <AsideBlock>
      <Logo />
      <Nav />
    </AsideBlock>
  )
}

export default Aside;