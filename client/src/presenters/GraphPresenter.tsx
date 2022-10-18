import { RefObject } from "react";
import styled from "styled-components";
import GraphOptions from "../components/GraphOptions";

const GraphPresenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CanvasWrap = styled.div`
  flex-grow: 1;
`;

interface GraphPresenterProps {
  canvasWrapRef: RefObject<HTMLDivElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
  mode: GraphMode;
  onClickMode: (mode: GraphMode) => void;
}

function GraphPresenter({ canvasWrapRef, canvasRef, mode, onClickMode }: GraphPresenterProps) {
  return (
    <GraphPresenterBlock>
      <GraphOptions mode={mode} onClickMode={onClickMode} />
      <CanvasWrap ref={canvasWrapRef}>
        <canvas ref={canvasRef}></canvas>
      </CanvasWrap>
    </GraphPresenterBlock>
  )
}

export default GraphPresenter;