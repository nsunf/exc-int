import { RefObject } from "react";
import styled from "styled-components";
import GraphOptions from "../components/GraphOptions";

const GraphPresenterBlock = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  box-sizing: border-box;

  flex-grow: 1;
`;

const CanvasWrap = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  flex-grow: 1;
`;

interface GraphPresenterProps {
  canvasWrapRef: RefObject<HTMLDivElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
}

function GraphPresenter({ canvasWrapRef, canvasRef }: GraphPresenterProps) {
  return (
    <GraphPresenterBlock>
      <GraphOptions />
      <CanvasWrap ref={canvasWrapRef}>
        <canvas ref={canvasRef}></canvas>
      </CanvasWrap>
    </GraphPresenterBlock>
  )
}

export default GraphPresenter;