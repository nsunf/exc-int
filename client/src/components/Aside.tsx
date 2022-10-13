import styled from "styled-components";

import Logo from "./Logo";
import NavContainer from "../containers/NavContainer";

const AsideBlock = styled.div`
  width: 20%;
  height: 100%;
  max-width: 200px;

  background: ${({ theme }) => theme.color.subBackground};

  border-radius: 32px 0 0 32px;
`;

function Aside() {
  return (
    <AsideBlock>
      <Logo />
      <NavContainer />
    </AsideBlock>
  )
}

export default Aside;