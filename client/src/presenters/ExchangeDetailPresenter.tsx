import styled from "styled-components";

import BackButton from "../components/BackButton";
import CalculatorContainer from "../containers/CalculatorContainer";
import GraphContainer from "../containers/GraphContainer";

const ExchangeDetailPresenterBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyWrap = styled.div`
  flex-grow: 1;

  display: flex;
`;

function ExchangeDetailPresenter() {
  return (
    <ExchangeDetailPresenterBlock>
      <BackButton />
      <BodyWrap>
        <GraphContainer />
        <CalculatorContainer />
      </BodyWrap>
    </ExchangeDetailPresenterBlock>
  )
}

export default ExchangeDetailPresenter;