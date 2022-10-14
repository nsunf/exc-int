import { RefObject } from "react";
import styled from "styled-components";

const CanvasWrap = styled.div`
  border: 1px solid red;
  flex-grow: 1;
`;

interface GraphPresenterProps {
  canvasWrapRef: RefObject<HTMLDivElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
}

function GraphPresenter({ canvasWrapRef, canvasRef }: GraphPresenterProps) {
  return (
    <CanvasWrap ref={canvasWrapRef}>
      <canvas ref={canvasRef}></canvas>
    </CanvasWrap>
  )
}

export default GraphPresenter;