import ExchangeItem from "./ExchangeItem";

import styled from "styled-components";


const ExchangeListBlock = styled.div`
  width: 42%;
  min-height: 90%;

  box-sizing: border-box;
  padding: 6px 10px;

  display: flex;
  flex-direction: column;

  border-radius: 16px;;

  background: ${({ theme }) => theme.color.background};
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1180px) {
    width: 60%;
    margin: 24px 0;
  }
`;

interface ExchangeListProps {
  exchanges: Exchange[];
}

function ExchangeList({ exchanges }: ExchangeListProps) {
  const emptyList = exchanges.length < 12 ? new Array(12 - exchanges.length).fill(0) : [];
  return (
    <ExchangeListBlock>
      {exchanges.map(exc =>
        <ExchangeItem key={exc.cur_unit} exchange={exc} />
      )}
      {emptyList.map((i) => 
        <ExchangeItem key={"empty_item_" + i} />
      )}
    </ExchangeListBlock>
  )
}

export default ExchangeList;