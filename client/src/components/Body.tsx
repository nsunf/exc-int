import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ExchangeContainer from "../containers/ExchangeContainer";

const BodyBlock = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

function Body() {
  return (
    <BodyBlock>
      <Routes>
        <Route path="/*" element={<ExchangeContainer />} />
        <Route path="/interest" element={<></>} />
        <Route path="/international" element={<></>} />
      </Routes>
    </BodyBlock>
  )
}

export default Body;