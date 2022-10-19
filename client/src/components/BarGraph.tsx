import styled from "styled-components";
import { useState, useEffect } from "react";
import useAnimationTimer from "../hooks/useAnimationTimer";

const BarBlock = styled.div`
  display: flex;
  height: 56px;
  line-height: 56px;

  &:first-child>div:nth-child(2) {
    border-top: 2px solid ${({ theme }) => theme.color.gray1};
  }
`;

const Label = styled.div`
  flex-grow: 0;
  width: 100px;
  padding: 0 16px;

  color: ${({ theme }) => theme.color.gray2};

  font-weight: bold;
  text-align: right;
`;

const Wrap = styled.div`
  flex-grow: 1;
  border-left: 2px solid ${({ theme }) => theme.color.gray1};

  display: flex;
  align-items: center;
`;

const Box = styled.div<{ animationStarted: boolean, width: number }>`
  width: 0px;
  height: 20px;
  background: ${({ theme }) => theme.color.main};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 1500ms 250ms;

  ${({ animationStarted, width }) => animationStarted ? `
    width: ${width}px;
  ` : ''}
`;
const ValueLabel = styled.div`
  padding: 0 18px;
  color: ${({ theme }) => theme.color.main};
  font-weight: bold;
`

interface BarProps {
  interest: Interest;
}

function Bar({ interest }: BarProps) {
  const animationStarted = useAnimationTimer();

  return (
    <BarBlock>
      <Label>
        <span>{interest.sfln_intrc_nm.slice(10)}</span>
      </Label>
      <Wrap>
        <Box animationStarted={animationStarted} width={Number(interest.int_r) * 50}></Box>
        <ValueLabel>{interest.int_r}%</ValueLabel>
      </Wrap>
    </BarBlock>
  )
}


const BarGraphBlock = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
`;

interface BarGraphProps {
  data: Interest[];
}

function BarGraph({ data }: BarGraphProps) {
  return (
    <BarGraphBlock>
      {data.map(interest => <Bar key={interest.sfln_intrc_nm} interest={interest} />)}
    </BarGraphBlock>
  )
}

export default BarGraph;