import styled from "styled-components";
import useAnimationTimer from "../hooks/useAnimationTimer";


const BarBlock = styled.div<{ animationStarted: boolean, value: number }>`
  height: 0px;
  width: 40px;
  margin: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  &:first-child {
    background: ${({ theme }) => theme.color.blue1};
  }
  &:nth-child(2) {
    background: ${({ theme }) => theme.color.blue2};
  }
  &:nth-child(3) {
    background: ${({ theme }) => theme.color.blue3};
  }

  span {
    color: white;
    margin: 2px 0;
  }

  transition: 1500ms 250ms;

  ${({ animationStarted, value }) =>
    animationStarted ? `height: ${value * 50}px` : ''};
`;

interface BarProps {
  value: number;
}

function Bar({ value }: BarProps) {
  const animationStarted = useAnimationTimer();

  return (
    <BarBlock animationStarted={animationStarted} value={value}>
      <span>{value}</span>
    </BarBlock>
  )
}

const InternationalGraphBlock = styled.div`
  margin-bottom: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const BarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const Label = styled.div`
  overflow: hidden;
  & * {
    float: left;
  }
  img {
    width: 40px;
    height: 40px;
  }
  span {
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
    margin-left: 8px;
  }
`;

interface InternationalGraphProps {
  name: string;
  flag: string;
  values: number[];
}

function InternationalGraph({ name, flag, values }: InternationalGraphProps) {
  return (
    <InternationalGraphBlock>
      <BarWrap>
        {values.map((value, i) => <Bar key={name + i} value={value} />)}
      </BarWrap>
      <Label>
        <img src={flag} alt={name} />
        <span>{name}</span>
      </Label>
    </InternationalGraphBlock>
  )
}

export default InternationalGraph;