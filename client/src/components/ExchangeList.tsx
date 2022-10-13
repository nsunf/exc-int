import styled from "styled-components";

const ExchangeItemBlock = styled.li`
  flex-grow: 1;
  flex-basis: 0;
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 2px solid ${({ theme }) => theme.color.subBackground};

  &:last-of-type {
    border: none;
  }
`;

const Flag = styled.img`
  width: 32px;
  height: 32px;
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
      <Flag src={`${process.env.PUBLIC_URL}/icon/flag/${exchange.flag}.png`} alt={exchange.flag}/>
      <Name>{`${exchange.cur_nm.split(' ')[0]} (${exchange.cur_unit})`}</Name>
      <BasicRate>{exchange.deal_bas_r}</BasicRate>
      <FluctuationRate isIncreased={exchange.fluc_r >= 0}>{exchange.fluc_r * 100 + "%"}</FluctuationRate>
      </>
      : null
      }
    </ExchangeItemBlock>
  )
}

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