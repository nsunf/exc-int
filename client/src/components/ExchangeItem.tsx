import { Link } from "react-router-dom";
import styled from "styled-components";

const ExchangeItemBlock = styled.li`
  flex-grow: 1;
  flex-basis: 0;
  list-style: none;

  border-bottom: 2px solid ${({ theme }) => theme.color.subBackground};

  cursor: pointer;

  &:last-of-type {
    border: none;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    text-decoration: none;
    color: black;
    &:hover>div:not(:last-child) {
      color: ${({ theme }) => theme.color.main};
    }
  }
`;

const Flag = styled.img`
  width: 32px;
  height: 32px;
`;

const Name = styled.div`
  flex-grow: 1;
  margin-left: 10px;
  font-weight: 600;
`;

const BasicRate = styled.div`
  width: 64px;
  margin-right: 8px;
`;

const FluctuationRate = styled.div<{ isIncreased: boolean }>`
  font-size: 12px;
  font-weight: bold;

  padding: 1px 2px;

  color: white;
  background: ${({ theme, isIncreased }) =>
    isIncreased ? theme.color.red : theme.color.main};
`;

interface ExchangeItemProps {
  exchange?: Exchange;
}

function ExchangeItem({ exchange }: ExchangeItemProps) {
  return (
    <ExchangeItemBlock>
      {exchange ? (
        <Link to={"/exchange/" + exchange.cur_unit}>
          <Flag
            src={`${process.env.PUBLIC_URL}/icon/flag/${exchange.flag}.png`}
            alt={exchange.flag}
          />
          <Name>{`${exchange.cur_nm.split(" ")[0]} (${
            exchange.cur_unit
          })`}</Name>
          <BasicRate>{exchange.deal_bas_r}</BasicRate>
          <FluctuationRate isIncreased={exchange.fluc_r >= 0}>
            {exchange.fluc_r * 100 + "%"}
          </FluctuationRate>
        </Link>
      ) : null}
    </ExchangeItemBlock>
  );
}

export default ExchangeItem;