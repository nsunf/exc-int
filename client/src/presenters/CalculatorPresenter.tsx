import styled from "styled-components";

import { FaExchangeAlt } from "react-icons/fa";

const CalculatorPresenterBlock = styled.div`
  width: 320px;

  border: 1px solid blue;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 90%;
  height: 80%;
  border-radius: 16px;

  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.25);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-left: 16px;
  }

  span {
    line-height: 24px;
  }

  span:first-child {
    font-size: 28px;
    font-weight: bold;
  }

  span:last-child {
    font-size: 22px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ExchangeIcon = styled(FaExchangeAlt)`
  color: ${({ theme }) => theme.color.main};
  font-size: 32px;
  transform: rotate(90deg);
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 80%;
  padding: 8px 16px;
  margin: 0 8px;

  border: none;
  border-radius: 8px;

  background: ${({ theme }) => theme.color.subBackground};

  input {
    background: none;
    border: none;

    &:focus {
      outline: none
    }
  }

  span {
    color: ${({ theme }) => theme.color.gray2};
    flex-shrink: 0;
  }
`;

interface CalculatorPresenterProps {
  imgSrc: string;
  countryName: string;
  unitKo: string;
  unitEn: string;
  deal_bas_r: string;
}

function CalculatorPresenter({ imgSrc, countryName, unitKo, unitEn, deal_bas_r }: CalculatorPresenterProps) {
  return (
    <CalculatorPresenterBlock>
      <CardBlock>
        <CardHeader>
          <img src={imgSrc} alt="flag_img" />
          <div>
            <span>{countryName}</span>
            <span>{unitEn}</span>
          </div>
        </CardHeader>
        <CardBody>
          <InputBox>
            <input type="number" value="1"/>
            <span>원</span>
          </InputBox>
          <ExchangeIcon />
          <InputBox>
            <input type="number" value={parseFloat(deal_bas_r.replace(',', ''))} disabled/>
            <span>{unitKo}</span>
          </InputBox>
        </CardBody>
      </CardBlock>
    </CalculatorPresenterBlock>
  )
}

export default CalculatorPresenter;