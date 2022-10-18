import styled from "styled-components";

import Aside from "./components/Aside";
import Body from "./components/Body";

const AppBlock = styled.div`
  width: 90vw;
  height: 80vh;
  min-height: 550px;
  min-width: 880px;
  max-width: 1180px; 
  margin: 10vh auto;

  background: ${({ theme }) => theme.color.background};

  border-radius: 32px;

  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <AppBlock>
      <Aside />
      <Body />
    </AppBlock>
  );
}

export default App;
