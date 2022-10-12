import styled from "styled-components";

import { Link } from 'react-router-dom';

const LogoBlock = styled.div`
  padding: 24px 0;
`;

const LogoText = styled.h1`
  color: ${({ theme }) => theme.color.main};

  text-align: center;
  font-size: 16px;
  font-weight: ligther;
  letter-spacing: 0.8em;

  a {
    color: ${({ theme }) => theme.color.main};
    text-decoration: none;
  }
`;

function Logo() {
  return (
    <LogoBlock>
      <LogoText>
        <Link to="/">EXC&INT</Link>
      </LogoText>
    </LogoBlock>
  )
}

export default Logo;