import styled from "styled-components";

const ExchangeItemBlock = styled.li`
  flex-grow: 1;
  flex-basis: 100%;
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 2px solid ${({ theme }) => theme.color.subBackground};

  &:last-of-type {
    border: none;
  }
`;

const Flag = styled.div`
  font-size: 24px;
`;

const Name = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

const BasicRate = styled.div`
  width: 64px;
  margin-right: 8px;
`;

const FluctuationRate = styled.div<{ isIncreased: boolean}>`
  font-size: 12px;
  font-weight: bold;
  
  padding: 1px 2px;

  color: white;
  background: ${({ theme, isIncreased }) => isIncreased ? theme.color.red : theme.color.main};
`;

interface ExchangeItemProps {
  exchange?: Exchange;
}

function ExchangeItem({ exchange }: ExchangeItemProps) {
  return (
    <ExchangeItemBlock >
      {exchange ?
      <>
      <Flag>{exchange.flag}</Flag>
      <Name>{exchange.cur_nm + "(" + exchange.cur_unit + ")"}</Name>
      <BasicRate>{exchange.deal_bas_r}</BasicRate>
      <FluctuationRate isIncreased={exchange.fluc_r >= 0}>{exchange.fluc_r * 100 + "%"}</FluctuationRate>
      </>
      : null
      }
    </ExchangeItemBlock>
  )
}

const ExchangeListBlock = styled.div`
  width: 380px;
  height: 90%;

  box-sizing: border-box;
  padding: 6px 10px;

  display: flex;
  flex-direction: column;

  border-radius: 16px;;

  background: ${({ theme }) => theme.color.background};
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.25);
`;

interface ExchangeListProps {
  exchanges: Exchange[];
}

function ExchangeList({ exchanges }: ExchangeListProps) {
  const emptyList = new Array(12 - exchanges.length).fill(0);
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