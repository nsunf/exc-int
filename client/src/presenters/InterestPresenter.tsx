import styled from "styled-components";
import BarGraph from "../components/BarGraph";

const InterestPresenterBlock = styled.div`
  box-sizing: border-box;

  height: 100%;
  overflow-y: auto;
`;

const Title = styled.div`
  margin: 40px;
  margin-bottom: 20px;
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
`;

interface InterestPresenterProps {
  data: Interest[];
}

function InterestPresenter({ data }: InterestPresenterProps) {
  return (
    <InterestPresenterBlock>
      <Title><h2>수은채 유통수익률</h2></Title>
      <BarGraph data={data} />
    </InterestPresenterBlock>
  )
}

export default InterestPresenter;