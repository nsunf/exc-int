import { useEffect } from "react";
import axios from "axios";
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
  useEffect(() => {
    console.log('hoho')
    axios.post('/api/exchange', {
      searchdate: '2022.10.14'
    }).then(res => {
      // console.log(res);
    })

  }, []);

  return (
   <AppBlock>
      <Aside />
      <Body />
    </AppBlock>
  );
}

export default App;
