import styled from "styled-components";
import ExchangeList from "../components/ExchangeList";

const ExchangeBlock = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1180px) {
    align-items: flex-start;
  }
`;

interface ExchangePresenterProps {
  exchangeData: Exchange[];
  numOfCard: number;
}

function ExchangePresenter({ exchangeData, numOfCard }: ExchangePresenterProps) {
  return (
    <ExchangeBlock>
      {numOfCard === 1 ?
        <ExchangeList exchanges={exchangeData} />
        :
        <>
          <ExchangeList exchanges={exchangeData.slice(0, 12)} />
          <ExchangeList exchanges={exchangeData.slice(12, exchangeData.length)} />
        </>
      }
    </ExchangeBlock>
  )
}

export default ExchangePresenter;