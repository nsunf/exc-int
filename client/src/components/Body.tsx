import { useAppSelector } from "../redux/hooks";

import styled from "styled-components";
import ExchangeList from "./ExchangeList";

const BodyBlock = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 0 32px 32px 0;
`;

function Body() {
  const exchangeData = useAppSelector(state => state.exchange.todays);

  return (
    <BodyBlock>
      <ExchangeList exchanges={exchangeData.slice(0, 12)} />
      <ExchangeList exchanges={exchangeData.slice(12, exchangeData.length)} />
    </BodyBlock>
  )
}

export default Body;