import { useAppSelector } from "../redux/hooks";

import styled from "styled-components";
import ExchangeList from "./ExchangeList";
import { useEffect, useState } from "react";

const BodyBlock = styled.div`
  flex-grow: 1;
  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 0 32px 32px 0;

  @media (max-width: 1180px) {
    align-items: flex-start;
  }
`;

function Body() {
  const exchangeData = useAppSelector(state => state.exchange.todays);
  const [numOfCard, setNumOfCard] = useState<1|2>(1);

  useEffect(() => {
    const resizeEvent = () => {
      setNumOfCard(window.innerWidth > 1180 ? 2 : 1);
    };
    resizeEvent();
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    }
  }, []);

  return (
    <BodyBlock>
      {numOfCard === 1 ?
        <ExchangeList exchanges={exchangeData} />
        :
        <>
        <ExchangeList exchanges={exchangeData.slice(0, 12)} />
        <ExchangeList exchanges={exchangeData.slice(12, exchangeData.length)} />
        </>
      }
    </BodyBlock>
  )
}

export default Body;